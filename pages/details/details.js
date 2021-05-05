// pages/details/details.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var city = require('../../lib/city');
Page({
  data: {
    start:-1,
    end:-1,
    pierce: false, //解决弹窗穿透问题
    objaddress: {}, //新增确认地址对象
    serviceobj: {}, //服务对象确认对象
    psy: undefined, //心理陪护时间判断
    arrid: 0, //判断是护工还是机构
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
        name: '张三',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压",
        Gender: "女",
        age: "66岁"
      },
      {
        name: '李四',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压",
        Gender: "男",
        age: "12岁"
      },
      {
        name: '王桂香',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压",
        Gender: "男",
        age: "65岁"
      },
      {
        name: '579',
        phone: "123456789",
        position: "武侯区新希望大厦",
        remarks: "糖尿病，高血压",
        Gender: "男",
        age: "66岁"
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
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/hugong.png'
      },
      {
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/hugong.png'
      },
      {
        img: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/hugong.png'
      },
    ],
    currentSwiper: 0,
    autoplay: true,
    arrpp: [{
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/bingren.png',
        title: "专业培训",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "病人陪护",
        pop: "以服务29.9万人",
        color: "#61CF8C"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/chanfu.png',
        title: "服务认证",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "产妇陪护",
        pop: "以服务29.9万人",
        color: "#60AAE5"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png',
        title: "安全保障",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "月嫂陪护",
        pop: "以服务29.9万人",
        color: "#FFB85D"
      },
      {
        imag: 'cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/yuesao.png',
        title: "专业培训",
        icon: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/qi.png",
        name: "病人陪护",
        pop: "以服务29.9万人",
        color: "#FFB85D"
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
    showpsychology: false, //心理陪护弹窗

    //-----------------定位

    value: '', //搜索输入框关键字
    cityData: {}, //所有城市列表
    hotCityData: [], //热门城市列表
    _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    showPy: '★',
    flag: true, //搜索页条件判断
    currentRegion: {
      province: '选择省',
      city: '选择城市',
      district: '选择区域',
      street: '选择街道'
    },
    latitude: '', //经纬度
    longitude: '', //经纬度
    centerData: {},
    nearList: [], //附近位置列表
    suggestion: [], //关键词搜索结果以列表形式展示
    selectedId: 0, //附近列表icon展示
    defaultKeyword: '房产小区', //搜索关键字
    keyword: '', //搜索关键字

    //--------------------护工机构时间详情变量

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
    //--------------- 心理咨询变量
    calendar: [],
    calendar111: [],
    hour: "", //获取当前小时
    year: '', //获取当前年份
    ipdyuan: false, //判断心理咨询是不是今天的时间
    width: 0, //心理咨询时间动态宽度
    currentIndex: 0, //年月日下标
    Yueartoday: "", //今天年月日
    currentTime: -1, //时间下标
    timeArr: [{
        "time": "08:00",
        "flag": false,
      },
      {
        "time": "09:00",
        "flag": false,
      },
      {
        "time": "10:00",
        "flag": false,
      },
      {
        "time": "11:00",
        "flag": false,
      },
      {
        "time": "12:00",
        "flag": false,
      },
      {
        "time": "13:00",
        "flag": false,
      },
      {
        "time": "14:00",
        "flag": false,
      },
      {
        "time": "15:00",
        "flag": false,
      },
      {
        "time": "16:00",
        "flag": false,
      },
      {
        "time": "17:00",
        "flag": false,
      },
      {
        "time": "18:00",
        "flag": false,
      },
      {
        "time": "19:00",
        "flag": false,
      },
      {
        "time": "20:00",
        "flag": false,
      },
      {
        "time": "21:00",
        "flag": false,
      },
      {
        "time": "22:00",
        "flag": false,
      },
      {
        "time": "23:00",
        "flag": false,
      },
    ]
  },
  // 轮播图
  swiperChange: function (e) {
    if (e.detail.source == "autoplay" || e.detail.source == "touch") {
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  },
  // ====================服务时间=====================
  //获取子组件传过来的时间
  getmyevent(e) {
    // console.log(e)
  },
  //根据指定年月获得当月天数
  mGetDate(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
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
  // ====================弹出框=======================
  // 填写预约信息
  onClickButton() {
    this.setData({
      show: true, //填写预约信息
      pierce: true //滚动穿透
    })
  },
  //请选择联系地址弹窗
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
      Shadow: true,
      value: ''
    })
    this.onLoad()
  },
  //新增地址确认
  Clickconfirm(e) {
    this.setData({
      showaddress: false,
      show: true,
      objaddress: e.currentTarget.dataset.item
    })
  },
  //服务对象确认
  Clickservice(e) {
    this.setData({
      showobj: false,
      show: true,
      serviceobj: e.currentTarget.dataset.item
    })
  },
  //新增服务对象
  goobj() {
    this.setData({
      showobj: true,
      show: false
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
    // if (this.data.psy === undefined) {
    //   this.setData({
    //     showtime: true,
    //     show: false,
    //     pierce: true //弹窗穿透
    //   })
    // } else if (this.data.psy === "1") {
    this.setData({
      showpsychology: true,
      show: false,
      pierce: true //弹窗穿透
    })
    // }
  },
  //点击遮罩层阴影关闭
  onClose() {
    this.setData({
      show: false,
      showaddress: false,
      keepaddress: false,
      Shadow: false,
      searchshow: false,
      showobj: false,
      showaddress: false,
      objdetails: false,
      showtime: false,
      pierce: false,
      showpsychology: false,
      value: ''
    })
  },
  //跳转搜索地图
  gosearch() {
    this.setData({
      searchshow: true,
      Shadow: false,
      flag: true
    })
  },
  // 详情文字展开收缩
  Negation() {
    this.setData({
      boxshow: !this.data.boxshow
    })
  },
  // 详情图片展开收缩
  gopicture() {
    this.setData({
      picture: !this.data.picture
    })
  },
  //去评价页
  goAllcomments() {
    wx.navigateTo({
      url: '/pages/Allcomments/Allcomments',
    })
  },
  // =============================地图定位=================================
  //选择城市
  selectCity: function (e) {
    let dataset = e.currentTarget.dataset.fullname;
    this.setData({
      pavalue: dataset
    })
    let _this = this;
    let keyword = e.currentTarget.dataset.fullname;
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
        let sug = [];
        for (let i = 0; i < res.data.length; i++) {
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
    // 双向绑定输入框值
    let name = e.currentTarget.dataset.modal;
    let value = e.detail.value;
    let dataMap = {};
    dataMap[name] = value;
    this.setData({
      value: dataMap.name
    })
    if (e.detail.value !== '') {
      let _this = this;
      let keyword = e.detail.value;
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
          let sug = [];
          for (let i = 0; i < res.data.length; i++) {
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
        flag: true,
      });
    }
  },
  // 自动获取地图下方附近列表
  nearby_search: function () {
    let self = this;
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
        let sug = [];
        for (let i = 0; i < res.data.length; i++) {
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
  //滑动选择城市
  tMove: function (e) {
    let y = e.touches[0].clientY,
      offsettop = e.currentTarget.offsetTop;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 12);
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
  //重新定位
  reload: function () {
    this.onLoad();
  },
  //地图标记点
  addMarker: function (data) {
    //console.log(data.title)
    let mks = [];
    mks.push({ // 获取返回结果，放到mks数组中
      title: data.title,
      id: data.id,
      addr: data.addr,
      province: data.province,
      city: data.city,
      district: data.district,
      latitude: data.latitude,
      longitude: data.longitude,
      iconPath: "cloud://cloud1-1g4t51tj57b7e1b7.636c-cloud1-1g4t51tj57b7e1b7-1305469223/img/my_marker.png", //图标路径
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
    let id = e.currentTarget.id;
    let name = e.currentTarget.dataset.name;
    for (let i = 0; i < this.data.nearList.length; i++) {
      if (i == id) {
        this.setData({
          selectedId: id,
          centerData: this.data.nearList[i],
          latitude: this.data.nearList[i].latitude,
          longitude: this.data.nearList[i].longitude,
        });
        this.addMarker(this.data.nearList[id]);
        return;
      }
    }
  },
  //点击搜索列表获取当前位置
  backfill: function (e) {
    let id = e.currentTarget.id;
    let name = e.currentTarget.dataset.name;
    for (let i = 0; i < this.data.suggestion.length; i++) {
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
      }
    }
  },
  // 确认地址
  selectedOk: function () {
    console.log(this.data.centerData)
  },
  //===========================心理咨询时间========================
  // 选择年月日
  select(e) {
    let curren = e.currentTarget.dataset.date
    let Arrcurren = e.currentTarget.dataset.date
    //为上半部分的点击事件
    if (curren === this.data.year) {
      this.setData({
        ipdyuan: false
      })
    }
    if (curren !== this.data.year) {
      this.setData({
        ipdyuan: true
      })
    }
    this.setData({
      currentIndex: e.currentTarget.dataset.index,
      Yueartoday: Arrcurren,
      currentTime:-1
    })
  },
  // 今天开始时间
  startTime(e) {
    let list = this.data.timeArr
    let time = e.currentTarget.dataset.time;
    let flag = e.currentTarget.dataset.flag;
    let index = e.currentTarget.dataset.index;
    if (this.data.ipdyuan === false) {
      if (time >= this.data.hour) {
        if(!wx.getStorageSync("time")){
          this.setData({
            start: index
          })
          let arr = []
          arr.push(index)
          wx.setStorageSync('time', arr)
        }else if(wx.getStorageSync("time")&&wx.getStorageSync("time").length==1){
          this.setData({
            end: index
          })
          let arr = []
          arr = wx.getStorageSync("time")
          arr.push(index)
          arr =  arr.filter((item, index, app) => {
            return app.indexOf(item) === index;
          })
          wx.setStorageSync('time',arr)
        }else if(wx.getStorageSync("time")&&wx.getStorageSync("time").length==2){
          this.setData({
            start: index,
            end:-1
          })
          let arr = []
          arr.push(index)
          wx.setStorageSync('time', arr)
        };
        list.slice(this.data.start,this.data.end)
        console.log(list)
      }
    }
    // else if(this.data.ipdyuan === true){
    //   this.setData({
    //     start: index
    //   })
    // }
  },
  // 获取当前小时
  seletime() {
    let ttimer = new Date().getHours()
    let time = ''
    if (ttimer < 10) {
      time = '0' + ttimer + ":" + "00".toString()
    } else {
      time = ttimer + ":" + "00".toString()
    }
    this.setData({
      hour: time,
    })
  },
  // 获取当前年月日
  seleyear() {
    let timestamp = Date.parse(new Date());
    let date = new Date(timestamp);
    //获取年份  
    let Y = date.getFullYear();
    //获取月份  
    let M = (date.getMonth() + 1 < 10 ? (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let timeyrar = Y + '-' + M + '-' + D
    this.setData({
      year: timeyrar
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   psy: options.psy
    // })
    // 判断是护工详情，还是机构详情或者心理
    // let idd = parseInt(options.id)
    // this.setData({
    //   arrid: idd
    // })
    //获取当前小时
    this.seletime()
    //获取当前年月日
    this.seleyear()
    //初始化日历数据
    let myDate = new Date()
    let timer = myDate.setDate(myDate.getDate() - 3)
    if (new Date().getDate() > 28) {
      var nextM_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 1)) // 下1个月
      var nextM2_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 2)) // 下2个月
      var nextM3_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 3)) // 下3个月
      var nextM4_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 4)) // 下4个月
      var nextM5_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 5)) // 下5个月
      var nextM6_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 6)) // 下6个月
      var nextM7_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 7)) // 下7个月
      var nextM8_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 8)) // 下8个月
      var nextM9_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 9)) // 下9个月
      var nextM10_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 10)) // 下10个月
      var nextM11_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 11)) // 下11个月
      var nextM12_start = new Date(new Date(new Date(timer).toLocaleDateString()).setMonth(new Date(timer).getMonth() + 12)) // 下12个月
    } else {
      var nextM_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 1)); //下1个月
      var nextM2_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 2)); //下1个月
      var nextM3_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 3)); //下1个月
      var nextM4_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 4)); //下1个月
      var nextM5_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 5)); //下1个月
      var nextM6_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 6)); //下1个月
      var nextM7_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 7)); //下1个月
      var nextM8_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 8)); //下1个月
      var nextM9_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 9)); //下1个月
      var nextM10_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 10)); //下1个月
      var nextM11_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 11)); //下1个月
      var nextM12_start = new Date(new Date(new Date().toLocaleDateString()).setMonth(new Date().getMonth() + 12)); //下1个月
    }

    let thisMonthArr = this.getDateArr(new Date());
    let nextMonthArr = this.getDateArr(nextM_start);
    let next2MonthArr = this.getDateArr(nextM2_start);
    let next3MonthArr = this.getDateArr(nextM3_start);
    let next4MonthArr = this.getDateArr(nextM4_start);
    let next5MonthArr = this.getDateArr(nextM5_start);
    let next6MonthArr = this.getDateArr(nextM6_start);
    let next7MonthArr = this.getDateArr(nextM7_start);
    let next8MonthArr = this.getDateArr(nextM8_start);
    let next9MonthArr = this.getDateArr(nextM9_start);
    let next10MonthArr = this.getDateArr(nextM10_start);
    let next11MonthArr = this.getDateArr(nextM11_start);
    let next12MonthArr = this.getDateArr(nextM12_start);
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

      next6Year: nextM6_start.getFullYear(),
      next6Month: nextM6_start.getMonth() + 1,
      next6MonthArr: next6MonthArr,

      next7Year: nextM7_start.getFullYear(),
      next7Month: nextM7_start.getMonth() + 1,
      next7MonthArr: next7MonthArr,

      next8Year: nextM8_start.getFullYear(),
      next8Month: nextM8_start.getMonth() + 1,
      next8MonthArr: next8MonthArr,

      next9Year: nextM9_start.getFullYear(),
      next9Month: nextM9_start.getMonth() + 1,
      next9MonthArr: next9MonthArr,

      next10Year: nextM10_start.getFullYear(),
      next10Month: nextM10_start.getMonth() + 1,
      next10MonthArr: next10MonthArr,

      next11Year: nextM11_start.getFullYear(),
      next11Month: nextM11_start.getMonth() + 1,
      next11MonthArr: next11MonthArr,

      next12Year: nextM12_start.getFullYear(),
      next12Month: nextM12_start.getMonth() + 1,
      next12MonthArr: next12MonthArr,
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
    // 心理咨询时间
    // var that = this;
    function getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate();
    }
    // 计算每月第一天是星期几
    function getFirstDayOfWeek(year, month) {
      return new Date(Date.UTC(year, month - 1, 1)).getDay();
    }
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const cur_date = date.getDate();
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    //利用构造函数创建对象
    function calendar(date, week) {
      this.date = cur_year + '-' + cur_month + '-' + date;
      if (date == cur_date) {
        this.week = "今天";
      } else if (date == cur_date + 1) {
        this.week = "明天";
      } else {
        this.week = '星期' + week;
      }
    }

    function calendar111(date, week) {
      if (cur_year != 12) {
        let cur_month111 = cur_month + 1
        this.date = cur_year + '-' + cur_month111 + '-' + date;
        this.week = '星期' + week;
      } else {
        let cur_month111 = cur_month + 1
        let cur_year111 = cur_year + 1
        this.date = cur_year111 + '-' + cur_month111 + '-' + date;
        this.week = '星期' + week;
      }
    }
    //当前月份的天数
    let monthLength = getThisMonthDays(cur_year, cur_month)
    //当前月份的第一天是星期几
    let week = getFirstDayOfWeek(cur_year, cur_month)
    let x = week;
    for (let i = 1; i <= monthLength; i++) {
      //当循环完一周后，初始化再次循环
      if (x > 6) {
        x = 0;
      }
      //利用构造函数创建对象
      self.data.calendar[i] = new calendar(i, [weeks_ch[x]][0])
      x++;
    }
    //下个月的天数
    var monthLength111 = getThisMonthDays(cur_year, cur_month + 1)
    //当前月份的第一天是星期几
    var week111 = getFirstDayOfWeek(cur_year, cur_month + 1)
    var y = week111;
    for (var i = 1; i <= monthLength111; i++) {
      //当循环完一周后，初始化再次循环
      if (y > 6) {
        y = 0;
      }
      //利用构造函数创建对象
      this.data.calendar111[i] = new calendar111(i, [weeks_ch[y]][0])
      y++;
    }
    this.data.calendar = this.data.calendar.concat(this.data.calendar111)
    //限制要渲染的日历数据天数为7天以内（用户体验）
    let flag = self.data.calendar.splice(cur_date, this.data.calendar.length - cur_date <= 7 ? this.data.calendar.length : 7).filter((item) => {
      return item
    })
    this.setData({
      calendar: flag
    })
    // console.log(this.data.calendar, "日历")
    //设置scroll-view的子容器的宽度
    this.setData({
      width: 186 * parseInt(this.data.calendar.length - cur_date <= 7 ? this.data.calendar.length : 7)
    })
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