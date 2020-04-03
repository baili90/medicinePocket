// pages/skill/skill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseList: [{
      name: "general",
      title: "概要"
    },{
      name:"fever",
      title: "发热"
    },{
      name: "cough",
      title: "咳嗽"
    }, {
      name: "palpitation",
      title: "心悸"
    }, {
      name: "jaundice",
      title: "黄疸"
    }, {
      name:"nausea",
      title: "恶心"
    }
    ],

    // 体格检查
    checkList: [{
      name: "normal",
      title: "一般"
    }, {
      name: "head",
      title: "头部"
    }, {
      name: "chest",
      title: "胸部"
    }, {
      name: "abdomen",
      title: "腹部"
    }, {
      name: "backbone",
      title: "脊柱"
    }, {
      name: "limb",
      title: "四肢"
      }, {
      name: "nerve",
      title: "神经"
    }
    ],
    operationList: [{
      name: "preparation",
      title: "术前准备"
    }, {
      name: "debridement",
      title: "清创缝合"
    }, {
      name: "bandage",
      title: "止血包扎"
    }, {
      name: "incision",
      title: "脓肿切开"
    }, {
      name: "suture",
      title: "换药拆线"
    }, {
      name: "oxygen",
      title: "吸氧操作"
      }, {
      name: "PCR",
      title: "心肺复苏"
      }, {
      name: "breather",
      title: "呼吸器具"
      }
    ],
  }
})