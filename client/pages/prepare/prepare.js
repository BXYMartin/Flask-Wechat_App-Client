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
    } ],
    word_offline: [3,
      3,
      2,
      2,
      2,
      3,
      3,
      3],
    chinese_offline: ["殖民地蔓越莓",
      "国务院菲律宾",
      "公司蒙古藻类",
      "竹笋方法历史",
      "水果飞机建筑",
      "公元前包心菜",
      "珊瑚礁连衣裙",
      "覆盆子手榴弹"],
    double_offline: ["方面","海洋","大象","莲藕","芹菜","杜鹃","南昌","溶液","书记","政府","领导","道路","牡蛎","海胆","蔬菜","大连","乌梅","甲鱼","药材","女儿","花生","审美","眼睛","银杏","玫瑰","苹果","槟榔","家兔","黑豆","鹦鹉","天津","青蛙","地区","政治","儿童","思维","战略","基础","桂圆","价值","稻谷","机械","蝴蝶","安徽","饮食","海螺","紫菜","土壤","形象","动物","金桔","健康","原料","历史","袋鼠","材料","扇贝","芦荟","马蹄","苦瓜","大枣","父母","青草","消息","老师","故事","豌豆","老鼠","小麦","表演","阶级","黄瓜","身体","芦笋","舞蹈","河豚","水仙","父亲","月季","产品","百合","敌人","生产","山竹","西安","四川","蜘蛛","杨梅","牡丹","古代","松露","沈阳","斗争","机会","老挝","山楂","观点","胡椒","油菜","鸵鸟","理论","国际","交通","柠檬","老虎","平衡","感情","狐狸","文章","类型","羊驼","困难","核桃","麻雀","蜜蜂","海口","黄豆","利益","缅甸","茭白","鲨鱼","芒果","哲学","条件","丈夫","效果","牦牛","田螺","东京","谷物","原则","作家","绵羊","银耳","鲤鱼","松鼠","喜鹊","泥鳅","苏州","飞机","竹笋","香菜","秋葵","原因","主任","生菜","自然","天鹅","蒙古","能量","群众","商品","莴笋","商业","建筑","鳕鱼","菊花","湖南","刺猬","妇女","实验","蘑菇","地球","梧桐","文艺","鲍鱼","高度","牛蛙","脐橙","科学","海带","母鸡","银行","日本"],
    triple_offline: ["守财奴","绿豆芽","包心菜","毕业生","联合国","手抓饼","牛油果","白血病","九寨沟","委员会","新加坡","马铃薯","颐和园","国际法","社会学","侵略者","菜籽油","五子棋","蛋白质","孙中山","卡塔尔","古希腊","哈密瓜","大学生","荷包蛋","北极熊","荷尔蒙","原子核","父亲节","博览会","老太太","四边形","金枪鱼","卫生间","殖民地","轻工业","统治者","生物学","萤火虫","购买力","猪头肉","冲锋枪","新西兰","劳动者","微生物","大丰收","幼儿园","蔓越莓","黄油蟹","威尼斯","电饭锅","以色列","金丝猴","自主权","艺术家","价值观","黄豆芽","方法论","圆舞曲","眼镜蛇","天鹅绒","三轮车","侦察兵","鹌鹑蛋","大洋洲","小龙虾","开心果","注意力","南极洲","菲律宾","科学家","手榴弹","奴隶主","工程师","比目鱼","黑木耳","土拨鼠","私有制","猕猴桃","公有制","专业化","水蒸气","斯大林","指导员","运动员","猪耳朵","银鳕鱼","挡箭牌","意大利","卡路里","工作者","绕口令","帝王蟹","研究生","恩格斯","麦当劳","沙丁鱼","菠萝蜜","红烧鱼","大自然","苏维埃","明太鱼","烤全羊","北冰洋","降水量","辣白菜","作曲家","井冈山","保护伞","反动派","大白菜","阿富汗","潜台词","秦始皇","参谋长","马克思","盐水鸭","烤红薯","甲状腺","望远镜","跆拳道","现代化","原材料","胖头鱼"]
  },
  next: function() {
    this.data.phase += 1;
    this.setData(this.data);
    if (this.data.phase == 3) {
      this.data.display = false;
      var that=this;
      if (app.globalData.online) {
        
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
      else {
        that.data.src = '/audios/sample/' + this.data.sample + app.globalData.type;
          that.data.word = this.data.word_offline[this.data.sample - 1];
          that.data.chinese = this.data.chinese_offline[this.data.sample - 1];
          that.setData(that.data);
          that.audioCtx = wx.createAudioContext('testAudio');
      }
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
    if (app.globalData.online) {
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
  else {
    that.data.src = '/audios/sample/' + this.data.sample + app.globalData.type;
          that.data.word = this.data.word_offline[this.data.sample - 1];
          that.data.chinese = this.data.chinese_offline[this.data.sample - 1];
          that.setData(that.data);
          that.audioCtx = wx.createAudioContext('testAudio');
  }
  
  },
  prevSample: function() {
    this.data.sample -= 1;
    this.data.display = false;
    var that=this
    if (app.globalData.online) {
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
  else {
    that.data.src = '/audios/sample/' + this.data.sample + app.globalData.type;
          that.data.word = this.data.word_offline[this.data.sample - 1];
          that.data.chinese = this.data.chinese_offline[this.data.sample - 1];
          that.setData(that.data);
          that.audioCtx = wx.createAudioContext('testAudio');
  }
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
      if (app.globalData.online) {
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
        app.globalData.word_double = this.data.double_offline;
          app.globalData.word_triple = this.data.triple_offline;
          that.data.word_double = app.globalData.word_double;
          that.data.word_triple = app.globalData.word_triple;
          that.setData(that.data);
      }
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