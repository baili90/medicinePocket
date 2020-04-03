// pages/about/favor/favor.js
const test = wx.cloud.database().collection('test')
Page({
  data: {
    list:[],
  },
  onLoad:function(){
      test.where({
        _openid: 'oDtc_5WEJ2KA5mMTp4aWnxRzX5KM'
      }).get().then(res => {
        console.log(res)
        this.setData({
          list: res.data
        })
      })
  }
})