// pages/details/details.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
var city = require('../../lib/city');
Page({
  data: {
    arr:[
      {
        name:"医院陪护",
        id:1
      },
      {
        name:"医院陪护",
        id:2
      },
      {
        name:"医院陪护",
        id:3
      },
      {
        name:"医院陪护",
        id:4
      },
      {
        name:"医院陪护",
        id:5
      },
      {
        name:"医院陪护",
        id:6
      },
    ],
   show:false, //立即预约弹窗
   Shadow:false,//地图遮罩层
   showaddress:false, //新增地址
   keepaddress:false, //联系地址弹窗
   Serviceaddress:false ,//服务地址弹窗
   searchshow:false,//搜索地图弹窗
   cityData: {},
   hotCityData: [],
   _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
   cityListShow: false,
   hidden: true,
   showPy: '★',
  //  map数据
  addListShow: false,
  chooseCity: false,
  regionData: {}, 
  currentRegion: {
    province: '选择城市',
    city: '选择城市',
    district: '选择城市',
    street:'选择街道'
  },
  latitude: '',
  longitude: '',
  centerData: {},
  nearList: [],
  suggestion: [],
  selectedId: 0,
  defaultKeyword: '房产小区',
  keyword: ''
  },
  //选择城市
  selectCity: function(e) {
    var dataset = e.currentTarget.dataset;
    this.setData({
        citySelected: dataset.fullname,
        cityListShow: false,
        inputListShow: false,
        historyListShow: true,
        location: {
            latitude: dataset.lat,
            longitude: dataset.lng
        }
    });
},
    //获取文字信息
    getPy: function(e) {
      this.setData({
          hidden: false,
          showPy: e.target.id,
      })
  },

  setPy: function(e) {
      this.setData({
          hidden: true,
          scrollTopId: this.data.showPy
      })
  },
    //触发全部开始选择
    tStart: function() {
      this.setData({
          hidden: false
      })
  },

  //触发结束选择
  tEnd: function() {
      this.setData({
          hidden: true,
          scrollTopId: this.data.showPy
      })
  },
      //滑动选择城市
      tMove: function(e) {
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
  // 弹出层展开影藏
  onClickButton(){
    this.setData({
      // show:true
      Shadow:true
    })
  },
  //点击遮罩层阴影关闭
  onClose(){
    this.setData({
      show:false,
      showaddress:false,
      keepaddress:false,
      Serviceaddress:false,
      Shadow:false
    })
  },
  //新增地址弹窗
  goaddress(){
    this.setData({
      showaddress:true,
      show:false
    })
  },
  // 保存地址弹窗
  Newaddress(){
    this.setData({
      keepaddress:true,
      showaddress:false
    })
  },
  //跳转搜索地图
  gosearch(){
    this.setData({
      searchshow:true,
      Shadow:false
    })
  },
   //监听拖动地图，拖动结束根据中心点更新页面
   mapChange: function (e) {
    let self = this;
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')){
      self.mapCtx.getCenterLocation({
        success: function (res) {
          //console.log(res)
          self.setData({
            nearList:[],
            latitude: res.latitude,
            longitude: res.longitude,
          })
          self.nearby_search();
        }
      })
    } 
  },
    //整理目前选择省市区的省市区列表
  getRegionData: function () {
    let self = this;
    //调用获取城市列表接口
    qqmapsdk.getCityList({
      success: function (res) {//成功后的回调
        //console.log(res)
        let provinceArr = res.result[0];
        let cityArr = [];
        let districtArr = [];
        for (var i = 0; i < provinceArr.length; i++) {
          var name = provinceArr[i].fullname;
          if (self.data.currentRegion.province == name) {
            if (name == '北京市' || name == '天津市' || name == '上海市' || name == '重庆市') {
              cityArr.push(provinceArr[i])
            } else {
              qqmapsdk.getDistrictByCityId({
                // 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
                id: provinceArr[i].id,
                success: function (res) {//成功后的回调
                  //console.log(res);
                  cityArr = res.result[0];
                  self.setData({
                    regionData: {
                      province: provinceArr,
                      city: cityArr,
                      district: districtArr,
                    }
                  })
                },
                fail: function (error) {
                  //console.error(error);
                },
                complete: function (res) {
                  //console.log(res);
                }
              });
            }
          }
        }
        for (var i = 0; i < res.result[1].length; i++) {
          var name = res.result[1][i].fullname;
          if (self.data.currentRegion.city == name) {
            qqmapsdk.getDistrictByCityId({
              // 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
              id: res.result[1][i].id,
              success: function (res) {//成功后的回调
                //console.log(res);
                districtArr = res.result[0];
                self.setData({
                  regionData: {
                    province: provinceArr,
                    city: cityArr,
                    district: districtArr,
                  }
                })
              },
              fail: function (error) {
                //console.error(error);
              },
              complete: function (res) {
                //console.log(res);
              }
            });
          }
        }
      },
      fail: function (error) {
        //console.error(error);
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },
  //请选择服务地址
  golocation(){
    this.setData({
      Serviceaddress:true,
      keepaddress:false
    })
    var that=this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          marks: [
            {
              latitude: res.latitude,
              longitude: res.longitude,
              title: "嘉华光明校区",
              iconPath: "../../image/定位.png",
              width: 30,
              height: 30
            }
          ]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self =this;
    self.mapCtx = wx.createMapContext('myMap')
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'W57BZ-JDB6X-XPA4H-Z76MI-73FF2-24BT4'
    });
    // wx.showLoading({
    //   title: '加载中'
    // });
    //定位
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        // console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
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
            historyList: wx.getStorageSync("historyList").length > 0 ? wx.getStorageSync("historyList") : []
        });

        self.setData({
            // citySelected: myCity,
            // city: myCity,
            latitude: wx.getStorageSync("latitude"),
            longitude: wx.getStorageSync("longitude"),
            sname: "我的位置",
            saddress: '上海市浦东新区'
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
        street:data.title,
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
  //显示搜索列表
  showAddList: function () {
    this.setData({
      addListShow: true
    })
  },
  // 根据关键词搜索附近位置
  nearby_search: function () {
    var self = this;
    wx.hideLoading();
    // wx.showLoading({
    //   title: '加载中'
    // });
    // 调用接口
    qqmapsdk.search({
      keyword: self.data.keyword,  //搜索关键词
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
          suggestion: sug
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
  //根据关键词搜索匹配位置
  getsuggest: function (e) {
    var _this = this;
    var keyword = e.detail.value;
    _this.setData({
      addListShow: true
    })
    //调用关键词提示接口
    qqmapsdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: keyword, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      location: _this.data.latitude + ',' + _this.data.longitude,
      page_size: 20,
      page_index: 1,
      //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
      success: function (res) {//搜索成功后的回调
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
          keyword: keyword
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
  /**
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