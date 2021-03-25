// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
      title: '昨夜星辰昨夜风，画楼西畔桂堂东'
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
      title: '身无彩凤双飞翼，心有灵犀一点通'
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
      title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
    }
  ],
  orderNav: [{
      id: 1,
      title: '待付款',
      img: 'https://shopro.7wpp.com/imgs/user/tab11.png',
      type: 'nopay'
    },
    {
    	id: 2,
    	title: '待服务',
    	img: 'https://shopro.7wpp.com/imgs/user/tab11.png',
    	type: 'nosend'
    },
    {
      id: 3,
      title: '服务中',
      img: 'https://shopro.7wpp.com/imgs/user/tab33.png',
      type: 'noget'
    },
    {
      id: 4,
      title: '待评价',
      img: 'https://shopro.7wpp.com/imgs/user/tab44.png',
      type: 'nocomment'
    },
    {
      id: 4,
      title: '退款/拒单',
      img: 'https://shopro.7wpp.com/imgs/user/tab44.png',
      type: 'nocomment'
    }
  ]
  },
  gologin(){
    wx.navigateTo({
      url: '/pages/login/login',
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