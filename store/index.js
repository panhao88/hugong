export default{
  // 定义全局用{{$.方法名}}
  //使用了解全局看index组件

  // 改变数据定义一个方法按钮用this
  //use:['name'],
  //this.store.data.name ='我是改变后的数据'
  data:{
    userid:''
  }
}
// {
//   <view wx:if="{{flag === true}}">
//   <scroll-view scroll-y="true" scroll-into-view="{{scrollTopId}}"
//     scroll-with-animation="true" enable-back-to-top="true">
//     <!-- 热门城市 -->
//     <view class='item'>
//       <view class='fullname'>
//         <image src="../../img/mipmap-mdpi/dingwei1.png" class="img-dingwei"></image> 当前定位城市：{{currentRegion.city}}
//       </view>
//       <view class='py' id="hot">热门城市</view>
//       <view class="fullname hot-city" wx:for="{{hotCityData}}" wx:key="key" data-fullname="{{item.fullname}}"
//         data-lat="{{item.location.lat}}" data-lng="{{item.location.lng}}" bindtap='selectCity'>{{item.fullname}}
//       </view>
//     </view>
//     <!-- 全部 -->
//     <view class='item' wx:for="{{cityData}}" wx:for-index="idx" wx:for-item="group" wx:key="key">
//       <view class='py' id="{{idx}}">{{idx}}</view>
//       <view class="fullname" wx:for="{{group}}" wx:key="key" data-fullname="{{item.fullname}}"
//         data-lat="{{item.location.lat}}" data-lng="{{item.location.lng}}" bindtap='selectCity'>{{item.fullname}}
//       </view>
//     </view>
//   </scroll-view>
//   <!-- 首字母 -->
//   <view class='city-py' bindtouchstart="tStart" bindtouchend="tEnd" catchtouchmove="tMove">
//     <view wx:for="{{_py}}" wx:key="key" bindtouchstart="getPy" bindtouchend="setPy" id="{{item}}">
//       <view class="{{item === showPy ? 'colour':''}}">
//         {{item === 'hot' ? "" : item}}
//       </view>
//     </view>
//   </view>
// </view>
// }
// {
//   <view wx:if="{{flag === false}}">
//   <view class="add-list-box">
//     <scroll-view class="add-list">
//       <view class="add-item" wx:for="{{suggestion}}" wx:key="index">
//         <!--绑定回填事件-->
//         <view bindtap="backfill" id="{{index}}" data-name="{{item.title}}">
//           <!--根据需求渲染相应数据-->
//           <!--渲染地址title-->
//           <view class="title">{{item.title}}</view>
//           <!--渲染详细地址-->
//           <view class="add">{{item.addr}}</view>
//         </view>
//       </view>
//     </scroll-view>
//   </view>
// </view>
// }