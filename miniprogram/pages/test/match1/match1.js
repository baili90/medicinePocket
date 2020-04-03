// pages/test/one1/one1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anserList: [{
      answer: "1~5:DCCDC"
    }, {
      answer: "6~10:AABBE"
    }]
  },
  // 点击菜单切换章节
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }
})