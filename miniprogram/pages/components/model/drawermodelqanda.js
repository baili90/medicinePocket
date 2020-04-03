Page({
  /**
   * 页面的初始数据
   */
  data: {

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