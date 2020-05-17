// miniprogram/pages/about/setting/setting.js
const app = getApp();
import request from '../../../utils/network.js'
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: {
      themeIndex: 0,
      fontIndex: 0,
      userId: getApp().globalData.v,
    },
    fontIndexs: ['30rpx', '32rpx', '34rpx', '36rpx', '38rpx', '40rpx', '42rpx']
  },
  onLoad:function(){
    this.initReaderSetting()
    request({
      url: 'https://www.qianshibuwang.cn/start.html'
    }).then(res => {

      //注意：towxml只能解析md文档，如果文档的内容含有诸如网页标签，解析失败会直接不渲染。
      let data = app.towxml.toJson(
        res.data,               // `markdown`或`html`文本内容
        'html'              // `markdown`或`html`
      );
      data.theme = 'light';
      this.setData({
        article: data
      });
      wx.hideLoading()
    }).catch(err => {
      console.log(err);
    })
  },
  initReaderSetting: function () {
    let setting = util.getReaderSetting()
    let screenBrightness = 0
    wx.getScreenBrightness({
      success: function (res) {
        screenBrightness = res.value
      }
    })
    this.setData({
      setting: setting,
      defautScreenBrightness: screenBrightness,
      screenBrightness: screenBrightness,
    })
  },

  setFont: function (e) {
    // 0 ~ 6
    // if (config.debug) console.log(e)
    let that = this
    let setting = that.data.setting
    if (e.currentTarget.dataset.action == 'minus') {
      if (setting.fontIndex > 0) setting.fontIndex = setting.fontIndex - 1
    } else {
      if (setting.fontIndex < 6) setting.fontIndex = setting.fontIndex + 1
    }
    that.setData({
      setting: setting
    })
    util.setReaderSetting(Object(setting))
  }

})