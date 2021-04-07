// pages/Organizationdetails/Organizationdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      img: '../../img/mipmap-mdpi/hugong.png'
    },
    {
      img: '../../img/mipmap-mdpi/hugong.png'
    },
    {
      img: '../../img/mipmap-mdpi/hugong.png'
    },
  ],
  arrli:[
    {
      name:"平台认证",
      id:1
    },
    {
      name:"平台认证",
      id:2
    },
    {
      name:"平台认证",
      id:3
    },
    {
      name:"平台认证",
      id:3
    },
    {
      name:"平台认证",
      id:3
    },
    {
      name:"平台认证",
      id:3
    },
  ],
  arr: [{
    imag: '../../img/mipmap-mdpi/bingren.png',
    title:"专业培训",
    icon:"../../img/mipmap-mdpi/qi.png",
    name:"病人陪护",
    pop:"以服务29.9万人",
    color:"#61CF8C"
  },
  {
    imag: '../../img/mipmap-mdpi/chanfu.png',
    title:"服务认证",
    icon:"../../img/mipmap-mdpi/qi.png",
    name:"产妇陪护",
    pop:"以服务29.9万人",
    color:"#60AAE5"
  },
  {
    imag: '../../img/mipmap-mdpi/yuesao.png',
    title:"安全保障",
    icon:"../../img/mipmap-mdpi/qi.png",
    name:"月嫂陪护",
    pop:"以服务29.9万人",
    color:"#FFB85D"
  },
  {
    imag: '../../img/mipmap-mdpi/yuesao.png',
    title:"专业培训",
    icon:"../../img/mipmap-mdpi/qi.png",
    name:"病人陪护",
    pop:"以服务29.9万人",
    color:"#FFB85D"
  },
],
arar:[
  {
    title:"金牌保姆",
    id:0
  },
  {
    title:"金牌护工",
    id:1
  },
  {
    title:"金牌保护",
    id:2
  },
  {
    title:"金牌保护",
    id:3
  },
  {
    title:"金牌保护",
    id:4
  },
  {
    title:"金牌保护",
    id:5
  },
],
  boxshow:true, //展开收缩
  picture:true,//图文
  },
  gopicture(){
    this.setData({
      picture:!this.data.picture
    })
  },
  Negation(){
    this.setData({
      boxshow:!this.data.boxshow
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