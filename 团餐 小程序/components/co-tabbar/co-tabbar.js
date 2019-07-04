// components/com-tabbar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBarArr: [{
        text: '团餐',
        icon: '/static/images/tabbar/group-danner.png',
        activeIcon: '/static/images/tabbar/group-danner.png',
        info: '2',
        url: '/pages/index/index'
      },
      {
        text: '下午茶',
        icon: '/static/images/tabbar/high-tea.png',
        activeIcon: '/static/images/tabbar/high-tea.png',
        info: '2',
        url: '/pages/high-tea/index'
      },
      {
        text: '订单',
        icon: '/static/images/tabbar/order.png',
        activeIcon: '/static/images/tabbar/order.png',
        info: '2',
        url: '/pages/logs/logs'
      },
      {
        text: '个人中心',
        icon: '/static/images/tabbar/member.png',
        activeIcon: '/static/images/tabbar/member.png',
        info: '2',
        url: '/pages/logs/logs'
      }
    ],
    active: null,
    activeColor: '#333333',
    inactiveColor: '#999999'
  },
  lifetimes: {
    ready() {

      this.setData({
        active: app.globalData.active
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e.detail)
      var that = this;
      var url = that.data.tabBarArr[e.detail]['url'];

      app.globalData.active = e.detail;
      wx.reLaunch({
        url: url,
      });
      // that.setData({
      //   active: e.detail
      // });
    }
  }
})