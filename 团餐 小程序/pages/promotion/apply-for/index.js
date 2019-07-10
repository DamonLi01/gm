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

    if (!formdata.name) {
      wx.showToast({
        title: '请输入您的姓名',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.tel) {
      wx.showToast({
        title: '请输入您的手机号',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.wechat) {
      wx.showToast({
        title: '请输入您的微信号',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.idcard) {
      wx.showToast({
        title: '请输入您的身份证号',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.infront) {
      wx.showToast({
        title: '请上传身份证正面',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.behind) {
      wx.showToast({
        title: '请上传身份证反面',
        icon: 'none',
        duration: 2000
      });
      return false;
    }


    wx.navigateTo({
      url: '/pages/promotion/index',
    })
  }
})