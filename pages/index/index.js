// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    Capital: "蜀都中心...",
    keyword: '遥看瀑布挂前川',
    list: [{
        image: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lunbotu.png',
      },
      {
        image: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lunbotu.png',
      },
      {
        image: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lunbotu.png',
      },
      {
        image: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lunbotu.png',
      }, {
        image: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lunbotu.png',
      },
    ],
    currentSwiper: 0,
    autoplay: true,
    arr: [{
      imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/bingren.png',
        title: "专业培训",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "病人陪护",
        pop: "以服务29.9万人",
        color: "#61CF8C"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/chanfu.png',
        title: "服务认证",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "产妇陪护",
        pop: "以服务29.9万人",
        color: "#60AAE5"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png',
        title: "安全保障",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "月嫂陪护",
        pop: "以服务29.9万人",
        color: "#FFB85D"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png',
        title: "专业培训",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "病人陪护",
        pop: "以服务29.9万人",
        color: "#FFB85D"
      },
    ],
    hugong: [{
        name: "热门护工",
        id: 1,
      },
      {
        name: "热门机构",
        id: 2,
      },
      {
        name: "用户好评",
        id: 3,
      }
    ],
  },
  swiperChange: function (e) {
    if(e.detail.source == "autoplay" || e.detail.source == "touch"){
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  },
  // 去消息中心
  gonews(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  goserch(e) {
    wx.navigateTo({
      url: '/pages/Searchpage/Searchpage',
    })
  },
  //去居家陪护
  goAthome() {
    wx.navigateTo({
      url: '/pages/Athome/Athome',
    })
  },
  //去心理咨询
  gopsychology() {
    wx.navigateTo({
      url: '/pages/psychology/psychology',
    })
  },
  // 事件处理函数
  bindViewTap() {

  },
  onLoad() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getUserProfile(e) {

  },
  getUserInfo(e) {

  }
})