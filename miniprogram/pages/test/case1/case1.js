
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: [{
      general:"2岁患儿。高热，体温39～40℃，频繁咳嗽，喘憋5天住院。查体：精神弱，面色苍灰，口周发青，呼吸40次／分，左肺呼吸音低，叩诊浊音，少许细湿啰音。外周血白细胞：8.8×109/L，N44％，异形淋巴细胞1％，L45％。X线胸片示左下肺大片状阴影。",
      question: "1.最可能的诊断是（ ）",
      A: "A.金黄色葡萄球菌肺炎",
      B: "B.肺炎链球菌肺炎",
      C: "C.呼吸道合胞病毒肺炎",
      D: "D.腺病毒肺炎",
      E: "E.干酪性肺炎",
    },],
    anserList: [{
      answer: "1~5:DCBCB"
    }, {
      answer: "6~10:BEEAD"
    },{
        answer: "11~15:CECBC"
    }, {
        answer: "16~20:AEDCE"
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