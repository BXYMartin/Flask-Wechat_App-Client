const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "加载中",
    src: "",
    author: "Catherine Zhang",
    input: "",
    display: true,
    play: "播放音频",
    click: 0,
    next: false,
    cue_offline: [2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3],
    word_offline: [3,
      3,
      2,
      2,
      3,
      3,
      2,
      2,
      3,
      3,
      3,
      3,
      2,
      2,
      3,
      3,
      2,
      3,
      3,
      2,
      3,
      3,
      2,
      2,
      2,
      3,
      3,
      2,
      3,
      3,
      2,
      3,
      3,
      3,
      2,
      2,
      3,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      3,
      2,
      3,
      2,
      2,
      3,
      2,
      3,
      3,
      2,
      3,
      3,
      2,
      3,
      2,
      3,
      3,
      2,
      2,
      2,
      3,
      3,
      3,
      2,
      3,
      2,
      2,
      2,
      3,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      3,
      2,
      2,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      2,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      2,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2],
    pinyin_offline: ["shou3|cai2|nu2|lv4|dou4|ya2",
    "bao1|xin1|cai4|bi4|ye4|sheng1",
    "fang1|mian4|hai3|yang2|da4|xiang4",
    "lian2|ou3|qin2|cai4|du4|juan1",
    "lian2|he2|guo2|shou3|zhua1|bing3",
    "niu2|you2|guo3|bai2|xue4|bing4",
    "nan2|chang1|rong2|ye4|shu1|ji4",
    "zheng4|fu3|ling3|dao3|dao4|lu4",
    "jiu3|zhai4|gou1|wei3|yuan2|hui4",
    "xin1|jia1|po1|ma3|ling2|shu3",
    "yi2|he2|yuan2|guo2|ji4|fa3",
    "she4|hui4|xue2|qin1|lue4|zhe3",
    "mu3|li4|hai3|dan3|shu1|cai4",
    "da4|lian2|wu1|mei2|jia3|yu2",
    "cai4|zi3|you2|wu3|zi3|qi2",
    "dan4|bai2|zhi4|sun1|zhong1|shan1",
    "yao4|cai2|nv3|er2|hua1|sheng1",
    "ka3|ta3|er3|gu3|xi1|la4",
    "ha1|mi4|gua1|da4|xue2|sheng1",
    "shen3|mei3|yan3|jing1|yin2|xing4",
    "he2|bao1|dan4|bei3|ji2|xiong2",
    "he2|er3|meng2|yuan2|zi3|he2",
    "mei2|gui1|ping2|guo3|bin1|lang2",
    "jia1|tu4|hei1|dou4|ying1|wu3",
    "tian1|jin1|qing1|wa1|di4|qu1",
    "fu4|qin1|jie1|bo2|lan3|hui4",
    "lao3|tai4|tai4|si4|bian1|xing2",
    "zheng4|zhi4|er2|tong2|si1|wei2",
    "jin1|qiang1|yu2|wei4|sheng1|jian1",
    "zhi2|min2|di4|qing1|gong1|ye4",
    "zhan4|lue4|ji1|chu3|gui4|yuan2",
    "tong3|zhi4|zhe3|sheng1|wu4|xue2",
    "ying2|huo3|chong2|gou4|mai3|li4",
    "zhu1|tou2|rou4|chong1|feng1|qiang1",
    "jia4|zhi2|dao4|gu3|ji1|xie4",
    "hu2|die2|an1|hui1|yin3|shi2",
    "xin1|xi1|lan2|lao2|dong4|zhe3",
    "hai3|luo2|zi3|cai4|tu3|rang3",
    "xing2|xiang4|dong4|wu4|jin1|ju2",
    "wei1|sheng1|wu4|da4|feng1|shou1",
    "you4|er2|yuan2|man4|yue4|mei2",
    "huang2|you2|xie4|wei1|ni2|si1",
    "dian4|fan4|guo1|yi3|se4|lie4",
    "jin1|si1|hou2|zi4|zhu3|quan2",
    "jian4|kang1|yuan2|liao4|li4|shi3",
    "dai4|shu3|cai2|liao4|shan4|bei4",
    "yi4|shu4|jia1|jia4|zhi2|guan1",
    "lu2|hui4|ma3|ti2|ku3|gua1",
    "huang2|dou4|ya2|fang1|fa3|lun4",
    "da4|zao3|fu4|mu3|qing1|cao3",
    "xiao1|xi1|lao3|shi1|gu4|shi4",
    "yuan2|wu3|qu3|yan3|jing4|she2",
    "wan1|dou4|lao3|shu3|xiao3|mai4",
    "tian1|e2|rong2|san1|lun2|che1",
    "zhen1|cha2|bing1|an1|chun2|dan4",
    "biao3|yan3|jie1|ji2|huang2|gua1",
    "da4|yang2|zhou1|xiao3|long2|xia1",
    "kai1|xin1|guo3|zhu4|yi4|li4",
    "shen1|ti3|lu2|sun3|wu3|dao3",
    "nan2|ji2|zhou1|fei1|lv4|bin1",
    "he2|tun2|shui3|xian1|fu4|qin1",
    "ke1|xue2|jia1|shou3|liu2|dan4",
    "nu2|li4|zhu3|gong1|cheng2|shi1",
    "yue4|ji4|chan3|pin3|bai3|he2",
    "di2|ren2|sheng1|chan3|shan1|zhu2",
    "xi1|an1|si4|chuan1|zhi1|zhu1",
    "bi3|mu4|yu2|hei1|mu4|er3",
    "tu3|bo1|shu3|si1|you3|zhi4",
    "mi2|hou2|tao2|gong1|you3|zhi4",
    "yang2|mei2|mu3|dan1|gu3|dai4",
    "zhuan1|ye4|hua4|shui3|zheng1|qi4",
    "song1|lu4|shen3|yang2|dou4|zheng1",
    "ji1|hui4|lao3|wo1|shan1|zha1",
    "guan1|dian3|hu2|jiao1|you2|cai4",
    "si1|da4|lin2|zhi3|dao3|yuan2",
    "tuo2|niao3|li3|lun4|guo2|ji4",
    "jiao1|tong1|ning2|meng2|lao3|hu3",
    "yun4|dong4|yuan2|zhu1|er3|duo3",
    "yin2|xue3|yu2|dang3|jian4|pai2",
    "yi4|da4|li4|ka3|lu4|li3",
    "gong1|zuo4|zhe3|rao4|kou3|ling4",
    "di4|wang2|xie4|yan2|jiu1|sheng1",
    "en1|ge2|si1|mai4|dang1|lao2",
    "ping2|heng2|gan3|qing2|hu2|li2",
    "wen2|zhang1|lei4|xing2|yang2|tuo2",
    "kun4|nan2|he2|tao2|ma2|que4",
    "sha1|ding1|yu2|bo1|luo2|mi4",
    "mi4|feng1|hai3|kou3|huang2|dou4",
    "li4|yi4|mian3|dian4|jiao1|bai2",
    "hong2|shao1|yu2|da4|zi4|ran2",
    "su1|wei2|ai1|ming2|tai4|yu2",
    "kao3|quan2|yang2|bei3|bing1|yang2",
    "sha1|yu2|mang2|guo3|zhe2|xue2",
    "tiao2|jian4|zhang4|fu1|xiao4|guo3",
    "mao2|niu2|tian2|luo2|dong1|jing1",
    "gu3|wu4|yuan2|ze2|zuo4|jia1",
    "mian2|yang2|yin2|er3|li3|yu2",
    "jiang4|shui3|liang4|la4|bai2|cai4",
    "zuo4|qu3|jia1|jing3|gang1|shan1",
    "song1|shu3|xi3|que4|ni2|qiu1",
    "bao3|hu4|san3|fan3|dong4|pai4",
    "da4|bai2|cai4|a1|fu4|han4",
    "su1|zhou1|fei1|ji1|zhu2|sun3",
    "xiang1|cai4|qiu1|kui2|yuan2|yin1",
    "zhu3|ren4|sheng1|cai4|zi4|ran2",
    "tian1|e2|meng2|gu3|neng2|liang4",
    "qun2|zhong4|shang1|pin3|wo1|sun3",
    "shang1|ye4|jian4|zhu4|xue3|yu2",
    "qian2|tai2|ci2|qin2|shi3|huang2",
    "can1|mou2|zhang3|ma3|ke4|si1",
    "ju2|hua1|hu2|nan2|ci4|wei4",
    "yan2|shui3|ya1|kao3|hong2|shu3",
    "jia3|zhuang4|xian4|wang4|yuan3|jing4",
    "tai2|quan2|dao4|xian4|dai4|hua4",
    "yuan2|cai2|liao4|pang4|tou2|yu2",
    "fu4|nv3|shi2|yan4|mo2|gu1",
    "di4|qiu2|wu2|tong2|wen2|yi4",
    "bao4|yu2|gao1|du4|niu2|wa1",
    "qi2|cheng2|ke1|xue2|hai3|dai4",
    "mu3|ji1|yin2|hang2|ri4|ben3"],
    chinese_offline: ["守财奴绿豆芽",
    "包心菜毕业生",
    "方面海洋大象",
    "莲藕芹菜杜鹃",
    "联合国手抓饼",
    "牛油果白血病",
    "南昌溶液书记",
    "政府领导道路",
    "九寨沟委员会",
    "新加坡马铃薯",
    "颐和园国际法",
    "社会学侵略者",
    "牡蛎海胆蔬菜",
    "大连乌梅甲鱼",
    "菜籽油五子棋",
    "蛋白质孙中山",
    "药材女儿花生",
    "卡塔尔古希腊",
    "哈密瓜大学生",
    "审美眼睛银杏",
    "荷包蛋北极熊",
    "荷尔蒙原子核",
    "玫瑰苹果槟榔",
    "家兔黑豆鹦鹉",
    "天津青蛙地区",
    "父亲节博览会",
    "老太太四边形",
    "政治儿童思维",
    "金枪鱼卫生间",
    "殖民地轻工业",
    "战略基础桂圆",
    "统治者生物学",
    "萤火虫购买力",
    "猪头肉冲锋枪",
    "价值稻谷机械",
    "蝴蝶安徽饮食",
    "新西兰劳动者",
    "海螺紫菜土壤",
    "形象动物金桔",
    "微生物大丰收",
    "幼儿园蔓越莓",
    "黄油蟹威尼斯",
    "电饭锅以色列",
    "金丝猴自主权",
    "健康原料历史",
    "袋鼠材料扇贝",
    "艺术家价值观",
    "芦荟马蹄苦瓜",
    "黄豆芽方法论",
    "大枣父母青草",
    "消息老师故事",
    "圆舞曲眼镜蛇",
    "豌豆老鼠小麦",
    "天鹅绒三轮车",
    "侦察兵鹌鹑蛋",
    "表演阶级黄瓜",
    "大洋洲小龙虾",
    "开心果注意力",
    "身体芦笋舞蹈",
    "南极洲菲律宾",
    "河豚水仙父亲",
    "科学家手榴弹",
    "奴隶主工程师",
    "月季产品百合",
    "敌人生产山竹",
    "西安四川蜘蛛",
    "比目鱼黑木耳",
    "土拨鼠私有制",
    "猕猴桃公有制",
    "杨梅牡丹古代",
    "专业化水蒸气",
    "松露沈阳斗争",
    "机会老挝山楂",
    "观点胡椒油菜",
    "斯大林指导员",
    "鸵鸟理论国际",
    "交通柠檬老虎",
    "运动员猪耳朵",
    "银鳕鱼挡箭牌",
    "意大利卡路里",
    "工作者绕口令",
    "帝王蟹研究生",
    "恩格斯麦当劳",
    "平衡感情狐狸",
    "文章类型羊驼",
    "困难核桃麻雀",
    "沙丁鱼菠萝蜜",
    "蜜蜂海口黄豆",
    "利益缅甸茭白",
    "红烧鱼大自然",
    "苏维埃明太鱼",
    "烤全羊北冰洋",
    "鲨鱼芒果哲学",
    "条件丈夫效果",
    "牦牛田螺东京",
    "谷物原则作家",
    "绵羊银耳鲤鱼",
    "降水量辣白菜",
    "作曲家井冈山",
    "松鼠喜鹊泥鳅",
    "保护伞反动派",
    "大白菜阿富汗",
    "苏州飞机竹笋",
    "香菜秋葵原因",
    "主任生菜自然",
    "天鹅蒙古能量",
    "群众商品莴笋",
    "商业建筑鳕鱼",
    "潜台词秦始皇",
    "参谋长马克思",
    "菊花湖南刺猬",
    "盐水鸭烤红薯",
    "甲状腺望远镜",
    "跆拳道现代化",
    "原材料胖头鱼",
    "妇女实验蘑菇",
    "地球梧桐文艺",
    "鲍鱼高度牛蛙",
    "脐橙科学海带",
    "母鸡银行日本"],
    srcs: []

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
    // Progress Calc
    var true_progress = String(parseInt(100*(app.globalData.correct_accord+app.globalData.correct_inaccord)/(app.globalData.total_trail*app.globalData.total_block*2))) + '%';
    var error_progress = String(parseInt(100*(app.globalData.total_accord+app.globalData.total_inaccord - app.globalData.correct_accord-app.globalData.correct_inaccord)/(app.globalData.total_trail*app.globalData.total_block*2))) + '%';

    // 使用 wx.createAudioContext 获取 audio 上下文 context
    var that=this
    if (app.globalData.online) {
      wx.request({
        url: app.globalData.server + 'get_trail',
        data: {'block': app.globalData.block_seq[app.globalData.block - 1], 'trail': app.globalData.trail_seq[app.globalData.trail-1]},
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        success: function (res) {
          that.setData({ cue: res.data.cue, word: res.data.word, correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, chinese: res.data.chinese, pinyin: res.data.pinyin, display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail, next: true, true_progress: true_progress, error_progress: error_progress });
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
    else {
      var i = (app.globalData.block_seq[app.globalData.block - 1]-1) * app.globalData.total_trail + app.globalData.trail_seq[app.globalData.trail-1] - 1;
      console.log(i);
      this.setData({ cue: this.data.cue_offline[i], word: this.data.word_offline[i], correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, chinese: this.data.chinese_offline[i], pinyin: this.data.pinyin_offline[i], display: true, name: i, src: '/audios/wav/' + String(i+1) + app.globalData.type, input: "", block: app.globalData.block, trail: app.globalData.trail, next: true, true_progress: true_progress, error_progress: error_progress });

    }
    
  },
  recursive: function() {
    let innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true
    innerAudioContext.obeyMuteSwitch = false
    innerAudioContext.src = this.data.srcs.shift()
    innerAudioContext.onPlay(() => {
      // 播放开关
        console.log("Playing")
    })
    innerAudioContext.onEnded((res) => {
      console.log("Ending");
      innerAudioContext.destroy();
      if (this.data.srcs.length > 0) {
        return this.recursive();
      }
    })
  },
  audioPlay: function () {
      this.setData({play: '音频播放中'});
      
      if (app.globalData.online) {
        this.data.srcs = [this.data.src];
      }
      else {
        this.data.srcs = ["/audios/cue/" + this.data.cue + app.globalData.type, this.data.src];
      }
      this.recursive();
      
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
    var show_list = [2, 5];
    for (var n = 0; n < show_list.length; n++) {
      var i = show_list[n];
      if (!(app.globalData.block_seq[app.globalData.block-1] in app.globalData.answer) || !(app.globalData.trail_seq[app.globalData.trail-1] in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]]) || !(i in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]])) {
        wx.showToast({
          title: '请填写后再提交',
          icon: 'none',
          duration: 2000
        });
        return;
      }
    }
    this.data.next = false;
    this.setData(this.data);
    // Calculate Result
    if (!app.globalData.finished) {
      var pinyin_list = this.data.pinyin.split("|");
      for (var n = 0; n < show_list.length; n++) {
        var i = show_list[n];
        if (app.globalData.precise) {
          if (i in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]]) {
            var str = app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]][i];
              str = str.replace(/\s*/g,"");
              str = str.toLowerCase();
            if (str == pinyin_list[i - 1].slice(0, -1)) {
              if (this.data.cue == this.data.word) {
                app.globalData.correct_accord += 1;
              }
              else {
                app.globalData.correct_inaccord += 1;
              }   
            }
          }
        }
        else {
          for (var key in app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]]) {
            var str = app.globalData.answer[app.globalData.block_seq[app.globalData.block-1]][app.globalData.trail_seq[app.globalData.trail-1]][key];
            str = str.replace(/\s*/g,"");
            str = str.toLowerCase();
            if (str == pinyin_list[i - 1].slice(0, -1)) {
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
        if (app.globalData.online) {
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
              wx.showToast({
                title: '结果发送失败',
                icon: 'none',
                duration: 2000
              })
            },
          })
        }
        else {
          wx.showToast({
            title: '当前处于离线模式，请将结果发送给张纯洁同学',
            icon: 'none',
            duration: 2000
          })
        }
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
    // Calc Progress
    var true_progress = String(parseInt(100*(app.globalData.correct_accord+app.globalData.correct_inaccord)/(app.globalData.total_trail*app.globalData.total_block*2))) + '%';
    var error_progress = String(parseInt(100*(app.globalData.total_accord+app.globalData.total_inaccord - app.globalData.correct_accord-app.globalData.correct_inaccord)/(app.globalData.total_trail*app.globalData.total_block*2))) + '%';

    var that=this
    if (app.globalData.online) {
    wx.request({
      url: app.globalData.server + 'get_trail',
      data: {'block': app.globalData.block_seq[app.globalData.block - 1], 'trail': app.globalData.trail_seq[app.globalData.trail-1]},
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      success: function (res) {
        that.setData({ cue: res.data.cue, word: res.data.word, correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, click: 0, chinese: res.data.chinese, pinyin: res.data.pinyin, play: "Play Audio", display: true, name: res.data.name, src: app.globalData.server + 'wav/' + res.data.src, input: "", block: app.globalData.block, trail: app.globalData.trail, next: true, true_progress: true_progress, error_progress: error_progress });
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
  else {
    var i = (app.globalData.block_seq[app.globalData.block - 1]-1) * app.globalData.total_trail + app.globalData.trail_seq[app.globalData.trail-1] - 1;
    that.setData({ cue: this.data.cue_offline[i], word: this.data.word_offline[i], correct_inaccord: app.globalData.correct_inaccord, correct_accord: app.globalData.correct_accord, total_accord: app.globalData.total_accord, total_inaccord: app.globalData.total_inaccord, answer: JSON.stringify(app.globalData.answer), block_seq: app.globalData.block_seq, trail_seq: app.globalData.trail_seq, chinese: this.data.chinese_offline[i], pinyin: this.data.pinyin_offline[i], display: true, name: i, src: '/audios/wav/' + String(i+1) + app.globalData.type, input: "", block: app.globalData.block, trail: app.globalData.trail, next: true, true_progress: true_progress, error_progress: error_progress });
  }
  }
})