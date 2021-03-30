// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identification:0, //tabs标识
    id:'',//存储的id
    Shadow:false, //电话弹窗
  },
  //go订单详情
  goorderdetails(){
    wx.navigateTo({
      url: `/pages/Orderdetails/Orderdetails?ids=${this.data.id}`,
    })
  },
  //go服务中
  goInservice(){
    wx.navigateTo({
      url: `/pages/Orderdetails/Orderdetails?ids=${this.data.id}`,
    })
  },
  //go待服务
  goTobeserved(){
    wx.navigateTo({
      url: `/pages/Orderdetails/Orderdetails?ids=${this.data.id}`,
    })
  },
  //go拨打电话
  gophone(){
    this.setData({
      Shadow:true
    })
  },
    //去待评价
  goTobeevaluated(){
    wx.navigateTo({
      url: `/pages/Orderdetails/Orderdetails?ids=${this.data.id}`,
    })
  },
  //tabs点击事件
  onClickp(e){
    this.setData({
      id:e.detail.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      identification:parseInt(options.id)
    })
    console.log(this.data.identification)
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