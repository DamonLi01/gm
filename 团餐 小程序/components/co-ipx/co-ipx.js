// components/co-ipx.js
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
    isIpx: false
  },
  lifetimes: {
    ready() {
      var that = this;
      wx.getSystemInfo({
        success: function(t) {
          "0" == t.model.indexOf("iPhone X") ? that.setData({
            isIpx: true
          }) : '';
        }
      })

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})