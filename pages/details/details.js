// pages/details/details.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var city = require('../../lib/city');
Page({
  data: {
    arrid:0,
    boxshow: true, //展开收缩
    picture: true, //图文
    arrli: [{
        name: "医院陪护",
        id: 1
      },
      {
        name: "康养院陪护",
        id: 2
      },
      {
        name: "居家陪护",
        id: 3
      },
      {
        name: "心理陪护",
        id: 3
      },
    ],
    items: [{
        name: '王桂香',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压"
      },
      {
        name: '王桂香',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压"
      },
      {
        name: '王桂香',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压"
      },
    ],
    objdetail: [{
        name: '王桂香',
        age: 68,
        Gender: "女",
        remarks: "需要做饭，糖尿病"
      },
      {
        name: '王桂香',
        age: 68,
        Gender: "女",
        remarks: "需要做饭，糖尿病"
      }
    ],
    startX: 0, //开始坐标
    startY: 0,
    arr: [{
        name: "老人陪护",
        id: 1
      },
      {
        name: "病人陪护",
        id: 2
      },
      {
        name: "月嫂陪护",
        id: 3
      },
      {
        name: "产妇陪护",
        id: 4
      },
    ],
    list: [{
        img: '../../img/mipmap-mdpi/hugong.png'
      },
      {
        img: '../../img/mipmap-mdpi/hugong.png'
      },
      {
        img: '../../img/mipmap-mdpi/hugong.png'
      },
    ],
    arrpp: [{
      imag: '../../img/mipmap-mdpi/bingren.png',
      title:"专业培训",
      icon:"../../img/mipmap-mdpi/qi.png",
      name:"病人陪护",
      pop:"以服务29.9万人",
      color:"#61CF8C"
    },
    {
      imag: '../../img/mipmap-mdpi/chanfu.png',
      title:"服务认证",
      icon:"../../img/mipmap-mdpi/qi.png",
      name:"产妇陪护",
      pop:"以服务29.9万人",
      color:"#60AAE5"
    },
    {
      imag: '../../img/mipmap-mdpi/yuesao.png',
      title:"安全保障",
      icon:"../../img/mipmap-mdpi/qi.png",
      name:"月嫂陪护",
      pop:"以服务29.9万人",
      color:"#FFB85D"
    },
    {
      imag: '../../img/mipmap-mdpi/yuesao.png',
      title:"专业培训",
      icon:"../../img/mipmap-mdpi/qi.png",
      name:"病人陪护",
      pop:"以服务29.9万人",
      color:"#FFB85D"
    },
  ],
    pavalue: '', //搜索框输入内容
    radio: '1', //男女选择单选框
    colo: 0, //服务类型选择器 
    show: false, //立即预约弹窗
    Shadow: false, //地图遮罩层
    searchshow: false, //搜索地图弹窗
    showobj: false, //服务对象
    showtime: false, //选择服务对象时间
    showaddress: false, //新增地址
    objdetails: false, //服务对象详情
    keepaddress: false, //联系地址弹窗
    Serviceaddress: false, //服务地址弹窗
    cityData: {},
    hotCityData: [],
    _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    showPy: '★',
    flag: true, //搜索条件判断
    //  map数据
    chooseCity: false,
    regionData: {},
    currentRegion: {
      province: '选择城市',
      city: '选择城市',
      district: '选择城市',
      street: '选择街道'
    },
    latitude: '',
    longitude: '',
    centerData: {},
    nearList: [],
    suggestion: [], //搜索推荐
    selectedId: 0,
    defaultKeyword: '房产小区',
    keyword: '',
    checked: false, //时间
    checkedNext: false,
    checkedNexttwo: false,
    checkedNextthree: false,
    checkedNextfour: false,
    checkedNextfive: false,
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
    next6MonthArr: [],
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
  // 弹出预约信息
  onClickButton() {
    this.setData({
      show: true,
    })
  },
  //选择联系地址弹窗
  goaddress() {
    this.setData({
      showaddress: true,
      show: false
    })
  },
  // 新增联系地址弹窗
  Newaddress() {
    this.setData({
      keepaddress: true,
      showaddress: false
    })
  },
  //立即预约支付
  goConfirmorder() {
    wx.navigateTo({
      url: '/pages/Confirmorder/Confirmorder',
    })
  },
  //男女选择
  onChange(e) {
    let rad = e.detail
    this.setData({
      radio: rad
    })
  },
  //请选择服务地址
  golocation() {
    this.setData({
      Shadow: true,
      keepaddress: false
    })
  },
  //返回地图列表
  preturn() {
    this.setData({
      searchshow: false,
      Shadow: true
    })
  },
  //新增服务对象
  goobj() {
    this.setData({
      showobj: true,
      show:false
    })
  },
  //新增服务对象详情
  goobjdetail() {
    this.setData({
      showobj: false,
      objdetails: true,
    })
  },
  //选择服务时间
  gotime() {
    this.setData({
      showtime: true,
      show: false
    })
  },
  //点击遮罩层阴影关闭
  onClose() {
    this.setData({
      show: false,
      showaddress: false,
      keepaddress: false,
      Serviceaddress: false,
      Shadow: false,
      searchshow: false,
      showobj: false,
      showaddress: false,
      objdetails: false,
      showtime: false
    })
  },
  //跳转搜索地图
  gosearch() {
    this.setData({
      searchshow: true,
      Shadow: false
    })
  },
  // 文字展开收缩
  Negation() {
    this.setData({
      boxshow: !this.data.boxshow
    })
  },
  // 图片展开收缩
  gopicture() {
    this.setData({
      picture: !this.data.picture
    })
  },
  //选择城市
  selectCity: function (e) {
    var dataset = e.currentTarget.dataset.fullname;
    this.setData({
      pavalue: dataset
    })
    var _this = this;
    var keyword = e.currentTarget.dataset.fullname;
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: keyword, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      location: _this.data.latitude + ',' + _this.data.longitude,
      page_size: 20,
      page_index: 1,
      //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
      success: function (res) { //搜索成功后的回调
        //console.log(res);
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            province: res.data[i].province,
            city: res.data[i].city,
            district: res.data[i].district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          suggestion: sug,
          nearList: sug,
          keyword: keyword,
          flag: false
        });
      },
      fail: function (error) {
        //console.error(error);
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },
  //根据关键词搜索匹配位置
  getsuggest: function (e) {
    if (e.detail !== '') {
      var _this = this;
      var keyword = e.detail;
      _this.setData({
        flag: false
      })
      //调用关键词提示接口
      qqmapsdk.getSuggestion({
        //获取输入框值并设置keyword参数
        keyword: keyword, //用户输入的关键词，可设置固定值,如keyword:'KFC'
        location: _this.data.latitude + ',' + _this.data.longitude,
        page_size: 20,
        page_index: 1,
        //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
        success: function (res) { //搜索成功后的回调
          //console.log(res);
          var sug = [];
          for (var i = 0; i < res.data.length; i++) {
            sug.push({ // 获取返回结果，放到sug数组中
              title: res.data[i].title,
              id: res.data[i].id,
              addr: res.data[i].address,
              province: res.data[i].province,
              city: res.data[i].city,
              district: res.data[i].district,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng
            });
          }
          _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
            suggestion: sug,
            nearList: sug,
            keyword: keyword,
          });
        },
        fail: function (error) {
          //console.error(error);
        },
        complete: function (res) {
          //console.log(res);
        }
      });
    } else {
      this.setData({
        flag: true
      });
    }
  },
  // 根据关键词搜索附近位置
  nearby_search: function () {
    var self = this;
    wx.hideLoading();
    // 调用接口
    qqmapsdk.search({
      keyword: self.data.keyword, //搜索关键词
      //boundary: 'nearby(' + self.data.latitude + ', ' + self.data.longitude + ', 1000, 16)',
      location: self.data.latitude + ',' + self.data.longitude,
      page_size: 20,
      page_index: 1,
      success: function (res) { //搜索成功后的回调
        //console.log(res.data)
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            id: res.data[i].id,
            addr: res.data[i].address,
            province: res.data[i].ad_info.province,
            city: res.data[i].ad_info.city,
            district: res.data[i].ad_info.district,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        self.setData({
          selectedId: 0,
          centerData: sug[0],
          nearList: sug,
        })
        self.addMarker(sug[0]);
      },
      fail: function (res) {
        //console.log(res);
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },
  //点击选择搜索结果
  backfill: function (e) {
    var id = e.currentTarget.id;
    let name = e.currentTarget.dataset.name;
    for (var i = 0; i < this.data.suggestion.length; i++) {
      if (i == id) {
        //console.log(this.data.suggestion[i])
        this.setData({
          centerData: this.data.suggestion[i],
          searchshow: false,
          Shadow: true,
          pavalue: '',
          flag: true,
          latitude: this.data.suggestion[i].latitude,
          longitude: this.data.suggestion[i].longitude
        });
        this.nearby_search();
        return;
        //console.log(this.data.centerData)
      }
    }
  },
  //获取文字信息
  getPy: function (e) {
    this.setData({
      showPy: e.target.id,
    })
  },

  setPy: function (e) {
    this.setData({
      scrollTopId: this.data.showPy
    })
  },
  //评价
  goAllcomments(){
    wx.navigateTo({
      url: '/pages/Allcomments/Allcomments',
    })
  },
  //滑动选择城市
  tMove: function (e) {
    var y = e.touches[0].clientY,
      offsettop = e.currentTarget.offsetTop;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      var num = parseInt((y - offsettop) / 12);
      this.setData({
        showPy: this.data._py[num]
      })
    };
  },

  //触发全部开始选择
  tStart: function () {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd: function () {
    this.setData({
      scrollTopId: this.data.showPy
    })
  },
  //监听拖动地图，拖动结束根据中心点更新页面
  mapChange: function (e) {
    let self = this;
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      self.mapCtx.getCenterLocation({
        success: function (res) {
          //console.log(res)
          self.setData({
            nearList: [],
            latitude: res.latitude,
            longitude: res.longitude,
          })
          self.nearby_search();
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = parseInt(options.id)
    this.setData({
      arrid:id
    })
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
    let self = this;
    self.mapCtx = wx.createMapContext('myMap')
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'W57BZ-JDB6X-XPA4H-Z76MI-73FF2-24BT4'
    });
    //定位
    wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          //你地址解析
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: function (res) {
              // console.log(res)
              self.setData({
                latitude: latitude,
                longitude: longitude,
                currentRegion: res.result.address_component,
                keyword: self.data.defaultKeyword
              })
              // 调用接口
              self.nearby_search();
            },
          });
        },
        fail(err) {
          //console.log(err)
          wx.hideLoading({});
          wx.showToast({
            title: '定位失败',
            icon: 'none',
            duration: 1500
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1500)
        }
      }),
      self.setData({
        latitude: wx.getStorageSync("latitude"),
        longitude: wx.getStorageSync("longitude"),
      });

    self.setData({
      cityData: city.all,
      hotCityData: city.hot
    });
  },
  //重新定位
  reload: function () {
    this.onLoad();
  },
  //地图标记点
  addMarker: function (data) {
    //console.log(data.title)
    var mks = [];
    mks.push({ // 获取返回结果，放到mks数组中
      title: data.title,
      id: data.id,
      addr: data.addr,
      province: data.province,
      city: data.city,
      district: data.district,
      latitude: data.latitude,
      longitude: data.longitude,
      iconPath: "../../img/mipmap-mdpi/my_marker.png", //图标路径
      width: 25,
      height: 25
    })
    this.setData({ //设置markers属性，将搜索结果显示在地图中
      markers: mks,
      currentRegion: {
        street: data.title,
        province: data.province,
        city: data.city,
        district: data.district,
      }
    })
    wx.hideLoading({});
  },
  //点击选择地图下方列表某项
  chooseCenter: function (e) {
    var id = e.currentTarget.id;
    let name = e.currentTarget.dataset.name;
    for (var i = 0; i < this.data.nearList.length; i++) {
      if (i == id) {
        this.setData({
          selectedId: id,
          centerData: this.data.nearList[i],
          latitude: this.data.nearList[i].latitude,
          longitude: this.data.nearList[i].longitude,
        });
        this.addMarker(this.data.nearList[id]);
        return;
        //console.log(this.data.centerData)
      }
    }
  },
  selectedOk: function () {
    console.log(this.data.centerData)
  },
  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self = this;
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})