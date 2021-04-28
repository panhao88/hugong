// pages/orderTime/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    checked: false, //全选反选的按钮判断条件
    checkedNext: false, //全选反选的按钮判断条件
    checkedNexttwo: false, //全选反选的按钮判断条件
    checkedNextthree: false, //全选反选的按钮判断条件
    checkedNextfour: false, //全选反选的按钮判断条件
    checkedNextfive: false, //全选反选的按钮判断条件
    date: [], //存储所有选择的时间数组
    thisYear: '', //当前年
    thisMonth: '', //当前月
    thisMonthArr: [], //当前月号数
    today: new Date().getDate(), //获取今天号数数组
    nextYear: '', //下一个月年
    nextMonth: '', //下一个月
    nextMonthArr: [], //下一月号数
    next2Year: '', //下二月年
    next2Month: '', //下二月
    next2MonthArr: [], //下二月号数数组
    next3Year: '', //下三月年
    next3Month: '', //下三月
    next3MonthArr: [], //下三月数组
    next4Year: '', //下四月年
    next4Month: '', //下四月
    next4MonthArr: [], //下四月号数数组
    next5Year: '', //下五月年
    next5Month: '', //下五月
    next6MonthArr: [], //下五月号数数组
  },
  ppp(){
    this.setData({
      show:true
    })
  },
  getmyevent(e){
    console.log(e)
  },
   //根据指定年月获得当月日历数组
   getDateArr(date) {
    //根据指定年月
    let myDate = date;
    let thisYear = myDate.getFullYear(); //获取完整的年份
    let thisMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    let firstDay = new Date(thisYear + ',' + thisMonth + ',01').getDay(); //本月第一天星期几,0表示星期天
    let nowDay = myDate.getDate(); // 今天是几号
    let monthNum = this.mGetDate(thisYear, thisMonth); //本月多少天

    let monthArray = [];
    let week = 1; //第一周
    let oneDay = '';
    let isToday = false;
    monthArray[week] = new Array(); //声明本周的二维数组

    //循环当月的每一天
    for (let k = 1; k <= monthNum; k++) {
      isToday = false;
      //组装当前日期
      oneDay = thisYear + ',' + thisMonth + ',' + k;
      let witchDay = new Date(oneDay).getDay(); //当前是星期几
      //如果当期循环日期为今天
      if (k == nowDay) {
        isToday = true;
      }
      //如果是第一周
      if (week == 1) {
        //判断当前日期是否是本月第一天
        if (k == 1) {
          //第一天之前的日期补为空
          for (let a = 0; a < firstDay; a++) {
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
  //根据指定年月获得当月天数
  mGetDate(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //初始化日历数据
     let nextM_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 1)); //下一个月
     let nextM2_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 2)); //下二个月
     let nextM3_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 3)); //下三个月
     let nextM4_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 4)); //下四个月
     let nextM5_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 5)); //下五个月
 
     let thisMonthArr = this.getDateArr(new Date());
     let nextMonthArr = this.getDateArr(nextM_start);
     let next2MonthArr = this.getDateArr(nextM2_start);
     let next3MonthArr = this.getDateArr(nextM3_start);
     let next4MonthArr = this.getDateArr(nextM4_start);
     let next5MonthArr = this.getDateArr(nextM5_start);
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
  }
})