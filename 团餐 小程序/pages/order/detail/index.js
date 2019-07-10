// pages/order/create/index.js
var app = getApp();
const ctx = wx.createCanvasContext('shareImg');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
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
  onShow() {
    this.getData();
  },
  getData() {


    this.drawTitle('订单详情');
    this.drawOrder('抹茶甜点标准套餐', 'x1', '¥489', 130);
    this.drawOrderItem('抹茶甜点标准套餐', 'x1', '¥489', '1盒*6个', 190);
    this.drawOrderItem('抹茶甜点标准套餐', 'x1', '¥489', '1盒*6个', 240);
    this.drawOrderItem('抹茶甜点标准套餐', 'x1', '¥489', '1盒*6个', 290);
    this.drawOrderInfo('合计', '¥489', 360);
    this.drawOrderInfo('发票费用', '¥489', 380);
    this.drawOrderInfo('首款', '¥489', 400);
    this.drawOrderInfo('尾款', '¥489', 420);
    this.drawOrderTotal('共38件商品 实付款 ¥219', 480);

    this.drawDelivery('配送信息', [{
      label: '配送时间',
      value: '7月4日 14:00'
    }, {
      label: '配送地址',
      value: '熊娜 13627819234',
      value2: '广州市天河区珠吉路4号东泰商务厦4楼D6室'
    }], 520);
    this.drawOrderInfo2('订单信息', [{
      label: '支付方式',
      value: '首尾款支付'
    }, {
      label: '发票抬头',
      value: '广州广脉科技有限公司'
    }, {
      label: '发票税号',
      value: '86856456367456'
    }, {
      label: '订单编号',
      value: '456788909867556'
    }, {
      label: '下单时间',
      value: '2019-07-03 09:23:15'
    }], 620);

    ctx.draw()

  },

  drawTitle(title) {
    ctx.setTextAlign('center') //  位置
    ctx.setFillStyle('#333') //  颜色
    ctx.setFontSize(18) //  字号
    ctx.fillText(title, 600 / 2, 50)
    ctx.stroke()


  },
  drawOrder(title, amount, price, startY) {

    ctx.setTextAlign('left') //  位置
    ctx.setFontSize(14) //  字号
    ctx.fillText(title, 20, startY)
    ctx.fillText(amount, 20, startY + 20)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(price, 600 - 20, startY + 20)
    ctx.stroke()

  },
  drawOrderItem(title, amount, price, params, startY) {

    ctx.setTextAlign('left') //  位置
    ctx.setFontSize(14) //  字号
    ctx.fillText(title, 40, startY)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(amount, 600 - 20, startY)
    ctx.setTextAlign('left') //  位置
    ctx.fillText(params, 40, startY + 20)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(price, 600 - 20, startY + 20)
    ctx.stroke()

  },
  drawOrderInfo(label, value, startY) {
    ctx.setTextAlign('left') //  位置
    ctx.setFontSize(12) //  字号
    ctx.fillText(label, 40, startY)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(value, 600 - 20, startY)

    ctx.stroke()

  },
  drawOrderTotal(value, startY) {

    ctx.setTextAlign('right') //  位置
    ctx.fillText(value, 600 - 20, startY)

    ctx.stroke()

  },
  drawLine(startY) {


    ctx.beginPath()

    //设置直线的起点
    ctx.lineTo(20, startY)
    //设置直线的终点
    ctx.lineTo(600 - 20, startY)
    ctx.stroke()

  },
  drawDelivery(title, arr, startY) {
    ctx.setTextAlign('left') //  位置
    ctx.setFontSize(14) //  字号
    ctx.fillText(title, 40, startY)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[0].label, 40, startY + 20)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[0].value, 600 - 20, startY + 20)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[1].label, 40, startY + 40)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[1].value, 600 - 20, startY + 40)
    ctx.fillText(arr[1].value2, 600 - 20, startY + 60)
    ctx.stroke()
  },
  drawOrderInfo2(title, arr, startY) {
    ctx.setTextAlign('left') //  位置
    ctx.setFontSize(14) //  字号
    ctx.fillText(title, 40, startY)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[0].label, 40, startY + 20)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[0].value, 600 - 20, startY + 20)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[1].label, 40, startY + 40)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[1].value, 600 - 20, startY + 40)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[2].label, 40, startY + 60)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[2].value, 600 - 20, startY + 60)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[3].label, 40, startY + 80)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[3].value, 600 - 20, startY + 80)

    ctx.setTextAlign('left') //  位置
    ctx.fillText(arr[4].label, 40, startY + 100)
    ctx.setTextAlign('right') //  位置
    ctx.fillText(arr[4].value, 600 - 20, startY + 100)
    ctx.stroke()
  },
  produce() {
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 600,
      height: 771,
      destWidth: 600,
      destHeight: 771,
      canvasId: 'shareImg',
      fileType:'jpg',
      success: function(res) {
        console.log(res.tempFilePath);
        /* 这里 就可以显示之前写的 预览区域了 把生成的图片url给image的src */
        that.setData({
          prurl: res.tempFilePath
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  save() {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.prurl,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                show: false
              })
            }
          }
        })
      }
    })
  },
  onClose() {
    var show = !this.data.show;
    this.setData({
      show
    })
    if(show){
      this.produce();
    }
  }
})