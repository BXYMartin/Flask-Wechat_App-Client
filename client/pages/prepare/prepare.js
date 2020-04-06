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
    word_double_a: ["白菜","百合","斑马","板栗","鲍鱼","槟榔","菠菜","菠萝","草莓","茶叶","刺猬","大豆","大蒜","大象","大枣","带鱼","袋鼠","导演","稻谷","敌人","冬瓜","豆芽","杜鹃","鳄鱼","儿童","番茄","凤梨","父母","父亲","妇女","柑橘","橄榄","高粱","羔羊","公鸡","姑娘","谷物","观众","鲑鱼","桂花","桂圆","海带","海胆","海螺","海鸥","海豚","河豚","荷花","核桃","黑豆","红豆","红薯","红枣","狐狸","胡椒","葫芦","蝴蝶","花生","黄豆","黄瓜","黄桃","茴香","鸡蛋","记者","鲫鱼","家畜","家禽","家人","家兔","甲鱼","坚果","茭白","教授","金桔","鲸鱼","韭菜","菊花","考拉","孔雀","恐龙","苦瓜","辣椒","老虎","老人","老师","老鼠","鲤鱼","荔枝","莲花","莲藕","领导","榴莲","龙虾","芦荟","芦笋","绿豆","麻雀","蚂蚁","芒果","牦牛","玫瑰","蜜蜂","绵羊","蘑菇","母鸡","牡丹","牡蛎","木耳","木瓜","南瓜","泥鳅","柠檬","牛蛙","糯米","女儿","螃蟹","朋友","苹果","葡萄","脐橙","企鹅","芹菜","青草","青椒","青蛙","蜻蜓","秋葵","蚯蚓","群众","肉桂","桑葚","鲨鱼","山药","山楂","山竹","珊瑚","扇贝","生菜","牲畜","石榴","书记","蔬菜","水果","水仙","丝瓜","松露","松鼠","松树","天鹅","田螺","甜椒","同事","同学","茼蒿","土豆","鸵鸟","豌豆","莴笋","蜗牛","乌龟","乌梅","乌鸦","乌贼","梧桐","西瓜","蜥蜴","喜鹊","香菜","香椿","香菇","香蕉","香叶","小麦","小猪","熊猫","学者","雪梨","鳕鱼","演员","羊驼","杨梅","杨桃","洋葱","野菜","医生","银耳","银杏","樱桃","鹦鹉","油菜","鱿鱼","玉米","月季","战士","丈夫","蜘蛛","竹笋","主任","紫菜","自己","作家"],


    word_double_i: ["安徽","贝壳","北京","比赛","变化","表演","布丁","材料","产品","城市","传统","创造","大家","大连","道路","地球","地区","地位","电流","调查","动物","东京","斗争","法律","发展","犯罪","方法","方面","飞机","服务","福建","福州","感情","甘肃","高度","革命","贡献","工厂","工程","工具","工作","公司","故事","古代","骨髓","关系","观点","观念","广东","广州","规律","国际","国家","过程","海口","海洋","韩国","杭州","河北","河南","湖北","湖南","化学","环境","活动","吉林","技术","济南","机构","机会","机器","机械","基础","激素","价格","价值","家庭","建筑","健康","江苏","交通","结构","阶级","金属","经济","经验","精神","酒精","客观","科学","空气","困难","昆明","拉萨","兰州","劳动","老挝","类型","历史","利益","理论","理想","辽宁","领域","马蹄","蒙古","面积","缅甸","民族","命令","目标","南昌","南京","南宁","内容","能量","年代","宁波","农村","欧洲","品种","平衡","气候","气体","汽车","企业","情感","情况","情绪","青岛","清水","热情","日本","溶液","山东","上海","商品","商业","设计","社会","沈阳","审美","身体","生产","生活","生命","声音","时代","时间","时期","实验","世纪","世界","市场","首尔","数学","说明","四川","思维","思想","苏联","苏州","太阳","态度","天津","条件","投资","土地","土壤","外国","微博","微信","文学","文艺","文章","文字","问题","温度","物质","武汉","舞蹈","西安","西宁","项目","效果","消费","消息","信息","心理","新疆","新闻","形式","形态","形象","性格","学习","训练","研究","颜色","眼睛","药材","药品","艺术","意见","意义","意志","衣服","银川","银行","印度","饮食","营养","影响","英国","语言","原理","原料","原始","原因","原则","越南","云南","运动","藻类","战略","战争","哲学","浙江","证券","郑州","政策","政府","政权","政治","治疗","重要","中国","中央","自然","资金","祖国","作用"],


    word_triple_a: ["鹌鹑蛋","百香果","板蓝根","包心菜","北极熊","比目鱼","毕业生","菠萝蜜","菜籽油","参谋长","茶树菇","茶叶蛋","车厘子","达尔文","大白菜","大学生","大闸蟹","代表团","丹顶鹤","党支部","党中央","党组织","邓小平","帝王蟹","恩格斯","反动派","覆盆子","工程师","工作者","哈密瓜","海蜇头","含羞草","荷包蛋","荷兰豆","黑格尔","黑加仑","黑木耳","黑芝麻","红毛丹","红烧鱼","红小豆","虹鳟鱼","黄豆芽","黄油蟹","火龙果","技术员","佼佼者","金钱豹","金枪鱼","金丝猴","金针菇","开心果","烤红薯","烤全羊","科学家","空心菜","辣白菜","劳动者","老太太","绿豆芽","马克思","马铃薯","蔓越莓","迷迭香","猕猴桃","明太鱼","牛百叶","牛板筋","牛油果","奴隶主","胖头鱼","皮皮虾","葡萄柚","奇异果","侵略者","秦始皇","青少年","秋刀鱼","萨摩耶","三文鱼","沙丁鱼","沙糖桔","生产者","圣女果","石斑鱼","守财奴","双胞胎","水蜜桃","斯大林","孙中山","统治者","土拨鼠","娃娃菜","微生物","未婚妻","西葫芦","消费者","小龙虾","小学生","研究生","盐水鸭","眼镜蛇","艺术家","银鳕鱼","萤火虫","运动员","哲学家","侦察兵","指导员","猪大肠","猪耳朵","猪头肉","资本家","作曲家"],


    word_triple_i: ["阿富汗","阿根廷","阿拉伯","爱尔兰","奥运会","芭蕾舞","白血病","百宝箱","斑马线","保护伞","保温杯","暴风雪","北冰洋","本命年","比利时","笔记本","便利店","辩证法","兵马俑","博览会","不倒翁","冲锋枪","出发点","大丰收","大拇指","大西洋","大洋洲","大自然","蛋白质","挡箭牌","地下水","地中海","电磁波","电饭锅","动画片","读后感","多动症","俄罗斯","儿童节","发源地","法西斯","方法论","防腐剂","菲律宾","福利院","父亲节","高利贷","高血压","公有制","公元前","共产党","共和国","购买力","古希腊","冠心病","国际法","国民党","国务院","荷尔蒙","黑龙江","红领巾","互联网","化合物","记叙文","纪念碑","加拿大","甲骨文","甲状腺","价值观","柬埔寨","建筑物","降水量","交际舞","教育学","解放区","金字塔","紧箍咒","锦标赛","经济学","精神病","井冈山","九寨沟","旧社会","卡路里","卡塔尔","空城计","拉拉队","连衣裙","联合国","马蜂窝","麦当劳","灭火器","莫斯科","墨西哥","南极洲","尼泊尔","贫民窟","乒乓球","潜台词","潜意识","跷跷板","轻工业","染色体","绕口令","热力学","热水袋","三角形","三轮车","三明治","珊瑚礁","社会学","射手座","神经病","生命力","生物学","省略号","手电筒","手工业","手榴弹","手抓饼","水龙头","水蒸气","顺口溜","司令部","私有制","四边形","苏维埃","所有制","跆拳道","太平洋","太阳系","糖尿病","天安门","天鹅绒","天然气","天文学","图书馆","土耳其","望远镜","威尼斯","微波炉","维生素","委员会","卫生间","乌克兰","无线电","五粮液","五子棋","物理学","西班牙","夏令营","显微镜","现代化","想象力","橡皮筋","小提琴","心理学","新加坡","新西兰","新中国","信用卡","叙利亚","压岁钱","烟雾弹","氧化物","伊拉克","颐和园","以色列","易拉罐","意大利","幼儿园","语言学","原材料","原子核","圆舞曲","再生产","长方形","障碍物","殖民地","重工业","注意力","专业化","自行车","自来水","自然界","自治区","自主权","总产值","座谈会","座右铭"]
  },
  onLoad: function() {
    wx.setNavigationBarTitle({ title: '噪音环境下的语音测试' });
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
  showResult: function() {
    this.setData({ display: true });
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