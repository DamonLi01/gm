// pages/promotion/apply-for/index.js
import areaList from "./address.js";
// console.log(areaList)
var app = getApp();
var core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formdata: {},
    show: false,
    areaList: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      areaList: areaList
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

    console.log(formdata)
    if (!formdata.name) {
      wx.showToast({
        title: '请输入收货人',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.tel) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.area) {
      wx.showToast({
        title: '请选择省市区',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.address) {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none',
        duration: 2000
      });
      return false;
    }

  },
  onClose() {
    this.setData({
      show: false
    })
  },
  onArea() {
    this.setData({
      show: true
    })
  },
  onConfirm(e) {

    var formdata = this.data.formdata;

    formdata['area'] = e.detail.values[0].name + " " + e.detail.values[1].name + " " + e.detail.values[2].name;
    this.setData({
      formdata,
      show: false
    })


  },
  onSwitch() {
    var formdata = this.data.formdata;

    formdata['setDefault'] = !formdata['setDefault'];
    this.setData({
      formdata
    })
  },
  chooseAddress() {
    var that = this;
    wx.chooseAddress({
      success(res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)


        var formdata = {};
        formdata['name'] = res.userName;
        formdata['address'] = res.detailInfo;
        formdata['tel'] = res.telNumber;
        formdata['area'] = res.provinceName + " " + res.cityName + " " + res.countyName;


        that.setData({
          formdata
        })



      }
    })

  },
  delAddress(){

    console.log('delAddress')
  }
})