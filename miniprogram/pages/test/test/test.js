// pages/test/test/test.js
Page({
  data: {
    hiddenA1:true,
    hiddenA2:true,
    hiddenA3:true,
    oneChoiceList:[{
      name:"one1",
      title:"01~30"
    },{
      name:"one2",
      title: "31~60"
    },{
      name:"one3",
      title:"61~90"
    },{
      name:"one4",
      title:"91~100"
    }],
    caseChoiceList:[{
      name:"case1",
      title:"01~20"
    }],
    matchList:[{
      name:"match1",
      title:"01~20"
    }]
  },

  // 下面的代码功能虽然完成了，但是有待优化
  a1Show:function(e){
    if (e.currentTarget.dataset.hidden === true){
      this.setData({
        hiddenA1:false
      })
    }else{
      this.setData({
        hiddenA1: true
      })
    }
  },
  a2Show: function (e) {
    if (e.currentTarget.dataset.hidden === true) {
      this.setData({
        hiddenA2: false
      })
    } else {
      this.setData({
        hiddenA2: true
      })
    }
  },
  a3Show: function (e) {
    if (e.currentTarget.dataset.hidden === true) {
      this.setData({
        hiddenA3: false
      })
    } else {
      this.setData({
        hiddenA3: true
      })
    }
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
})