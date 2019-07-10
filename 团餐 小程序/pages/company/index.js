// pages/company/index.js
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


    if (!formdata.code) {
      wx.showToast({
        title: '请输入公司代码',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.name) {
      wx.showToast({
        title: '请输入您的姓名',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.dept) {
      wx.showToast({
        title: '请输入您的所属部门',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.title) {
      wx.showToast({
        title: '请输入您的职位',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.tel) {
      wx.showToast({
        title: '请输入您的电话号码',
        icon: 'none',
        duration: 2000
      });
      return false;
    }


  }
})