// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Shadow: false, //联系客服
    list: [{
        img: '../../img/mipmap-mdpi/touxiang.png',
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
        img: '../../img/mipmap-mdpi/touxiang.png',
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
        img: '../../img/mipmap-mdpi/touxiang.png',
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
        img: '../../img/mipmap-mdpi/daifukuan.png',
        type: 'nopay'
      },
      {
        id: 2,
        title: '待服务',
        img: '../../img/mipmap-mdpi/daifuwu.png',
        type: 'nosend'
      },
      {
        id: 3,
        title: '服务中',
        img: '../../img/mipmap-mdpi/fuwuzhong.png',
        type: 'noget'
      },
      {
        id: 4,
        title: '待评价',
        img: '../../img/mipmap-mdpi/daipingjia.png',
        type: 'nocomment'
      },
      {
        id: 5,
        title: '退款/拒单',
        img: '../../img/mipmap-mdpi/tuikuan.png',
        type: 'nocomment'
      }
    ],
    gridtextlist: [{
        text: "我的收藏",
        icon: "n",
        img: '../../img/mipmap-mdpi/shoucang.png',
        url: "/pages/Collection/Collection",
      },
      {
        text: "实名认证",
        icon: "w",
        img: '../../img/mipmap-mdpi/shimingrenzheng.png',
        url: "/pages/authentication/authentication",
      },
      {
        text: "邀请好友",
        icon: "j",
        img: '../../img/mipmap-mdpi/yaoqing.png',
        url: "/pages/invitation/invitation",
      },
      {
        text: "服务入驻",
        icon: "g",
        img: '../../img/mipmap-mdpi/ruzhu.png',
        url: "/pages/ServiceEntry/ServiceEntry",
      },
      {
        text: "地址管理",
        icon: "h",
        img: '../../img/mipmap-mdpi/dizhi.png',
        url: "/pages/address/address",
      },
      {
        text: "联系客服",
        icon: "template",
        img: '../../img/mipmap-mdpi/lianxi.png',
        url: false
      },
      {
        text: "隐私条款",
        icon: "scoped",
        img: '../../img/mipmap-mdpi/pingsi.png',
        url: "/pages/Privacy/Privacy",
      },
      {
        text: "更多服务",
        icon: "sh",
        img: '../../img/mipmap-mdpi/gengduo.png',
        url: "/pages/more/more",
      },
    ]
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
  gocancel(){
    this.setData({
      Shadow: false
    })
  },
  gotoorder() {
    console.log(111)
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