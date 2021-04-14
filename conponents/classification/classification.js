// conponents/classification/classification.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hugong:{
      type:Array
    },
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: 0,
    flagIndex:0,
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
    arr:[
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
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goto(e) {
      this.setData({
        flag:e.currentTarget.dataset.index
      })
    },
    // 去用户评价详情
    Userpraise(){
      wx.navigateTo({
        url: '/pages/Praise/Praise',
      })
    },
    //去护工详情页
    godetaild(){
      wx.navigateTo({
        url: '/pages/details/details',
      })
    },
    //去机构详情页
    goorgandetail(){
      wx.navigateTo({
        url: '/pages/Organizationdetails/Organizationdetails',
      })
    },
    Discoloration(e){
      this.setData({
        flagIndex:e.currentTarget.dataset.index
      })
    }
  }
})
