/**
 * qjy   2019年6月14日15:00:48
 * 此页面为授权页面,主要是做强制授权操作
 * 并且处理多商户的id缓存逻辑
 * 1.如果带参数qr_merchid进入,绑定商城,并且把qr_merchid存入缓存
 * 2.如果带merchid进入,进入该商城,把merchid存入缓存
 * 3.清理缓存,如果参数中带clean=1,则把缓存清空,进入主商城或者自身绑定的商城
 * 
 * 注意:缓存中的merchid只负责展示具体的某个多商家商城,如果是0或者缓存是空,则进入主商城
 * 绑定商城操作,有两种:
 * 1.手动,调用后台方法:"index/bindMerch"
 * 2.自动,商城下单,自动绑定该商城
 */


// pages/index/auth.js
var app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制按钮延迟生效
    modelShow: !0,
    options: {},
    /**
     * [urlSuffix]
     * url后缀,当进入授权页面
     * 检测是否存在传入的参数
     * 如果存在,拼接进该字符串
     * 然后传入下一个页面
     */
    urlSuffix: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    options = options || {};
    var that = this;
    that.getShop();

  },

  // 点击确定授权触发
  userinfo: function(evt) {
    console.log(evt)
    var that = this;
    // 判断是否点击了授权  true未授权,false授权成功
    if (!evt.detail.userInfo) {
      //未授权
      return false;
    } else {
      // 授权成功
      core.loading('登陆中...');
      if (evt.detail.userInfo) app.getUserInfo(function(res) {
        if (res.id) {
          wx.reLaunch({
            url: '/pages/index/index'
          })

        }
        core.hideLoading();
      });
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  getShop() {

    var that = this;
    core.get("cacheset", {}, function(res) {
      if (res.error == 0) {
        that.setData({
          modelShow: !1,
          options: res.sysset
        })
      }
    })
  }
})