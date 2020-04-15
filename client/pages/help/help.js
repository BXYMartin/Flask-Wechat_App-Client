// pages/help/help.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    random: app.globalData.random,
    precise: app.globalData.precise,
    play: app.globalData.total_trail == 30,
    click: 0,
    online: app.globalData.online
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
    this.setData({random: app.globalData.random});
  },
  bindClear: function() {
    app.globalData.trail = 1;
    app.globalData.block = 1;
    app.globalData.trail_seq = [];
    app.globalData.block_seq = [];
    app.globalData.answer = {};
    app.globalData.finished = false;
    app.globalData.total_accord = 0;
    app.globalData.correct_accord = 0;
    app.globalData.total_inaccord = 0;
    app.globalData.correct_inaccord = 0;
    app.globalData.total_trail = 30,
    app.globalData.word_double = [];
    app.globalData.word_triple = [];
    this.hideModal();
    wx.showToast({
      title: '缓存已清空',
      icon: 'none',
      duration: 1000
    });
  },
  bindRandom: function(e) {
    app.globalData.random = e.detail.value;
    this.setData({play: app.globalData.total_trail == 30,random: app.globalData.random, precise: app.globalData.precise, click: 0});
  },
  bindPrecise: function(e) {
    app.globalData.precise = e.detail.value;
    this.setData({play: app.globalData.total_trail == 30,random: app.globalData.random, precise: app.globalData.precise, click: 0});
  },
  bindOnline: function(e) {
    if (e.detail.value && app.globalData.block == 1 && app.globalData.trail == 1) {
      app.globalData.online = true;
      this.data.online = true;
      this.setData(this.data);
    }
    else {
      if (app.globalData.block != 1 || app.globalData.trail != 1) {
        wx.showToast({
          title: '您已经有进度，请清空后再切换！',
          icon: 'none',
          duration: 2000
        })
      }
      app.globalData.online = false;
      this.data.online = false;
      this.setData(this.data);
    }
  },
  bindPlay: function(e) {
    if (e.detail.value) {
      app.globalData.total_trail = 5;
    }
    else {
      app.globalData.total_trail = 30;
    }
    this.data.play = app.globalData.total_trail == 30;
    this.setData(this.data);
  },
  showModal(e) {
    this.setData({
      play: app.globalData.total_trail == 30,random: app.globalData.random, precise: app.globalData.precise, click: 0,
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      play: app.globalData.total_trail == 30,random: app.globalData.random, precise: app.globalData.precise, click: 0,
      modalName: null
    })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})