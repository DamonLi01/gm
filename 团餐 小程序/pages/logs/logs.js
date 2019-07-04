//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function() {
    /* promise可以忽略 是用来改善异步回调执行顺序 与本功能没有大的关系 */

    // let promise1 = new Promise(function(resolve, reject) {

    //   /* 获得要在画布上绘制的图片 */
    //   wx.getImageInfo({
    //     src: '/static/images/icon_API.png',
    //     success: function(res) {
    //       console.log(res)
    //       resolve(res);
    //     }
    //   })
    // });
    // let promise2 = new Promise(function(resolve, reject) {
    //   wx.getImageInfo({
    //     src: '/static/images/icon_component_HL.png',
    //     success: function(res) {
    //       console.log(res)
    //       resolve(res);
    //     }
    //   })
    // });

    /* 图片获取成功才执行后续代码 */
    // Promise.all(
    //   [promise1, promise2]
    // ).then(res => {
    //   console.log(res)

    /* 创建 canvas 画布 */
    const ctx = wx.createCanvasContext('shareImg')

    /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
    /* ps: 网络图片的话 就不用加../../路径了 反正我这里路径得加 */
    // ctx.drawImage('../../' + res[0].path, 158, 190, 210, 210)
    // ctx.drawImage('../../' + res[1].path, 0, 0, 545, 771)

    /* 绘制文字 位置自己计算 参数自己看文档 */
    ctx.setTextAlign('left') //  位置
    ctx.setFillStyle('#333') //  颜色
    ctx.setFontSize(22) //  字号
    ctx.fillText('套餐A', 20, 130) //内容不会自己换行需手动换行
    ctx.setFontSize(18) //  字号
    ctx.fillText('可乐', 40, 160) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 160) //内容
    ctx.setTextAlign('left') //  位置

    ctx.fillText('可乐', 40, 190) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 190) //内容
    ctx.setTextAlign('left') //  位置

    ctx.fillText('可乐', 40, 220) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 220) //内容
    ctx.setTextAlign('left') //  位置

    ctx.fillText('可乐', 40, 250) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 250) //内容
    ctx.setTextAlign('left') //  位置

    ctx.setFontSize(22) //  字号
    ctx.fillText('套餐B', 20, 280) //内容不会自己换行需手动换行
    ctx.setFontSize(18) //  字号

    ctx.fillText('可乐', 40, 310) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 310) //内容
    ctx.setTextAlign('left') //  位置
    ctx.fillText('可乐', 40, 340) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 340) //内容
    ctx.setTextAlign('left') //  位置
    ctx.fillText('可乐', 40, 370) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 370) //内容
    ctx.setTextAlign('left') //  位置
    ctx.fillText('可乐', 40, 400) //内容
    ctx.setTextAlign('right') //  位置
    ctx.fillText('*30', 505, 400) //内容




    /* 绘制 */
    ctx.stroke()
    ctx.draw()
    // })

  },
  share() {
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 545,
      height: 771,
      destWidth: 545,
      destHeight: 771,
      canvasId: 'shareImg',
      success: function(res) {
        console.log(res.tempFilePath);
        /* 这里 就可以显示之前写的 预览区域了 把生成的图片url给image的src */
        that.setData({
          prurl: res.tempFilePath,
          hidden: false
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
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                hidden: true
              })
            }
          }
        })
      }
    })
  }
})