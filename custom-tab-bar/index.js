Component({
  data: {
    color: "#ccc",
    selectedColor: "#16D595",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/shouye(1).png",
        selectedIconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/shouye(2).png"
      },
      {
        pagePath: "/pages/Escort/Escort",
        text: "陪护结构",
        iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/peihujigou(1).png",
        selectedIconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/peihujigou(2).png"
      },
      {
        pagePath: "/pages/service/service",
        text: "服务进度",
         bulge:true,
        iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/fuwujindu(2).png",
        selectedIconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/fuwujindu(2).png"
      },
      {
        pagePath: "/pages/healthy/healthy",
        text: "健康知识",
        iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/jiankangzhishi(1).png",
        selectedIconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/jiankangzhishi(2).png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/wode(1).png",
        selectedIconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/wode(2).png"
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