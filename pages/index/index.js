// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    Capital:"蜀都中心...",
    keyword: '遥看瀑布挂前川',
    list: [{
        image: '../../img/mipmap-mdpi/lun.png',
      },
      {
        image: '../../img/mipmap-mdpi/lun.png',
      },
    ],
    arr: [{
        imag: '../../img/mipmap-mdpi/bingren.png',
        title:"专业培训",
        icon:"../../img/mipmap-mdpi/qi.png",
      },
      {
        imag: '../../img/mipmap-mdpi/chanfu.png',
        title:"服务认证",
        icon:"../../img/mipmap-mdpi/qi.png",
      },
      {
        imag: '../../img/mipmap-mdpi/yuesao.png',
        title:"安全保障",
        icon:"../../img/mipmap-mdpi/qi.png",
      },
      {
        imag: '../../img/mipmap-mdpi/yuesao.png',
        title:"专业培训",
        icon:"../../img/mipmap-mdpi/qi.png",
      },
    ],
    hugong: [{
      name: "热门护工",
      id: 1,
    },
    {
      name: "热门机构",
      id: 2,
    },
    {
      name: "用户好评",
      id: 3,
    }
  ],
  },
  goserch(e){
    wx.navigateTo({
      url: '/pages/Searchpage/Searchpage',
    })
  },
  // 事件处理函数
  bindViewTap() {
   
  },
  onLoad() {
  
  },
  getUserProfile(e) {
  
  },
  getUserInfo(e) {
   
  }
})
