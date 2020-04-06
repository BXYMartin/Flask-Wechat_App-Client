const app = getApp()
Page({
  data: {
  },
  onLoad: function() {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
  },
  //事件处理函数
  bindPrepare: function() {
    if (app.globalData.userInfo==null){
      wx.showToast({
        title: '请先点击获取头像昵称',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.navigateTo({
      url: '../prepare/prepare',
    })
  },
});