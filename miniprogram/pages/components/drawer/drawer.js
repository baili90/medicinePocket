// miniprogram/components/drawer/drawer.js
const app = getApp()
// const db = wx.cloud.database()
// const test = db.collection('respiratory')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    index: 0,
    context: "hello",
    respiratoryList: [{
      index: "0",
      name: "bronchitisCOPD",
      title: "慢支与COPD",
      context: "1.2  3.3"
    },
    {
      index: "1",
      name: "asthma",
      title: "支气管哮喘",
      context: "第二章1.1 2.3"
    },
    ]
  },

  // onLoad: function (options) {
  //   db.collection('respiratory').doc('78e77acc-881e-4c88-b253-fbf2ac1999b7').get({
  //     success:function (res){
  //       console.log(res)
  //     }
  //   })
  // },
  // 点击菜单切换章节
  change: function (e) {
    this.setData({
      index: e.currentTarget.dataset.index
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})
