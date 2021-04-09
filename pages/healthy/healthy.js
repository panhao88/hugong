Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    SessionId: '',
    date: [],
    thisYear: '',
    thisMonth: '',
    thisMonthArr: [],
    today: new Date().getDate(),
    nextYear: '',
    nextMonth: '',
    nextMonthArr: [],
    next2Year: '',
    next2Month: '',
    next2MonthArr: [],
    next3Year: '',
    next3Month: '',
    next3MonthArr: [],
    next4Year: '',
    next4Month: '',
    next4MonthArr: [],
    next5Year: '',
    next5Month: '',
    next6MonthArr: []
  },
  onChange(e) {
    console.log(e)
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
          if (item1.date !== '' && item1.date >= this.data.today) {
            item1.state = true
            var typedate = e.currentTarget.dataset.year + checkedMonth + checkedDate + item1.date
          }
          tempA.push(item1)
          date1.push(typedate)
        })
        tempArr.push(tempA)
        appdate.push(date1)
      })
      let convert = appdate.flat();
      convert = convert.filter((item) => {
        return item !== undefined
      })
      this.setData({
        checked: !this.data.checked,
        thisMonthArr: tempArr,
        date: convert
      })
      console.log(this.data.date, "hhh")
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
      this.setData({
        checked: !this.data.checked,
        thisMonthArr: tempArr,
        date: []
      })
    }
    // console.log(this.data.thisMonthArr, "111")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化日历数据
    var nextM_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 1)); //下一个月
    var nextM2_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 2)); //下二个月
    var nextM3_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 3)); //下三个月
    var nextM4_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 4)); //下四个月
    var nextM5_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 5)); //下五个月

    var thisMonthArr = this.getDateArr(new Date());
    var nextMonthArr = this.getDateArr(nextM_start);
    var next2MonthArr = this.getDateArr(nextM2_start);
    var next3MonthArr = this.getDateArr(nextM3_start);
    var next4MonthArr = this.getDateArr(nextM4_start);
    var next5MonthArr = this.getDateArr(nextM5_start);
    this.setData({
      thisYear: new Date().getFullYear(),
      thisMonth: new Date().getMonth() + 1,
      thisMonthArr: thisMonthArr,

      nextYear: nextM_start.getFullYear(),
      nextMonth: nextM_start.getMonth() + 1,
      nextMonthArr: nextMonthArr,

      next2Year: nextM2_start.getFullYear(),
      next2Month: nextM2_start.getMonth() + 1,
      next2MonthArr: next2MonthArr,

      next3Year: nextM3_start.getFullYear(),
      next3Month: nextM3_start.getMonth() + 1,
      next3MonthArr: next3MonthArr,

      next4Year: nextM4_start.getFullYear(),
      next4Month: nextM4_start.getMonth() + 1,
      next4MonthArr: next4MonthArr,

      next5Year: nextM5_start.getFullYear(),
      next5Month: nextM5_start.getMonth() + 1,
      next5MonthArr: next5MonthArr,
    })
  },

  select_date: function (e) {
    console.log(e, "111")
    let date1 = this.data.date
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
    let data1 = e.currentTarget.dataset.year.toString() + checkedMonth + checkedDate
    //如果点击项为空百项目，不继续执行
    var date = e.currentTarget.dataset.date;
    if (date == '' || date <= 0) {
      return;
    }
    var index = e.currentTarget.dataset.key;
    var item = e.currentTarget.dataset.keyitem;
    var month = e.currentTarget.dataset.month;
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
      // 删除取消的日期
      var index = date1.indexOf(data1);
      console.log(index)
      date1.splice(index, 1)
      this.setData({
        date: date1
      })
      console.log(this.data.date,"取消")
    } else if (that[index][item].state == false) {
      that[index][item].state = true;
      console.log('选中')
      // 悬着的日期增加
      date1.push(data1)
      this.setData({
        date: date1
      })
      console.log(this.data.date, "hhh")
    }
    //console.log(that);
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

  //根据指定年月获得当月天数
  mGetDate(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  //根据指定年月获得当月日历数组
  getDateArr(date) {
    //根据指定年月

    //var myDate = new Date();
    var myDate = date;
    var thisYear = myDate.getFullYear(); //获取完整的年份
    var thisMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var firstDay = new Date(thisYear + ',' + thisMonth + ',01').getDay(); //本月第一天星期几,0表示星期天
    var nowDay = myDate.getDate(); // 今天是几号
    var monthNum = this.mGetDate(thisYear, thisMonth); //本月多少天

    var monthArray = [];
    var week = 1; //第一周
    var oneDay = '';
    var isToday = false;
    monthArray[week] = new Array(); //声明本周的二维数组

    //循环当月的每一天
    for (var k = 1; k <= monthNum; k++) {
      isToday = false;
      //组装当前日期
      oneDay = thisYear + ',' + thisMonth + ',' + k;
      var witchDay = new Date(oneDay).getDay(); //当前是星期几
      //如果当期循环日期为今天
      if (k == nowDay) {
        isToday = true;
      }
      //如果是第一周
      if (week == 1) {
        //判断当前日期是否是本月第一天
        if (k == 1) {
          //第一天之前的日期补为空
          for (var a = 0; a < firstDay; a++) {
            monthArray[week][a] = {
              date: '',
              isToday: isToday,
              state: false
            };
          }
        }
      }
      monthArray[week][witchDay] = {
        date: k,
        isToday: isToday,
        state: false
      };

      //如果已经是周六，切换到下一周
      if (witchDay == 6) {
        week++;
        monthArray[week] = new Array(); //声明本周的二维数组
      }
    }
    monthArray.splice(0, 1); //删除下标为0的空元素
    //console.log(monthArray);
    return monthArray;
  },

  // 提交日期
  onConfirm: async function (e) {

  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});