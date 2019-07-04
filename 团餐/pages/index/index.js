const app = getApp(),
  core = app.requirejs("core");

Page({
  data: {

  },
  onLoad() {
    var that = this;
    wx.getSetting({
      success: function(t) {
        console.log(t);

        if (!t.authSetting["scope.userInfo"]) {
          wx.reLaunch({
            url: '/pages/auth/index'
          })
        }
      }
    });
  },
  // getUserInfo(options) {
  //   var a = options.detail.iv,
  //     e = options.detail.encryptedData;
  //   console.log(options.detail.userInfo)
  //   if (options.detail.userInfo) wx.showLoading({
  //     title: '正在授权',
  //     mask: true
  //   })
  //   if (options.detail.userInfo) {
  //     app.getUserInfo(null, null, {
  //       iv: a,
  //       encryptedData: e
  //     });
  //   }
  // },

  onClose() {
    console.log(1)
  }
});