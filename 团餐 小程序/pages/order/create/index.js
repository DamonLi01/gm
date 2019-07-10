// pages/order/create/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    time: '选择配送时间',
    agreementType: false,
    receiptType: false,
    payType:false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    maxDate: new Date(new Date().getFullYear(), 11, 31).getTime(),
    formatter(type, value) {

      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      } else if (type === 'day') {
        return `${value}日`;
      } else if (type === 'hour') {
        return `${value}`;
      } else if (type === 'minute') {
        return `${ value }`
      }
      return value;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var isIpx = app.globalData.isIpx;
    this.setData({
      isIpx
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onClose() {
    var show = !this.data.show;

    this.setData({
      show
    });
  },
  onCancel() {
    var show = !this.data.show;
    var time = "选择配送时间";
    this.setData({
      show,
      time
    });
  },
  onChange(event) {

    var time = event.detail.getColumnValue(1) + event.detail.getColumnValue(2) + event.detail.getColumnValue(3) + ':' + event.detail.getColumnValue(4)
    this.setData({
      time
    });
  },
  onConfirm(event) {
    var date = new Date(event.detail);
    var month = date.getMonth() + 1;
    var day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
    var hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();

    console.log(month, day, hours, minutes)
    var show = !this.data.show;
    var time = month + '月' + day + '日' + hours + ':' + minutes;
    this.setData({
      show,
      time

    });
  },
  changeAgreement() {
    var agreementType = !this.data.agreementType;
    this.setData({
      agreementType

    });
  },
  receiptType() {
    var receiptType = !this.data.receiptType;
    this.setData({
      receiptType
    });
  },
  payType() {
    var payType = !this.data.payType;
    this.setData({
      payType
    });
  }
})