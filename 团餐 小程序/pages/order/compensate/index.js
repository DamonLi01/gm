// pages/promotion/apply-for/index.js
var app = getApp();
var core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formdata: {}
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  chooseImg: function(e) {
    var formdata = Object.assign({}, this.data.formdata);

    var that = this;

    core.upload(res => {

      formdata[core.pdata(e).name] = res.url;

      that.setData({
        formdata
      })

    })
  },
  onChange(e) {
    var formdata = Object.assign({}, this.data.formdata);
    console.log(e.detail)
    formdata[core.pdata(e).name] = e.detail;
    this.setData({
      formdata
    })
  },
  submit() {

    var formdata = this.data.formdata;

    if (!formdata.cause) {
      wx.showToast({
        title: '请输入原因',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.amount) {
      wx.showToast({
        title: '请输入餐赔金额',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.proof) {
      wx.showToast({
        title: '请上传凭证',
        icon: 'none',
        duration: 2000
      });
      return false;
    }

  }
})