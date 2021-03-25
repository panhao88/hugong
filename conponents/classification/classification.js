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
    flagIndex:0
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
    //去详情页
    godetaild(){
      wx.navigateTo({
        url: '/pages/details/details',
      })
    }
  }
})
