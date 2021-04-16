// pages/Collection/Collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    data: [{
      img:"../../img/mipmap-mdpi/yuesao.png",
      name: "王阿姨",
      Gender:"女",
      Praise:"98%",
      age:"40",
      Years:3,
      right: 0
    },
    {
      img:"../../img/mipmap-mdpi/yuesao.png",
      name: "王阿姨",
      Gender:"女",
      Praise:"98%",
      age:"40",
      Years:3,
      right: 0
    },
    {
      img:"../../img/mipmap-mdpi/yuesao.png",
      name: "王阿姨",
      Gender:"女",
      Praise:"98%",
      age:"40",
      Years:3,
      right: 0
    }],
    hugong: [{
        name: "护工",
        id: 1,
      },
      {
        name: "机构",
        id: 2,
      },
      {
        name: "健康知识",
        id: 3,
      }
    ],
  },
  goto(e) {
    this.setData({
      flag: e.currentTarget.dataset.index
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