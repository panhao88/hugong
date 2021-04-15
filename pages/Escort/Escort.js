// pages/Escort/Escort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Capital: "蜀都中心...",
    flag: 0,
    list: [{
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
    ],
    ppplist: [{
        image: '../../img/mipmap-mdpi/lunbotu.png',
      },
      {
        image: '../../img/mipmap-mdpi/lunbotu.png',
      },
    ],
    arr:[
      {
        img:"../../img/mipmap-mdpi/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"../../img/mipmap-mdpi/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"../../img/mipmap-mdpi/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"../../img/mipmap-mdpi/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km",
      },
      {
        img:"../../img/mipmap-mdpi/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"../../img/mipmap-mdpi/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"../../img/mipmap-mdpi/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"../../img/mipmap-mdpi/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"../../img/mipmap-mdpi/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"../../img/mipmap-mdpi/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
    ]
  },
  // 医院跳转
  goto(e) {
    this.setData({
      flag: e.currentTarget.dataset.index
    })
  },
  gomechanismdetaild() {
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
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