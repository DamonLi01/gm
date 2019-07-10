// pages/order/index.js
var app = getApp();
var core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    console.log('onReachBottomDistance')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  activeChange(e) {
    var active = Object.assign({}, this.data.active);
    console.log(e.detail)
    active[core.pdata(e).name] = e.detail;
    this.setData({
      active
    })

  },
  jump(e) {

    if (e.currentTarget.dataset.url) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  },
})