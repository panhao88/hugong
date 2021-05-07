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
    Timereversal1: [],
    Timereversal2: [],
    Timereversal3: [],
    Timereversal4: [],
    Timereversal5: [],
    Timereversal6: [],
    Timereversal7: [],
    Timereversal8: [],
    Timereversal9: [],
    Timereversal10: [],
    Timereversal11: [],
    Timereversal12: [],
    Timereversal13: [],
    checked: false, //全选反选的按钮判断条件
    checkedNext: false, //全选反选的按钮判断条件
    checkedNexttwo: false, //全选反选的按钮判断条件
    checkedNextthree: false, //全选反选的按钮判断条件
    checkedNextfour: false, //全选反选的按钮判断条件
    checkedNextfive: false, //全选反选的按钮判断条件
    checkedNextsix: false, //全选反选的按钮判断条件
    checkedNextseven: false, //全选反选的按钮判断条件
    checkedNexteight: false, //全选反选的按钮判断条件
    checkedNextnine: false, //全选反选的按钮判断条件
    checkedNextten: false, //全选反选的按钮判断条件
    checkedNexteleven: false, //全选反选的按钮判断条件
    checkedNexttwelve: false, //全选反选的按钮判断条件
    today: new Date().getDate(), //获取今天号数数组
    date: [], //选中的时间
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + checkedMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + checkedMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal1: data2 //单击取消全部全选高亮取消
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal2: data2 //单击取消全部全选高亮取消
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nexttowMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nexttowMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal3: data2 //单击取消全部全选高亮取消
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nexttherrMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nexttherrMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal4: data2 //单击取消全部全选高亮取消
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextfourMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextfourMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal5: data2 //单击取消全部全选高亮取消
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextfiveMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextfiveMonth + checkedDate + item1.date
              }
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
          date: data2,
          Timereversal6: data2 //单击取消全部全选高亮取消
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
    //下六月
    onChangesix(e) {
      let arr = this.data.next6MonthArr
      let tempArr = []
      let appdate = []
      let nextsixMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nextsixMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nextsixMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNextsix === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextsixMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextsixMonth + checkedDate + item1.date
              }
              typedate.month = nextsixMonth
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
          checkedNextsix: !this.data.checkedNextsix,
          next6MonthArr: tempArr,
          date: data2,
          Timereversal7: data2 //单击取消全部全选高亮取消
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
          return item.month !== nextsixMonth
        })
        this.setData({
          checkedNextsix: !this.data.checkedNextsix,
          next6MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下七月
    onChangeseven(e) {
      let arr = this.data.next7MonthArr
      let tempArr = []
      let appdate = []
      let nextsevenMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nextsevenMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nextsevenMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNextseven === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextsevenMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextsevenMonth + checkedDate + item1.date
              }
              typedate.month = nextsevenMonth
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
          checkedNextseven: !this.data.checkedNextseven,
          next7MonthArr: tempArr,
          date: data2,
          Timereversal8: data2 //单击取消全部全选高亮取消
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
          return item.month !== nextsevenMonth
        })
        this.setData({
          checkedNextseven: !this.data.checkedNextseven,
          next7MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下八月
    onChangeeight(e) {
      let arr = this.data.next8MonthArr
      let tempArr = []
      let appdate = []
      let nexteightMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nexteightMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nexteightMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNexteight === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nexteightMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nexteightMonth + checkedDate + item1.date
              }
              typedate.month = nexteightMonth
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
          checkedNexteight: !this.data.checkedNexteight,
          next8MonthArr: tempArr,
          date: data2,
          Timereversal9: data2 //单击取消全部全选高亮取消
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
          return item.month !== nexteightMonth
        })
        this.setData({
          checkedNexteight: !this.data.checkedNexteight,
          next8MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下九月
    onChangenine(e) {
      let arr = this.data.next9MonthArr
      let tempArr = []
      let appdate = []
      let nextnineMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nextnineMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nextnineMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNextnine === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextnineMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextnineMonth + checkedDate + item1.date
              }
              typedate.month = nextnineMonth
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
          checkedNextnine: !this.data.checkedNextnine,
          next9MonthArr: tempArr,
          date: data2,
          Timereversal10: data2 //单击取消全部全选高亮取消
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
          return item.month !== nextnineMonth
        })
        this.setData({
          checkedNextnine: !this.data.checkedNextnine,
          next9MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下十月
    onChangeten(e) {
      let arr = this.data.next10MonthArr
      let tempArr = []
      let appdate = []
      let nexttenMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nexttenMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nexttenMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNextten === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nexttenMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nexttenMonth + checkedDate + item1.date
              }
              typedate.month = nexttenMonth
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
          checkedNextten: !this.data.checkedNextten,
          next10MonthArr: tempArr,
          date: data2,
          Timereversal11: data2 //单击取消全部全选高亮取消
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
          return item.month !== nexttenMonth
        })
        this.setData({
          checkedNextten: !this.data.checkedNextten,
          next10MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下十一月
    onChangeeleven(e) {
      let arr = this.data.next11MonthArr
      let tempArr = []
      let appdate = []
      let nextelevenMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nextelevenMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nextelevenMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNexteleven === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nextelevenMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nextelevenMonth + checkedDate + item1.date
              }
              typedate.month = nextelevenMonth
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
          checkedNexteleven: !this.data.checkedNexteleven,
          next11MonthArr: tempArr,
          date: data2,
          Timereversal12: data2 //单击取消全部全选高亮取消
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
          return item.month !== nextelevenMonth
        })
        this.setData({
          checkedNexteleven: !this.data.checkedNexteleven,
          next11MonthArr: tempArr,
        })
        console.log(this.data.date, "全部取消")
      }
    },
    //下十二
    onChangetwelve(e) {
      let arr = this.data.next12MonthArr
      let tempArr = []
      let appdate = []
      let nexttwelveMonth = ''
      let checkedDate = ''
      if (e.currentTarget.dataset.month1 < 10) {
        nexttwelveMonth = '0' + e.currentTarget.dataset.month1.toString()
      } else {
        nexttwelveMonth = e.currentTarget.dataset.month1.toString()
      }
      if (this.data.checkedNexttwelve === false) {
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
              if(item1.date < 10){
                typedate.date = e.currentTarget.dataset.year + nexttwelveMonth + checkedDate + "0" + item1.date
              }else{
                typedate.date = e.currentTarget.dataset.year + nexttwelveMonth + checkedDate + item1.date
              }
              typedate.month = nexttwelveMonth
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
          checkedNexttwelve: !this.data.checkedNexttwelve,
          next12MonthArr: tempArr,
          date: data2,
          Timereversal13: data2 //单击取消全部全选高亮取消
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
          return item.month !== nexttwelveMonth
        })
        this.setData({
          checkedNexttwelve: !this.data.checkedNexttwelve,
          next12MonthArr: tempArr,
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
      if (e.currentTarget.dataset.date < 10) {
        checkedDate = '0' + e.currentTarget.dataset.date.toString()
      } else {
      checkedDate = e.currentTarget.dataset.date.toString()
      }
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
      } else if (month == 'next5Month') {
        var that = this.data.next5MonthArr;
      } else if (month == 'next6Month') {
        var that = this.data.next6MonthArr;
      } else if (month == 'next7Month') {
        var that = this.data.next7MonthArr;
      } else if (month == 'next8Month') {
        var that = this.data.next8MonthArr;
      } else if (month == 'next9Month') {
        var that = this.data.next9MonthArr;
      } else if (month == 'next10Month') {
        var that = this.data.next10MonthArr;
      } else if (month == 'next11Month') {
        var that = this.data.next11MonthArr;
      } else {
        var that = this.data.next12MonthArr;
      }
      //切换选中状态
      if (that[index][item].state == true) {
        that[index][item].state = false;
        let today = e.currentTarget.dataset.year + checkedMonth + checkedDate
        let add = this.data.date
        this.data.date = add.filter((item) => {
          return item.date !== today
        })
        //本月取反
        let month = this.data.Timereversal1
        this.data.Timereversal1 = month.filter((item) => {
          return item.date !== today
        })
        //下一月取反
        let month1 = this.data.Timereversal2
        this.data.Timereversal2 = month1.filter((item) => {
          return item.date !== today
        })
        //下二月取反
        let month2 = this.data.Timereversal3
        this.data.Timereversal3 = month2.filter((item) => {
          return item.date !== today
        })
        //下三月取反
        let month3 = this.data.Timereversal4
        this.data.Timereversal4 = month3.filter((item) => {
          return item.date !== today
        })
        // 下四月取反
        let month4 = this.data.Timereversal5
        this.data.Timereversal5 = month4.filter((item) => {
          return item.date !== today
        })
        //下五月取反
        let month5 = this.data.Timereversal6
        this.data.Timereversal6 = month5.filter((item) => {
          return item.date !== today
        })
        //下六月取反
        let month6 = this.data.Timereversal7
        this.data.Timereversal7 = month6.filter((item) => {
          return item.date !== today
        })
        //下七月取反
        let month7 = this.data.Timereversal8
        this.data.Timereversal8 = month7.filter((item) => {
          return item.date !== today
        })
        //下八月取反
        let month8 = this.data.Timereversal9
        this.data.Timereversal9 = month8.filter((item) => {
          return item.date !== today
        })
        //下九月取反
        let month9 = this.data.Timereversal10
        this.data.Timereversal10 = month9.filter((item) => {
          return item.date !== today
        })
        //下10月取反
        let month10 = this.data.Timereversal11
        this.data.Timereversal11 = month10.filter((item) => {
          return item.date !== today
        })
        //下11月取反
        let month11 = this.data.Timereversal12
        this.data.Timereversal12 = month11.filter((item) => {
          return item.date !== today
        })
        // 下12月取反
        let month12 = this.data.Timereversal13
        this.data.Timereversal13 = month12.filter((item) => {
          return item.date !== today
        })
        if (this.data.Timereversal1.length === 0) {
          this.setData({
            checked: false
          })
        }
        if (this.data.Timereversal2.length === 0) {
          this.setData({
            checkedNext: false
          })
        }
        if (this.data.Timereversal3.length === 0) {
          this.setData({
            checkedNexttwo: false
          })
        }
        if (this.data.Timereversal4.length === 0) {
          this.setData({
            checkedNextthree: false
          })
        }
        if (this.data.Timereversal5.length === 0) {
          this.setData({
            checkedNextfour: false
          })
        }
        if (this.data.Timereversal6.length === 0) {
          this.setData({
            checkedNextfive: false
          })
        }
        if (this.data.Timereversal7.length === 0) {
          this.setData({
            checkedNextsix: false
          })
        }
        if (this.data.Timereversal8.length === 0) {
          this.setData({
            checkedNextseven: false
          })
        }
        if (this.data.Timereversal9.length === 0) {
          this.setData({
            checkedNexteight: false
          })
        }
        if (this.data.Timereversal10.length === 0) {
          this.setData({
            checkedNextnine: false
          })
        }
        if (this.data.Timereversal11.length === 0) {
          this.setData({
            checkedNextten: false
          })
        }
        if (this.data.Timereversal12.length === 0) {
          this.setData({
            checkedNexteleven: false
          })
        }
        if (this.data.Timereversal13.length === 0) {
          this.setData({
            checkedNexttwelve: false
          })
        }
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
      } else if (month == 'next5Month') {
        this.setData({
          next5MonthArr: that,
        });
      } else if (month == 'next6Month') {
        this.setData({
          next6MonthArr: that,
        });
      } else if (month == 'next7Month') {
        this.setData({
          next7MonthArr: that,
        });
      } else if (month == 'next8Month') {
        this.setData({
          next8MonthArr: that,
        });
      } else if (month == 'next9Month') {
        this.setData({
          next9MonthArr: that,
        });
      } else if (month == 'next10Month') {
        this.setData({
          next10MonthArr: that,
        });
      } else if (month == 'next11Month') {
        this.setData({
          next11MonthArr: that,
        });
      } else {
        this.setData({
          next12MonthArr: that,
        });
      }
    },
  }
})