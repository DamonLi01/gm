// pages/high-tea/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    setHeight: 0,
    standard: [
      [{
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        }
      ],
      [{
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        },
        {
          imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
          title: '抹茶甜点套餐',
          price: '219'
        }
      ]
    ],
    customize: [{
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      },
      {
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      },
      {
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      },
      {
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      },
      {
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      },
      {
        imgUrl: 'http://img2.y01.cn/images/266/2019/07/pWrh0H33b3hKm7YzkU13Y14sMb03Ss.png',
        title: '抹茶甜点套餐',
        price: '219'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(this.data.standard)
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
    // this.setHeight();

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
  url(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  imgHeight(event) {
    if (this.data.swiperheight == 0 || this.data.swiperheight < event.detail.height) {
      var swiperheight = event.detail.height;
      this.setData({
        swiperheight
      })
    }
  },
  setHeight(event) {
    var that = this;
    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#setHeight').boundingClientRect()
    query.exec(function(res) {
      //res就是 所有标签为setHeight的元素的信息 的数组
      console.log(res);
      //取高度
      var setHeight = res[0].height;
      that.setData({
        setHeight
      })
    })
  }
})