// pages/Searchpage/Searchpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Shadow:false,
    arr:[
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
      {
        img:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yiyuansousuo.png",
        name:"四川大学华西医院",
        title:"三级甲等",
        dingwei:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dingwei.png",
        weizhi:"世纪城蜀都中心",
        qianmi:"0.1km",
        dianhua:"cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/dianhua.png"
      },
    ]
  },
  //去医院详情
  goHospitaldetails(){
    wx.navigateTo({
      url: '/pages/Hospitaldetails/Hospitaldetails',
    })
  },
    //取消遮罩层
    goclose(){
      this.setData({
        Shadow: false
      })
    },
    //拨打电话
    gophone(){
      console.log(11)
      this.setData({
        Shadow:true
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