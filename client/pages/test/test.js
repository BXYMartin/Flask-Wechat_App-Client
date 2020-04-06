const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Loading",
    src: "",
    author: "Catherine Zhang",
    input: "",
    display: true,
    play: "Play Audio",
    click: 0
  },
  unlock: function() {
    this.data.click += 1;
    if (this.data.click >= 10) {
      this.setData(this.data);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    var that=this
    wx.request({
      url: app.globalData.server + 'get_trail',
      data: {'block': app.globalData.block, 'trail': app.globalData.trail},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({ chinese: res.data.chinese, pinyin: res.data.pinyin, display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail});
        that.audioCtx = wx.createAudioContext('testAudio');
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '实验获取失败',
          icon: 'none',
          duration: 2000
        })
      },
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  funplay: function(){
      console.log("audio play");
  },
  funpause: function(){
      console.log("audio pause");
  },
  funtimeupdate: function(u){
      console.log(u.detail.currentTime);
      console.log(u.detail.duration);
      this.setData({play: parseInt(u.detail.currentTime) + ' s'});
  },
  funended: function(){
      console.log("audio end");
      this.setData({
        display: false
      });
      this.setData({play: "Play Audio"});
  },
  funerror: function(u){
      console.log(u.detail.errMsg);
  },
  pinyin: function(res){
    console.log(res);
    if (!(app.globalData.block in app.globalData.answer)) {
      app.globalData.answer[app.globalData.block] = {};
    }
    if (!(app.globalData.trail in app.globalData.answer[app.globalData.block])) {
      app.globalData.answer[app.globalData.block][app.globalData.trail] = {};
    }
    app.globalData.answer[app.globalData.block][app.globalData.trail][res.target.id] = res.detail.value;
  },
  next: function(){
    if (app.globalData.trail + 1 > 30) {
      wx.showToast({
        title: '实验第'+app.globalData.block+'部分完成，可休息一会或继续',
        icon: 'none',
        duration: 2000
      })
      if (app.globalData.block + 1 > 4) {
        var that=this
        wx.request({
          url: app.globalData.server + 'send_answer',
          data: {
            answer: JSON.stringify(app.globalData.answer),
            openid: app.globalData.openid,
            name: app.globalData.userInfo.nickName,
        },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          method: 'POST',
          success: function (res) {
            wx.navigateTo({
              url: '../moe/moe',
            })
          },
          fail: function (e) {
            console.log(e);
            wx.showToast({
              title: '结果发送失败',
              icon: 'none',
              duration: 2000
            })
          },
        })
        return;
      }
      app.globalData.block = app.globalData.block + 1;
      app.globalData.trail = 1;
    }
    else {
      app.globalData.trail = app.globalData.trail + 1;
    }
    var that=this
    wx.request({
      url: app.globalData.server + 'get_trail',
      data: {'block': app.globalData.block, 'trail': app.globalData.trail},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({ click: 0, chinese: res.data.chinese, pinyin: res.data.pinyin, play: "Play Audio", display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail});
        that.audioCtx = wx.createAudioContext('testAudio');
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '实验获取失败',
          icon: 'none',
          duration: 2000
        })
      },
    })
  }
})