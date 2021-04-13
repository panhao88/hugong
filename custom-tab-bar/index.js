Component({
  data: {
    color: "#ccc",
    selectedColor: "#16D595",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/img/mipmap-mdpi/shouye(1).png",
        selectedIconPath: "/img/mipmap-mdpi/shouye(2).png"
      },
      {
        pagePath: "/pages/Escort/Escort",
        text: "陪护结构",
        iconPath: "/img/mipmap-mdpi/peihujigou(1).png",
        selectedIconPath: "/img/mipmap-mdpi/peihujigou(2).png"
      },
      {
        pagePath: "/pages/service/service",
        text: "服务进度",
         bulge:true,
        iconPath: "/img/mipmap-mdpi/fuwujindu(2).png",
        selectedIconPath: "/img/mipmap-mdpi/fuwujindu(2).png"
      },
      {
        pagePath: "/pages/healthy/healthy",
        text: "健康知识",
        iconPath: "/img/mipmap-mdpi/jiankangzhishi(1).png",
        selectedIconPath: "/img/mipmap-mdpi/jiankangzhishi(2).png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "/img/mipmap-mdpi/wode(1).png",
        selectedIconPath: "/img/mipmap-mdpi/wode(2).png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})