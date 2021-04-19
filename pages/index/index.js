// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    Capital:"蜀都中心...",
    keyword: '遥看瀑布挂前川',
    list: [{
        image: '../../img/mipmap-mdpi/lunbotu.png',
      },
      {
        image: '../../img/mipmap-mdpi/lunbotu.png',
      },
    ],
    arr: [{
        imag: '../../img/mipmap-mdpi/bingren.png',
        title:"专业培训",
        icon:"../../img/mipmap-mdpi/qi.png",
        name:"病人陪护",
        pop:"以服务29.9万人",
        color:"#61CF8C"
      },
      {
        imag: '../../img/mipmap-mdpi/chanfu.png',
        title:"服务认证",
        icon:"../../img/mipmap-mdpi/qi.png",
        name:"产妇陪护",
        pop:"以服务29.9万人",
        color:"#60AAE5"
      },
      {
        imag: '../../img/mipmap-mdpi/yuesao.png',
        title:"安全保障",
        icon:"../../img/mipmap-mdpi/qi.png",
        name:"月嫂陪护",
        pop:"以服务29.9万人",
        color:"#FFB85D"
      },
      {
        imag: '../../img/mipmap-mdpi/yuesao.png',
        title:"专业培训",
        icon:"../../img/mipmap-mdpi/qi.png",
        name:"病人陪护",
        pop:"以服务29.9万人",
        color:"#FFB85D"
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
  // 阻止键盘弹出
  noBomBox(e) {
		document.activeElement.blur();
	},
  goserch(e){
    wx.navigateTo({
      url: '/pages/Searchpage/Searchpage',
    })
  },
  //去居家陪护
  goAthome(){
    wx.navigateTo({
      url: '/pages/Athome/Athome',
    })
  },
  //去心理咨询
  gopsychology(){
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
