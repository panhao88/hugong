// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Shadow: false, //联系客服
    currentSwiper: 0,
    autoplay: true,
    list: [{
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/touxiang.png',
        title: '王桂香',
        age: 48555252,
        texy: [{
            category: "糖尿病"
          },
          {
            category: "糖尿病"
          },
        ]
      },
      {
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/touxiang.png',
        title: '李富贵',
        age: 48,
        texy: [{
            category: "糖尿病"
          },
          {
            category: "糖尿病"
          },
        ]
      },
      {
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/touxiang.png',
        title: '张三',
        age: 48,
        texy: [{
            category: "糖尿病"
          },
          {
            category: "糖尿病"
          },
        ]
      },
    ],
    orderNav: [{
        id: 1,
        title: '待付款',
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/daifukuan.png',
        type: 'nopay'
      },
      {
        id: 2,
        title: '待服务',
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/daifuwu.png',
        type: 'nosend'
      },
      {
        id: 3,
        title: '服务中',
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/fuwuzhong.png',
        type: 'noget'
      },
      {
        id: 4,
        title: '待评价',
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/daipingjia.png',
        type: 'nocomment'
      },
      {
        id: 5,
        title: '退款/拒单',
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/tuikuan.png',
        type: 'nocomment'
      }
    ],
    gridtextlist: [{
        text: "我的收藏",
        icon: "n",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/shoucang.png',
        url: "/pages/Collection/Collection",
      },
      {
        text: "实名认证",
        icon: "w",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/shimingrenzheng.png',
        url: "/pages/authentication/authentication",
      },
      {
        text: "邀请好友",
        icon: "j",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yaoqing.png',
        url: "/pages/invitation/invitation",
      },
      {
        text: "服务入驻",
        icon: "g",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ruzhu.png',
        url: "/pages/ServiceEntry/ServiceEntry",
      },
      {
        text: "地址管理",
        icon: "h",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dizhi.png',
        url: "/pages/address/address",
      },
      {
        text: "联系客服",
        icon: "template",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/lianxi.png',
        url: false
      },
      {
        text: "隐私条款",
        icon: "scoped",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/pingsi.png',
        url: "/pages/Privacy/Privacy",
      },
      {
        text: "更多服务",
        icon: "sh",
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/gengduo.png',
        url: "/pages/more/more",
      },
    ]
  },
  swiperChange: function (e) {
    if(e.detail.source == "autoplay" || e.detail.source == "touch"){
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  },
  //go常用服务人
  goCommonlyused() {
    wx.navigateTo({
      url: '/pages/Serviceperson/Serviceperson',
    })
  },
  // 退出登录
  gosetup() {
    wx.navigateTo({
      url: '/pages/setup/setup',
    })
  },
  //去消息中心
  gonews() {
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  //去钱包页
  gowallet() {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },
  //去优惠卷页
  gocoupon() {
    wx.navigateTo({
      url: '/pages/coupon/coupon',
    })
  },
  //工具服务
  go(url) {
    let path = url.currentTarget.dataset.url
    if (path === false) {
      this.setData({
        Shadow: true
      })
    } else {
      wx.navigateTo({
        url: path
      })
    }
  },
  //去订单管理
  goorder(id) {
    wx.navigateTo({
      url: `/pages/order/order?id=${id.currentTarget.dataset.id}`,
    })
  },
  //取消遮罩层
  goclose(){
    this.setData({
      Shadow: false
    })
  },
  gotoorder() {
    wx.navigateTo({
      url: '/pages/order/order',
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
      })
    }
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