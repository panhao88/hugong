// pages/Escort/Escort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:0,
    list:[
      {
        name: "医院陪护",
        id: 1,
      },
      {
        name: "康养院陪护",
        id: 2,
      },
      {
        name: "居家陪护",
        id: 3,
      }
    ]
  },
  // 医院跳转
  goto(e){
    this.setData({
      flag:e.currentTarget.dataset.index
    })
  },
  // 去搜索页
  goHhserch(e){
    console.log(e)
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