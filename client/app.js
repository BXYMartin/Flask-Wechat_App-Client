App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
  },
  globalData: {
    userInfo: null,
    openid:null,
    server:'https://c251266o06.zicp.vip/',
    //server: 'http://rabienrose.iicp.net:21070/',
    user_score_info:null,
    cur_article_info:null,
    answer: {},
    block: 1,
    trail: 1
  }
})