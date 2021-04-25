// pages/Praise/Praise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todo:"选择了王阿姨的居家陪护月嫂陪护服务时间选择了王阿姨的居家陪护月嫂陪护服务时间选择了王阿姨的居家陪护月嫂陪护服务时间",
    news: "非常感谢你对我们的支持与信任, 非常感谢你对我们的支持与信任, 非常感谢你对我们的支持与信任, 非常感谢你对我们的支持与信任,非常感谢你对我们的支持与信任,非常感谢你对我们的支持与信任,非常感谢你对我们的支持与信任,",
    foldStat: true,
    arr: [{
        img: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png"
      },
      {
        img: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png"
      },
      {
        img: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png"
      },
    ]
  },
  fold: function () {
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
      shortText: that.data.news.slice(0, 30 ? 60 : 11) + '...'
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