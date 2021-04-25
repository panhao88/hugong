// pages/Hospitaldetails/Hospitaldetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
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
    list:[
      {
        img:'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ayi.png',
        fuwu:"可服务",
        name:"张阿姨",
        zuizao:"最早可约3月1号",
        yi:"以服务100人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ayi.png',
        fuwu:"可服务",
        name:"张阿姨",
        zuizao:"最早可约3月1号",
        yi:"以服务100人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ayi.png',
        fuwu:"可服务",
        name:"张阿姨",
        zuizao:"最早可约3月1号",
        yi:"以服务100人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ayi.png',
        fuwu:"可服务",
        name:"张阿姨",
        zuizao:"最早可约3月1号",
        yi:"以服务100人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/ayi.png',
        fuwu:"可服务",
        name:"张阿姨",
        zuizao:"最早可约3月1号",
        yi:"以服务100人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
    ],
    arr:[
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km",
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/logo.png",
        name:"成都好姐姐陪护服务有限公司",
        title:"以服务1000人",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"蜀都中心一期",
        qianmi:"0.1km"
      },
    ]
  },
  goto(e) {
    this.setData({
      flag: e.currentTarget.dataset.index
    })
  },
  //去护工详情页
  godetaild() {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  //去机构详情页
  goorgandetail() {
    let id = 0
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
  },
  //查看全部
  goViewall() {
    if (this.data.flag === 0) {
      wx.navigateTo({
        url: '/pages/Manynurses/Manynurses',
      })
    } else {
      wx.navigateTo({
        url: '/pages/Multiagency/Multiagency',
      })
    }
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