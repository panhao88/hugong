// pages/psychology/psychology.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Capital: "蜀都中心...",
    keyword: '遥看瀑布挂前川',
    flag: 0,
    hugong: [{
        name: "推荐护师",
        id: 1,
      },
      {
        name: "距离优先",
        id: 2,
      },
      {
        name: "评价最高",
        id: 3,
      },
    ],
    arrli:[
      {
        name:"病人陪护",
        id:1
      },
      {
        name:"平台认证",
        id:2
      },
      {
        name:"产妇陪护",
        id:3
      },
      {
        name:"产妇陪护",
        id:3
      },
      {
        name:"产妇陪护",
        id:3
      },
      {
        name:"产妇陪护",
        id:3
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
  },
  goto(e) {
    this.setData({
      flag: e.currentTarget.dataset.index
    })
  },
  //去详情
  godetails(e){
    let psy = 1
    let id = 1
    wx.navigateTo({
      url: `/pages/details/details?id=${id}&psy=${psy}`,
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