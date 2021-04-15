// pages/Orderdetails/Orderdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1','2'],
    flag:5,
    gito:1,//退单拒单
    arr: [{
      imag: '../../img/mipmap-mdpi/bingren.png',
      title:"专业培训",
      icon:"../../img/mipmap-mdpi/qi.png",
    },
    {
      imag: '../../img/mipmap-mdpi/chanfu.png',
      title:"服务认证",
      icon:"../../img/mipmap-mdpi/qi.png",
    },
    {
      imag: '../../img/mipmap-mdpi/yuesao.png',
      title:"安全保障",
      icon:"../../img/mipmap-mdpi/qi.png",
    },
    {
      imag: '../../img/mipmap-mdpi/yuesao.png',
      title:"专业培训",
      icon:"../../img/mipmap-mdpi/qi.png",
    },
  ],
  },
  //折叠面板
  onChange(e) {
    this.setData({
      activeNames: e.detail,
    });
  },
  //取消订单
  cancelorder(){
    wx.showModal({
      title: '提示',
      content: '你确认要取消订单吗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //确认服务完成
  gocomplete(){
    wx.showModal({
      title: '提示',
      content: '确认服务已完成了吗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //申请售后
  goAftersales(){
    wx.navigateTo({
      url: '/pages/apply/apply',
    })
  },
  //去评价
  goevaluate(){
    wx.navigateTo({
      url: '/pages/Detaevaluate/Detaevaluate',
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      flag:parseInt(options.ids)
    })
    this.setData({
      gito:parseInt(options.item)
    })
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