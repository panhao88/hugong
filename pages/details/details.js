// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'',
    arr:[
      {
        name:"医院陪护",
        id:1
      },
      {
        name:"医院陪护",
        id:2
      },
      {
        name:"医院陪护",
        id:3
      },
      {
        name:"医院陪护",
        id:4
      },
      {
        name:"医院陪护",
        id:5
      },
      {
        name:"医院陪护",
        id:6
      },

    ],
   show:false,
   showaddress:false,
   keepaddress:false
  },
 
  // 弹出层展开影藏
  onClickButton(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false,
      showaddress:false,
      keepaddress:false
    })
  },
  //新增地址弹窗
  goaddress(){
    this.setData({
      showaddress:true,
      show:false
    })
  },
  // 保存地址弹窗
  Newaddress(){
    this.setData({
      keepaddress:true,
      showaddress:false
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
     let that = this
      wx.getSystemInfo({
        success(res) {
         that.setData({
           height:res.windowHeight
         })
        },
      });
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