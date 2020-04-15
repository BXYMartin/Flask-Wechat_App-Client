// pages/moe.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    painting: {},
    shareImage: '',
    congrats: ['优秀理解力', '超凡听力', '大神级理解'],
    online: app.globalData.online
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.eventDraw();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.online = app.globalData.online;
    this.setData(this.data);
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
    wx.reLaunch({
      url: '../index/index'
    })
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
  
  },
  eventDraw () {
    wx.showLoading({
      title: '绘制中',
      mask: true
    });
    var that=this
    if (app.globalData.online) {
    wx.request({
      url: app.globalData.server + 'get_avatar',
      data: {'url': app.globalData.userInfo.avatarUrl},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({
          painting: {
            width: 375,
            height: 555,
            clear: true,
            views: [
              {
                type: 'image',
                url: '/images/background.jpeg',
                top: 0,
                left: 0,
                width: 375,
                height: 555
              },
              
              {
                type: 'image',
                url: app.globalData.server + 'temp/' + res.data.src,
                top: 25,
                left: 29,
                width: 55,
                height: 55
              },
              {
                type: 'image',
                url: '/images/cover.jpeg',
                top: 25,
                left: 29,
                width: 55,
                height: 55
              },
              {
                type: 'text',
                content: app.globalData.userInfo.nickName,
                fontSize: 16,
                color: '#402D16',
                textAlign: 'left',
                top: 33,
                left: 96,
                bolder: true
              },
              {
                type: 'text',
                content: '有趣的心理学测验，快来试试吧！',
                fontSize: 15,
                color: '#563D20',
                textAlign: 'left',
                top: 59.5,
                left: 96
              },
              {
                type: 'image',
                url: '/images/audio.png',
                top: 136,
                left: 42.5,
                width: 290,
                height: 186
              },
              {
                type: 'image',
                url: '/images/qrcode.png',
                top: 443,
                left: 60,
                width: 68,
                height: 68
              },
              {
                type: 'text',
                content: '噪音环境下的语音识别测试',
                fontSize: 16,
                lineHeight: 21,
                color: '#383549',
                textAlign: 'center',
                top: 336,
                left: 187.5,
                width: 287,
                MaxLineNumber: 2,
                breakWord: true,
                bolder: true
              },
              {
                type: 'text',
                content: that.data.congrats[Math.floor((Math.random()*that.data.congrats.length))],
                fontSize: 22,
                color: '#c00',
                textAlign: 'right',
                top: 380,
                left: 180,
                bolder: true
              },
              {
                type: 'text',
                content: String(app.globalData.correct_accord + app.globalData.correct_inaccord),
                fontSize: 24,
                color: '#0a0',
                textAlign: 'right',
                top: 380,
                left: 240,
                bolder: true
              },
              {
                type: 'text',
                content: ' / ' + String(app.globalData.total_accord + app.globalData.total_inaccord),
                fontSize: 18,
                color: '#7E7E8B',
                textAlign: 'left',
                top: 386,
                left: 240
              },
              {
                type: 'text',
                content: '长按识别图中二维码一起测测语音识别力~',
                fontSize: 14,
                color: '#383549',
                textAlign: 'left',
                top: 460,
                left: 165.5,
                lineHeight: 20,
                MaxLineNumber: 2,
                breakWord: true,
                width: 125
              }
            ]
          }
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showToast({
          title: '图片获取失败',
          icon: 'none',
          duration: 2000
        });
        that.setData({
          painting: {
            width: 375,
            height: 555,
            clear: true,
            views: [
              {
                type: 'image',
                url: '/images/background.jpeg',
                top: 0,
                left: 0,
                width: 375,
                height: 555
              },
              
              {
                type: 'image',
                url: app.globalData.server + 'temp/sample.jpg',
                top: 25,
                left: 29,
                width: 55,
                height: 55
              },
              {
                type: 'image',
                url: '/images/cover.jpeg',
                top: 25,
                left: 29,
                width: 55,
                height: 55
              },
              {
                type: 'text',
                content: app.globalData.userInfo.nickName,
                fontSize: 16,
                color: '#402D16',
                textAlign: 'left',
                top: 33,
                left: 96,
                bolder: true
              },
              {
                type: 'text',
                content: '有趣的心理学测验，快来试试吧！',
                fontSize: 15,
                color: '#563D20',
                textAlign: 'left',
                top: 59.5,
                left: 96
              },
              {
                type: 'image',
                url: '/images/audio.png',
                top: 136,
                left: 42.5,
                width: 290,
                height: 186
              },
              {
                type: 'image',
                url: '/images/qrcode.png',
                top: 443,
                left: 60,
                width: 68,
                height: 68
              },
              {
                type: 'text',
                content: '噪音环境下的语音识别测试',
                fontSize: 16,
                lineHeight: 21,
                color: '#383549',
                textAlign: 'center',
                top: 336,
                left: 187.5,
                width: 287,
                MaxLineNumber: 2,
                breakWord: true,
                bolder: true
              },
              {
                type: 'text',
                content: that.data.congrats[Math.floor((Math.random()*that.data.congrats.length))],
                fontSize: 22,
                color: '#c00',
                textAlign: 'right',
                top: 380,
                left: 180,
                bolder: true
              },
              {
                type: 'text',
                content: String(app.globalData.correct_accord + app.globalData.correct_inaccord),
                fontSize: 24,
                color: '#0a0',
                textAlign: 'right',
                top: 380,
                left: 240,
                bolder: true
              },
              {
                type: 'text',
                content: ' / ' + String(app.globalData.total_accord + app.globalData.total_inaccord),
                fontSize: 18,
                color: '#7E7E8B',
                textAlign: 'left',
                top: 386,
                left: 240
              },
              {
                type: 'text',
                content: '长按识别图中二维码一起测测语音识别力~',
                fontSize: 14,
                color: '#383549',
                textAlign: 'left',
                top: 460,
                left: 165.5,
                lineHeight: 20,
                MaxLineNumber: 2,
                breakWord: true,
                width: 125
              }
            ]
          }
        })
      },
    })
  }
  else {
    that.setData({
      painting: {
        width: 375,
        height: 555,
        clear: true,
        views: [
          {
            type: 'image',
            url: '/images/background.jpeg',
            top: 0,
            left: 0,
            width: 375,
            height: 555
          },
          {
            type: 'text',
            content: app.globalData.userInfo.nickName,
            fontSize: 16,
            color: '#402D16',
            textAlign: 'left',
            top: 33,
            left: 40,
            bolder: true
          },
          {
            type: 'text',
            content: '有趣的心理学测验，快来试试吧！',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 59.5,
            left: 40
          },
          {
            type: 'image',
            url: '/images/audio.png',
            top: 136,
            left: 42.5,
            width: 290,
            height: 186
          },
          {
            type: 'image',
            url: '/images/qrcode.png',
            top: 443,
            left: 60,
            width: 68,
            height: 68
          },
          {
            type: 'text',
            content: '噪音环境下的语音识别测试',
            fontSize: 16,
            lineHeight: 21,
            color: '#383549',
            textAlign: 'center',
            top: 336,
            left: 187.5,
            width: 287,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: true
          },
          {
            type: 'text',
            content: "一致 - " + String(app.globalData.correct_accord) + "/" + String(app.globalData.total_accord),
            fontSize: 20,
            color: '#0a0',
            textAlign: 'right',
            top: 380,
            left: 170,
            bolder: true
          },
          {
            type: 'text',
            content: "不一致 - " + String(app.globalData.correct_inaccord) + "/" + String(app.globalData.total_inaccord),
            fontSize: 20,
            color: '#0a0',
            textAlign: 'left',
            top: 380,
            left: 180,
            bolder: true
          },
          {
            type: 'text',
            content: '长按识别图中二维码一起测测语音识别力~',
            fontSize: 14,
            color: '#383549',
            textAlign: 'left',
            top: 460,
            left: 165.5,
            lineHeight: 20,
            MaxLineNumber: 2,
            breakWord: true,
            width: 125
          }
        ]
      }
    })
  }
  },
  eventSave () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success (res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }
  })
  },
  eventGetImage (event) {
    console.log(event)
    wx.hideLoading()
    const { tempFilePath, errMsg } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  },
  copyAnswer: function () {
    wx.setClipboardData({
      data: JSON.stringify(app.globalData.answer),
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          },
          fail: function(res) {
            wx.showToast({
              title: '复制失败'
            })
          }
        })
      }
    })
  }
})