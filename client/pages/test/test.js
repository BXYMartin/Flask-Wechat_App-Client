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
    if (app.globalData.finished) {
      wx.navigateTo({
        url: '../moe/moe',
      });
      return;
    }
    if (app.globalData.block_seq.length == 0) {
      for (var i = 0; i < app.globalData.total_block; i++) {
        if (app.globalData.random) {
          var r = Math.floor(Math.random() * app.globalData.total_block) + 1;
          while (app.globalData.block_seq.indexOf(r) > -1) {
            r = Math.floor(Math.random() * app.globalData.total_block) + 1;
          }
          app.globalData.block_seq[i] = r;
        }
        else {
          app.globalData.block_seq[i] = i + 1;
        }
      }
    }
    if (app.globalData.trail_seq.length == 0) {
      for (var i = 0; i < app.globalData.total_trail; i++) {
        if (app.globalData.random) {
          var r = Math.floor(Math.random() * app.globalData.total_trail) + 1;
          while (app.globalData.trail_seq.indexOf(r) > -1) {
            r = Math.floor(Math.random() * app.globalData.total_trail) + 1;
          }
          app.globalData.trail_seq[i] = r;
        }
        else {
          app.globalData.trail_seq[i] = i + 1;
        }
      }
    }
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    var that=this
    wx.request({
      url: app.globalData.server + 'get_trail',
      data: {'block': app.globalData.block_seq[app.globalData.block - 1], 'trail': app.globalData.trail_seq[app.globalData.trail-1]},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({ cue: res.data.cue, word: res.data.word, correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, chinese: res.data.chinese, pinyin: res.data.pinyin, display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail});
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
    if (!(app.globalData.block_seq[app.globalData.block-1] in app.globalData.answer)) {
      app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]] = {};
    }
    if (!(app.globalData.trail_seq[app.globalData.trail-1] in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]])) {
      app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]] = {};
    }
    app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]][res.target.id] = res.detail.value;
  },
  next: function(){
    // Calculate Result
    if (!app.globalData.finished) {
      var pinyin_list = this.data.pinyin.split("|");
      for (var i = 1; i <= 6; i++) {
        if (app.globalData.precise) {
          if (app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]][i] == pinyin_list[i - 1].slice(0, -1)) {
            if (this.data.cue == this.data.word) {
              app.globalData.correct_accord += 1;
            }
            else {
              app.globalData.correct_inaccord += 1;
            }
            
          }
        }
        else {
          for (var key in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]]) {
            if (app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]][key] == pinyin_list[i - 1].slice(0, -1)) {
              if (this.data.cue == this.data.word) {
                app.globalData.correct_accord += 1;
              }
              else {
                app.globalData.correct_inaccord += 1;
              }
              break;
            }
          }
        }
        if (this.data.cue == this.data.word) {
          app.globalData.total_accord += 1;
        }
        else {
          app.globalData.total_inaccord += 1;
        }
      }
    }
    
    // Calculate End
    if (app.globalData.trail + 1 > app.globalData.total_trail) {
      if (app.globalData.block != app.globalData.total_block) {
        wx.showToast({
          title: '第'+app.globalData.block+'部分完成,正确率' + parseInt((app.globalData.correct_accord + app.globalData.correct_inaccord)/(app.globalData.total_inaccord + app.globalData.total_accord) * 100) + '%,可休息一会或继续',
          icon: 'none',
          duration: 2000
        })
      }
      if (app.globalData.block + 1 > app.globalData.total_block) {
        var that=this
        wx.request({
          url: app.globalData.server + 'send_answer',
          data: {
            answer: JSON.stringify(app.globalData.answer),
            openid: app.globalData.openid,
            name: app.globalData.userInfo.nickName,
            correct_accord: app.globalData.correct_accord,
            total_accord: app.globalData.total_accord,
            correct_inaccord: app.globalData.correct_inaccord,
            total_inaccord: app.globalData.total_inaccord
        },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          method: 'POST',
          success: function (res) {
            app.globalData.finished = true;
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
      app.globalData.trail_seq = [];
      for (var i = 0; i < app.globalData.total_trail; i++) {
        if (app.globalData.random) {
          var r = Math.floor(Math.random() * app.globalData.total_trail) + 1;
          while (app.globalData.trail_seq.indexOf(r) > -1) {
            r = Math.floor(Math.random() * app.globalData.total_trail) + 1;
          }
          app.globalData.trail_seq[i] = r;
        }
        else {
          app.globalData.trail_seq[i] = i + 1;
        }
      }
    }
    else {
      app.globalData.trail = app.globalData.trail + 1;
    }
    var that=this
    wx.request({
      url: app.globalData.server + 'get_trail',
      data: {'block': app.globalData.block_seq[app.globalData.block - 1], 'trail': app.globalData.trail_seq[app.globalData.trail-1]},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({ cue: res.data.cue, word: res.data.word, correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, click: 0, chinese: res.data.chinese, pinyin: res.data.pinyin, play: "Play Audio", display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail});
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