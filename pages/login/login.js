// pages/login/login.js
var country = require('../../lib/country');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    flag: 0,
    defaultType: true,
    passwordType: true,
    listitem:country.list,
    phonetittle:'+86',
  },
  // 弹窗开关
  goregion() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  gocancel(){
    this.setData({
      show:false
    })
  },
  // 手机登录,密码登录切换
  onLoginWay() {
    this.setData({
      flag: 0
    });
  },
  onregister() {
    this.setData({
      flag: 1
    });
  },
  //忘记密码
  forget() {
    wx.navigateTo({
      url: '/pages/forget/forget',
    })
  },
  eyeStatus () {
    this.data.defaultType = !this.data.defaultType
    this.data.passwordType = !this.data.passwordType
    this.setData({
      defaultType: this.data.defaultType,
      passwordType: this.data.passwordType
    })
  },
 phone(e){
   this.setData({
    phonetittle:e.currentTarget.dataset.item.code,
    show:false
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