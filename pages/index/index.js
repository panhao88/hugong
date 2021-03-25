// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  
    keyword: '遥看瀑布挂前川',
    list: [{
        image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
        title: '身无彩凤双飞翼，心有灵犀一点通'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
      }
    ],
    arr: [{
        image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
        title: '身无彩凤双飞翼，心有灵犀一点通'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
      }
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
