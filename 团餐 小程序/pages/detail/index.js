// pages/high-tea/detail/detail.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPopup: false,
    cartShow: false,
    qrShow: false,
    buttonText: "确定",
    disabled: false,
    imgUrls: [
      'http://img2.y01.cn/images/266/2019/07/Rtk4DzUJ55JJsdJ55l2JQup2T5j5ax.png',
      'http://img2.y01.cn/images/266/2019/06/ob9Za7hc7whNkr47RbBnoQiakCzwan.jpg',
      'http://img2.y01.cn/images/266/2019/07/Rtk4DzUJ55JJsdJ55l2JQup2T5j5ax.png'
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(255,255,255,0.596)',
    indicatorActiveColor: "#34D176",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    swiperheight: 0,
    isIpx: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(t) {
        "0" == t.model.indexOf("iPhone X") ? that.setData({
          isIpx: true
        }) : '';
      }
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
    this.setData({
      showPopup: false
    });
  },
  cartClose() {
    this.setData({
      cartShow: false
    });
  },
  imgHeight(event) {
    if (this.data.swiperheight == 0 || this.data.swiperheight > event.detail.height) {
      var swiperheight = event.detail.height;
      this.setData({
        swiperheight
      })
    }
  },
  specBtn(e) {
    this.setData({
      showPopup: true
    })
  },
  cart(e) {
    this.setData({
      cartShow: true
    });
  },
  call(e) {
    var tel = e.currentTarget.dataset.tel;
    if (tel) {
      wx.makePhoneCall({
        phoneNumber: tel
      })
    }

  },
  qrshow() {
    this.setData({
      qrShow: !false
    })
  },
  qrClose() {
    this.setData({
      qrShow: false
    })
  }
})