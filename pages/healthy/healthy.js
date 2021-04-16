// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: "据国家卫生健康委发布，2月20日，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例889例，新增死亡病例118例（湖北115例，浙江、重庆、云南各1例），新增疑似病例1614例。",
    foldStat: true,
  },
  fold: function() {
    var that = this;
    that.setData({
      foldStat: !that.data.foldStat
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      //显示30个字，多余的用...表示
      shortText: that.data.news.slice(0,40?30:11)+'...'
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
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