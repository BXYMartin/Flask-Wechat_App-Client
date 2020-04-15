//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    block: app.globalData.block,
    trail: app.globalData.trail,
    loadModal: true,
    version: app.globalData.version
  },
  bindExperiment: function() {
    if (app.globalData.userInfo==null){
      wx.showToast({
        title: '请先点击获取头像昵称',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.navigateTo({
      url: '../experiment/experiment',
    })
  },
  bindContinue: function() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  bindMoe: function () {
    wx.navigateTo({
      url: '../rank/rank',
    })
  },
  bindHelp: function () {
    wx.navigateTo({
      url: '../help/help',
    })
  },

  onLoad: function () {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onShow: function () {

    var that = this
    if (app.globalData.openid==null){
      wx.login({
        success: res => {
          if (app.globalData.online) {
            wx.request({
              url: app.globalData.server + 'login',
              data: { code: res.code },
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              method: 'POST',
              success: function (res) {
                app.globalData.openid = res.data;
                that.data.loadModal = false;
                that.setData(that.data);
              },
              fail: function () {
                wx.showToast({
                  title: '使用离线模式中',
                  icon: 'none',
                  duration: 2000
                });
                app.globalData.online = false;
                that.data.loadModal = false;
                that.setData(that.data);
              },
            })
          }
          else {
            that.data.loadModal = false;
            that.setData(that.data);
            wx.showToast({
              title: '使用离线模式中',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function () {
          that.data.loadModal = false;
          that.setData(that.data);
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
        },
      })
    }

    if (app.globalData.userInfo==null){
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                app.globalData.userInfo = res.userInfo
                this.setData({
                  userInfo: app.globalData.userInfo,
                  hasUserInfo: true
                })
              },
              fail: function () {
                wx.showToast({
                  title: '微信信息获取失败',
                  icon: 'none',
                  duration: 2000
                })
              },
            })
          }
        },
      })
    }

  },
    
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
