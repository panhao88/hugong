// conponents/time/time.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    thisYear: {
      type: String
    },
    thisMonth: {
      type: String
    },
    thisMonthArr: {
      type: Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    checked: false, //全选反选的按钮判断条件
    date:[],
    thisMonthArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onshow() {
      console.log(this.data.thisMonthArr)
  },
    // 本月时间
    goonange(e) {
      let arr = this.data.thisMonthArr
      let tempArr = []
      let appdate = []
      let checkedMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        checkedMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        checkedMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checked === false) {
        arr.map(item => {
          let tempA = []
          let date1 = []
          item.map(item1 => {
            let typedate = {
              date: '',
              month: ''
            }
            if (item1.date !== '' && item1.date >= this.data.today) {
              item1.state = true
              typedate.date = e.currentTarget.dataset.year + checkedMonth + checkedDate + item1.date
              typedate.month = checkedMonth
            }
            tempA.push(item1)
            date1.push(typedate)
          })
          tempArr.push(tempA)
          appdate.push(date1)
        })
        let convert = appdate.flat();
        // 去空
        convert = convert.filter((item) => {
          return item.date !== ''
        })
        // 拼接选中月
        this.data.date = this.data.date.concat(convert)
        // 去重
        let add = this.data.date
        let hash = {};
        let data2 = add.reduce((preVal, curVal) => {
          hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
          return preVal
        }, [])
        // 重新赋值
        this.setData({
          checked: !this.data.checked,
          thisMonthArr: tempArr,
          date: data2
        })
        console.log(this.data.date, "全部选中")
      } else {
        arr.map(item => {
          let tempA = []
          item.map(item1 => {
            if (item1.date !== '' && item1.date >= this.data.today) {
              item1.state = false
            }
            tempA.push(item1)
          })
          tempArr.push(tempA)
        })
        this.data.date = this.data.date.filter(item => {
          return item.month !== checkedMonth
        })
        this.setData({
          checked: !this.data.checked,
          thisMonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
      this.triggerEvent('myevent',this.data.thisMonthArr)
    },
      // 点击时间详情
  select_date: function (e) {
    let checkedMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      checkedMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      checkedMonth = e.currentTarget.dataset.month1.toString()
    }
    // if (e.currentTarget.dataset.date < 10) {
    //   checkedDate = '0' + e.currentTarget.dataset.date.toString()
    // } else {
    checkedDate = e.currentTarget.dataset.date.toString()
    // }
    let typedate = {
      date: '',
      month: ''
    }
    typedate.date = e.currentTarget.dataset.year + checkedMonth + checkedDate
    typedate.month = checkedMonth
    //如果点击项为空百项目，不继续执行
    let date = e.currentTarget.dataset.date;
    if (date == '' || date <= 0) {
      return;
    }
    let index = e.currentTarget.dataset.key;
    let item = e.currentTarget.dataset.keyitem;
    let month = e.currentTarget.dataset.month;
    if (month == 'thisMonth') {
      let that = this.data.thisMonthArr;
    } else if (month == 'nextMonth') {
      let that = this.data.nextMonthArr;
    } else if (month == 'next2Month') {
      let that = this.data.next2MonthArr;
    } else if (month == 'next3Month') {
      let that = this.data.next3MonthArr;
    } else if (month == 'next4Month') {
      let that = this.data.next4MonthArr;
    } else {
      let that = this.data.next5MonthArr;
    }
    //切换选中状态
    if (that[index][item].state == true) {
      that[index][item].state = false;
      let today = e.currentTarget.dataset.year + checkedMonth + checkedDate
      let add = this.data.date
      this.data.date = add.filter((item, index) => {
        return item.date !== today
      })
      console.log(this.data.date, "单击取消")
    } else if (that[index][item].state == false) {
      that[index][item].state = true;
      // 悬着的日期增加
      this.data.date.push(typedate)
      console.log(this.data.date, "单击选中")
    }
    //根据月份设置数据
    if (month == 'thisMonth') {
      this.setData({
        thisMonthArr: that,
      });
    } else if (month == 'nextMonth') {
      this.setData({
        nextMonthArr: that,
      });
    } else if (month == 'next2Month') {
      this.setData({
        next2MonthArr: that,
      });
    } else if (month == 'next3Month') {
      this.setData({
        next3MonthArr: that,
      });
    } else if (month == 'next4Month') {
      this.setData({
        next4MonthArr: that,
      });
    } else {
      this.setData({
        next5MonthArr: that,
      });
    }
  },
  }
})