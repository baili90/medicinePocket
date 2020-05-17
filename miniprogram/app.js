//app.js
// miniprogram/pages/about/setting/setting.js
// const config = require('../../config.js')
  /**
   * 页面的初始数据
   */
const Towxml = require('/towxml/main');
App({
  // 引入`towxml3.0`解析方法
  towxml: new Towxml(),  
  globalData: {
  },
  data: {
    setting: {
      themeIndex: 0,
      fontIndex: 0,
    },
    fontIndexs: ['30rpx', '32rpx', '34rpx', '36rpx', '38rpx', '40rpx', '42rpx']
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
  },
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'seacloud-7ykpy',
        traceUser: true,
      })
    }

    // this.globalData = {}
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  }
})
