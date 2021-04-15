// pages/Athome/Athome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    flagIndex: 0,
    hugong: [{
        name: "推荐护工",
        id: 1,
      },
      {
        name: "推荐机构",
        id: 2,
      },
    ],
    arrli: [{
        name: "病人陪护",
        id: 1
      },
      {
        name: "平台认证",
        id: 2
      },
      {
        name: "产妇陪护",
        id: 3
      },
      {
        name: "产妇陪护",
        id: 3
      },
      {
        name: "产妇陪护",
        id: 3
      },
      {
        name: "产妇陪护",
        id: 3
      },
    ],
    arr: [{
        title: "金牌保姆",
        id: 0
      },
      {
        title: "金牌护工",
        id: 1
      },
      {
        title: "金牌保护",
        id: 2
      },
      {
        title: "金牌保护",
        id: 3
      },
      {
        title: "金牌保护",
        id: 4
      },
      {
        title: "金牌保护",
        id: 5
      },
    ]
  },
  goto(e) {
    this.setData({
      flag: e.currentTarget.dataset.index
    })
  },
  //去护工详情
  godetaild() {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  //去机构详情
  goorgandetail() {
    let id = 0
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
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