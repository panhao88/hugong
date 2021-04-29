// conponents/time/time.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //获取本月年月日
    thisYear: {
      type: String
    },
    thisMonth: {
      type: String
    },
    thisMonthArr: {
      type: Array
    },
    //获取下一月年月日
    nextYear: {
      type: String
    },
    nextMonth: {
      type: String
    },
    nextMonthArr: {
      type: Array
    },
    //获取下二本月年月日
    next2Year: {
      type: String
    },
    next2Month: {
      type: String
    },
    next2MonthArr: {
      type: Array
    },
    //获取下三本月年月日
    next3Year: {
      type: String
    },
    next3Month: {
      type: String
    },
    next3MonthArr: {
      type: Array
    },
    //获取下四本月年月日
    next4Year: {
      type: String
    },
    next4Month: {
      type: String
    },
    next4MonthArr: {
      type: Array
    },
    //获取下五本月年月日
    next5Year: {
      type: String
    },
    next5Month: {
      type: String
    },
    next5MonthArr: {
      type: Array
    },
    //获取下六本月年月日
    next6Year: {
      type: String
    },
    next6Month: {
      type: String
    },
    next6MonthArr: {
      type: Array
    },
    //获取下七本月年月日
    next7Year: {
      type: String
    },
    next7Month: {
      type: String
    },
    next7MonthArr: {
      type: Array
    },
     //获取下八本月年月日
     next8Year: {
      type: String
    },
    next8Month: {
      type: String
    },
    next8MonthArr: {
      type: Array
    },
     //获取下九本月年月日
     next9Year: {
      type: String
    },
    next9Month: {
      type: String
    },
    next9MonthArr: {
      type: Array
    },
     //获取下十本月年月日
     next10Year: {
      type: String
    },
    next10Month: {
      type: String
    },
    next10MonthArr: {
      type: Array
    },
     //获取下十一本月年月日
     next11Year: {
      type: String
    },
    next11Month: {
      type: String
    },
    next11MonthArr: {
      type: Array
    },
    //获取下十二本月年月日
    next12Year: {
      type: String
    },
    next12Month: {
      type: String
    },
    next12MonthArr: {
      type: Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    checked: false, //全选反选的按钮判断条件
    checkedNext: false, //全选反选的按钮判断条件
    checkedNexttwo: false, //全选反选的按钮判断条件
    checkedNextthree: false, //全选反选的按钮判断条件
    checkedNextfour: false, //全选反选的按钮判断条件
    checkedNextfive: false, //全选反选的按钮判断条件
    today: new Date().getDate(), //获取今天号数数组
    date: [],//选中的时间
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 确认时间
    onConfirm() {
      this.triggerEvent("traCheckedNum", this.data.date)
    },
    // 全选本月时间
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
    },
    //下一月时间
  onChangenext(e) {
    let arr = this.data.nextMonthArr
    let tempArr = []
    let appdate = []
    let nextMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      nextMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      nextMonth = e.currentTarget.dataset.month1.toString()
    }
    if (this.data.checkedNext === false) {
      arr.map(item => {
        let tempA = []
        let date1 = []
        item.map(item1 => {
          let typedate = {
            date: '',
            month: ''
          }
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = true
            typedate.date = e.currentTarget.dataset.year + nextMonth + checkedDate + item1.date
            typedate.month = nextMonth
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item.date !== ''
      })
      this.data.date = this.data.date.concat(convert)
      // 去重
      let add = this.data.date
      let hash = {};
      let data2 = add.reduce((preVal, curVal) => {
        hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
        return preVal
      }, [])
      this.setData({
        checkedNext: !this.data.checkedNext,
        nextMonthArr: tempArr,
        date: data2
      })
      console.log(this.data.date, "全部选中")
    } else {
      arr.map(item => {
        let tempA = []
        item.map(item1 => {
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = false
          }
          tempA.push(item1)
        })
        tempArr.push(tempA)
      })
      this.data.date = this.data.date.filter(item => {
        return item.month !== nextMonth
      })
      this.setData({
        checkedNext: !this.data.checkedNext,
        nextMonthArr: tempArr,
      })
      console.log(this.data.date, "全部取消")
    }
  },
  //下二月时间
  onChangetow(e) {
    let arr = this.data.next2MonthArr
    let tempArr = []
    let appdate = []
    let nexttowMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      nexttowMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      nexttowMonth = e.currentTarget.dataset.month1.toString()
    }
    if (this.data.checkedNexttwo === false) {
      arr.map(item => {
        let tempA = []
        let date1 = []
        item.map(item1 => {
          let typedate = {
            date: '',
            month: ''
          }
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = true
            typedate.date = e.currentTarget.dataset.year + nexttowMonth + checkedDate + item1.date
            typedate.month = nexttowMonth
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item.date !== ''
      })
      this.data.date = this.data.date.concat(convert)
      // 去重
      let add = this.data.date
      let hash = {};
      let data2 = add.reduce((preVal, curVal) => {
        hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
        return preVal
      }, [])
      this.setData({
        checkedNexttwo: !this.data.checkedNexttwo,
        next2MonthArr: tempArr,
        date: data2
      })
      console.log(this.data.date, "全部选中")
    } else {
      arr.map(item => {
        let tempA = []
        item.map(item1 => {
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = false
          }
          tempA.push(item1)
        })
        tempArr.push(tempA)
      })
      this.data.date = this.data.date.filter(item => {
        return item.month !== nexttowMonth
      })
      this.setData({
        checkedNexttwo: !this.data.checkedNexttwo,
        next2MonthArr: tempArr,
      })
      console.log(this.data.date, "全部取消")
    }
  },
  //下三月时间
  onChangetherr(e) {
    let arr = this.data.next3MonthArr
    let tempArr = []
    let appdate = []
    let nexttherrMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      nexttherrMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      nexttherrMonth = e.currentTarget.dataset.month1.toString()
    }
    if (this.data.checkedNextthree === false) {
      arr.map(item => {
        let tempA = []
        let date1 = []
        item.map(item1 => {
          let typedate = {
            date: '',
            month: ''
          }
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = true
            typedate.date = e.currentTarget.dataset.year + nexttherrMonth + checkedDate + item1.date
            typedate.month = nexttherrMonth
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item.date !== ''
      })
      this.data.date = this.data.date.concat(convert)
      // 去重
      let add = this.data.date
      let hash = {};
      let data2 = add.reduce((preVal, curVal) => {
        hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
        return preVal
      }, [])
      this.setData({
        checkedNextthree: !this.data.checkedNextthree,
        next3MonthArr: tempArr,
        date: data2
      })
      console.log(this.data.date, "全部选中")
    } else {
      arr.map(item => {
        let tempA = []
        item.map(item1 => {
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = false
          }
          tempA.push(item1)
        })
        tempArr.push(tempA)
      })
      this.data.date = this.data.date.filter(item => {
        return item.month !== nexttherrMonth
      })
      this.setData({
        checkedNextthree: !this.data.checkedNextthree,
        next3MonthArr: tempArr,
      })
      console.log(this.data.date, "全部取消")
    }
  },
  // 下四月时间
  onChangefour(e) {
    let arr = this.data.next4MonthArr
    let tempArr = []
    let appdate = []
    let nextfourMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      nextfourMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      nextfourMonth = e.currentTarget.dataset.month1.toString()
    }
    if (this.data.checkedNextfour === false) {
      arr.map(item => {
        let tempA = []
        let date1 = []
        item.map(item1 => {
          let typedate = {
            date: '',
            month: ''
          }
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = true
            typedate.date = e.currentTarget.dataset.year + nextfourMonth + checkedDate + item1.date
            typedate.month = nextfourMonth
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item.date !== ''
      })
      this.data.date = this.data.date.concat(convert)
      // 去重
      let add = this.data.date
      let hash = {};
      let data2 = add.reduce((preVal, curVal) => {
        hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
        return preVal
      }, [])
      this.setData({
        checkedNextfour: !this.data.checkedNextfour,
        next4MonthArr: tempArr,
        date: data2
      })
      console.log(this.data.date, "全部选中")
    } else {
      arr.map(item => {
        let tempA = []
        item.map(item1 => {
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = false
          }
          tempA.push(item1)
        })
        tempArr.push(tempA)
      })
      this.data.date = this.data.date.filter(item => {
        return item.month !== nextfourMonth
      })
      this.setData({
        checkedNextfour: !this.data.checkedNextfour,
        next4MonthArr: tempArr,
      })
      console.log(this.data.date, "全部取消")
    }
  },
  //下五月时间
  onChangefive(e) {
    let arr = this.data.next5MonthArr
    let tempArr = []
    let appdate = []
    let nextfiveMonth = ''
    let checkedDate = ''
    if (e.currentTarget.dataset.month1 < 10) {
      nextfiveMonth = '0' + e.currentTarget.dataset.month1.toString()
    } else {
      nextfiveMonth = e.currentTarget.dataset.month1.toString()
    }
    if (this.data.checkedNextfive === false) {
      arr.map(item => {
        let tempA = []
        let date1 = []
        item.map(item1 => {
          let typedate = {
            date: '',
            month: ''
          }
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = true
            typedate.date = e.currentTarget.dataset.year + nextfiveMonth + checkedDate + item1.date
            typedate.month = nextfiveMonth
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item.date !== ''
      })
      this.data.date = this.data.date.concat(convert)
      // 去重
      let add = this.data.date
      let hash = {};
      let data2 = add.reduce((preVal, curVal) => {
        hash[curVal.date] ? '' : hash[curVal.date] = true && preVal.push(curVal);
        return preVal
      }, [])
      this.setData({
        checkedNextfive: !this.data.checkedNextfive,
        next5MonthArr: tempArr,
        date: data2
      })
      console.log(this.data.date, "全部选中")
    } else {
      arr.map(item => {
        let tempA = []
        item.map(item1 => {
          if (item1.date !== '' && item1.date >= 1) {
            item1.state = false
          }
          tempA.push(item1)
        })
        tempArr.push(tempA)
      })
      this.data.date = this.data.date.filter(item => {
        return item.month !== nextfiveMonth
      })
      this.setData({
        checkedNextfive: !this.data.checkedNextfive,
        next5MonthArr: tempArr,
      })
      console.log(this.data.date, "全部取消")
    }
  },
    // 单击时间
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
        var that = this.data.thisMonthArr;
      } else if (month == 'nextMonth') {
        var that = this.data.nextMonthArr;
      } else if (month == 'next2Month') {
        var that = this.data.next2MonthArr;
      } else if (month == 'next3Month') {
        var that = this.data.next3MonthArr;
      } else if (month == 'next4Month') {
        var that = this.data.next4MonthArr;
      } else {
        var that = this.data.next5MonthArr;
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