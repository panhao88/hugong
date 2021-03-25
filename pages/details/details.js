// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    marks:[
      {
        latitude: 22.773672,
        longitude: 113.922775,
        title:"嘉华光明校区",
        iconPath:"../../image/定位.png",
        width:30,
        height:30
      }
    ],
  show:false, //立即预约弹窗
  Shadow:false,//原生遮罩层
   showaddress:false, //新增地址
   keepaddress:false, //联系地址弹窗
   Serviceaddress:false //服务地址弹窗
  },
 
  // 弹出层展开影藏
  onClickButton(){
    this.setData({
      // show:true
      Shadow:true
    })
  },
  onClose(){
    this.setData({
      show:false,
      showaddress:false,
      keepaddress:false,
      Serviceaddress:false
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
  //请选择服务地址
  golocation(){
    this.setData({
      Serviceaddress:true,
      keepaddress:false
    })
    var that=this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          marks: [
            {
              latitude: res.latitude,
              longitude: res.longitude,
              title: "嘉华光明校区",
              iconPath: "../../image/定位.png",
              width: 30,
              height: 30
            }
          ]
        })
      },
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