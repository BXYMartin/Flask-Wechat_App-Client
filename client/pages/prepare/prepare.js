// pages/prepare/prepare.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phase: 1,
    sample: 1,
    display: false,
    numList: [{
      name: '词库'
    }, {
      name: '界面'
    }, {
      name: '音频'
    } ]
  },
  next: function() {
    this.data.phase += 1;
    this.setData(this.data);
    if (this.data.phase == 3) {
      this.data.display = false;
      var that=this
      wx.request({
        url: app.globalData.server + 'get_sample',
        data: {'id': this.data.sample},
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        success: function (res) {
          that.data.src = app.globalData.server + 'sample/' + res.data.src;
          that.data.word = res.data.word;
          that.data.chinese = res.data.chinese;
          that.setData(that.data);
          that.audioCtx = wx.createAudioContext('testAudio');
        },
        fail: function (e) {
          console.log(e);
          wx.showToast({
            title: '例子获取失败',
            icon: 'none',
            duration: 2000
          })
        },
      });
    }
  },
  prev: function() {
    this.data.phase -= 1;
    this.setData(this.data);
  },
  nextSample: function() {
    this.data.display = false;
    this.data.sample += 1;
    var that=this
    wx.request({
      url: app.globalData.server + 'get_sample',
      data: {'id': this.data.sample},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.data.src = app.globalData.server + 'sample/' + res.data.src;
          that.data.word = res.data.word;
          that.data.chinese = res.data.chinese;
          that.setData(that.data);
        that.audioCtx = wx.createAudioContext('testAudio');
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '例子获取失败',
          icon: 'none',
          duration: 2000
        })
      },
    });
  },
  prevSample: function() {
    this.data.sample -= 1;
    this.data.display = false;
    var that=this
    wx.request({
      url: app.globalData.server + 'get_sample',
      data: {'id': this.data.sample},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.data.src = app.globalData.server + 'sample/' + res.data.src;
          that.data.word = res.data.word;
          that.data.chinese = res.data.chinese;
          that.setData(that.data);
        that.audioCtx = wx.createAudioContext('testAudio');
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '例子获取失败',
          icon: 'none',
          duration: 2000
        })
      },
    });
  },
  showResult: function(e) {
    this.setData({ display: e.detail.value });
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
  bindBegin: function() {
    if (app.globalData.userInfo==null){
      wx.showToast({
        title: '请先点击获取头像昵称',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.navigateTo({
      url: '../begin/begin',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
    if (app.globalData.word_double.length == 0 || app.globalData.word_triple.length == 0) {
      var that=this
      wx.request({
        url: app.globalData.server + 'get_word',
        data: {},
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        success: function (res) {
          app.globalData.word_double = res.data.double;
          app.globalData.word_triple = res.data.triple;
          that.data.word_double = app.globalData.word_double;
          that.data.word_triple = app.globalData.word_triple;
          that.setData(that.data);
        },
        fail: function (e) {
          console.log(e);
          wx.showToast({
            title: '词表获取失败',
            icon: 'none',
            duration: 2000
          })
        },
      });
    }
    else {
      this.data.word_double = app.globalData.word_double;
      this.data.word_triple = app.globalData.word_triple;
      this.setData(this.data);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})