// pages/company/index.js
var app = getApp();
var core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formdata: {},
    show: false,
    disabled: true,
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
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


    if (formdata.name && formdata.cardno && formdata.bank && formdata.amount) {
      this.setData({
        formdata,
        disabled: false
      })

    } else {
      this.setData({
        formdata
      })
    }
  },
  onSelect(e) {
    var show = true;
    this.setData({
      show
    })
  },
  onClose() {
    var show = false;
    this.setData({
      show
    })
  },
  onConfirm(event) {
    const {
      value,
      index
    } = event.detail;
    var show = false;
    var formdata = Object.assign({
      bank: value
    }, this.data.formdata);

    this.setData({
      formdata,
      show
    })
  },
  submit() {

    var formdata = this.data.formdata;


    if (!formdata.name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.cardno) {
      wx.showToast({
        title: '请输入银行卡号',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.bank) {
      wx.showToast({
        title: '请选择银行',
        icon: 'none',
        duration: 2000
      });
      return false;
    } else if (!formdata.amount) {
      wx.showToast({
        title: '请输入提现金额',
        icon: 'none',
        duration: 2000
      });
      return false;
    }


  }
})