// miniprogram/pages/test/one2/one2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: [{
      question: "31．以下哪项不是多胎妊娠时的孕妇并发症（ ）",
      A: "A.妊娠期高血压疾病",
      B: "B.羊水过少",
      C: "C.羊水过多",
      D: "D.贫血",
      E: "E.胎膜早破",
    }, {
      question: "32．下列哪项不是肾病综合征的特征（ ）",
      A: "A.大量尿蛋白",
      B: "B.低蛋白血症",
      C: "C.血胆固醇增高",
      D: "D.全身不同程度的水肿",
      E: "E.血沉基本正常",
    }, {
      question: "33．下列不是通过呼吸道传播的疾病是（ ）",
      A: "A.流行性脑脊髓膜炎",
      B: "B.麻疹",
      C: "C.白喉",
      D: "D.传染性非典型性肺炎",
      E: "E. 流行性乙型脑炎",
    }, {
      question: " 34．16岁男性患者，洗浴时无意中触及右大腿下端内侧硬性突起，无疼痛，膝关节运动良。最可能的诊断是（ ）",
      A: "A.软骨瘤",
      B: "B.骨软骨瘤",
      C: "C.骨巨细胞瘤",
      D: "D.骨囊肿",
      E: "E.骨化性肌炎",
    }, {
      question: " 35．缺铁性贫血的最可靠的诊断依据是（ ）",
      A: "A.小细胞性贫血",
      B: "B.增生性贫血",
      C: "C.小细胞低色素性贫血",
      D: "D.低血清铁",
      E: "E.血清铁减低伴骨髓储存铁极少或缺乏",
    }, {
      question: " 36．下列关于地西洋的不良反应的叙述中错误的是（ )",
      A: "A.治疗量可见困倦等中枢抑制作用",
      B: "B.治疗量口服可产生心血管抑制",
      C: "C.大剂量常见共济失调等肌张力降低现象",
      D: "D.长期服用可产生习惯性、耐受性、成瘾性",
      E: "E.久用突然停药可产生戒断症状如失眠",
    }, {
      question: " 37．引起疱疹性咽峡炎的病毒是（ ）",
      A: "A.呼吸道合胞病毒",
      B: "B.3、7型腺病毒",
      C: "C.流感病毒",
      D: "D.副流感病毒",
      E: "E.柯萨奇病毒A组",
    }, {
      question: "38．关于卡托普利，下列哪种说法是错误的（ ）",
      A: "A.降低外周血管阻力",
      B: "B.可用于治疗心衰",
      C: "C.与利尿药合用可加强其作用",
      D: "D.可增加体内醛固酮水平",
      E: "E.双侧肾动脉狭窄的患者忌用",
    }, {
      question: "39．甲胎蛋白检测对诊断哪种疾病最有意义（ ）",
      A: "A.活动性慢性肝炎",
      B: "B.转移性肝癌",
      C: "C.原发性肝细胞癌",
      D: "D.原发性肝内胆管细胞癌",
      E: "E.肝硬化",
    }, {
      question: "40．能强烈抑制胃酸分泌又能提高抗生素对幽门螺杆菌疗效的药物是（ ）",
      A: "A.氢氧化铝凝胶",
      B: "B.硫酸镁",
      C: "C.奥美拉唑",
      D: "D.西咪替丁",
      E: "E.枸橼酸铋钾",
    }, {
      question: "41．人类免疫缺陷病毒（HIV）主要侵害的靶细胞是（ ）",
      A: "A.B细胞",
      B: "B. 红细胞",
      C: "C.CD4+T细胞",
      D: "D. CD8+T细胞",
      E: "E.中性粒细胞",
    }, {
        question: "42．室间隔缺损患儿有时出现声音嘶哑，其原因是（ ）",
      A: "A.扩张的右心房压迫喉返神经",
      B: "B.扩张的左心房压迫喉返神经",
      C: "C.扩张的主动脉压迫喉返神经",
      D: "D.扩张的肺动脉压迫喉返神经",
      E: "E.扩张的左、右心房压迫喉返神经",
    }, {
        question: "43．应慎用血管扩张剂的心脏疾病是（ ）",
      A: "A.二尖瓣重度关闭不全",
      B: "B.二尖瓣重度狭窄",
      C: "C.主动脉重度关闭不全",
      D: "D.室间隔缺损",
      E: "E.扩张性心肌病",
    }, {
        question: "44．风湿性心脏病最常累及的瓣膜是（ ）",
      A: "A.二尖瓣",
      B: "B.三尖瓣",
      C: "C.主动脉瓣",
      D: "D.肺动脉瓣",
      E: "E.二尖瓣和主动脉瓣",
    }, {
        question: "45．小腿下1/3处砸伤骨折，给予确切的外固定，3个月后来复查，局部仍有异常活动，未愈合的最主要因素是（ ）",
      A: "A.该处不宜固定",
      B: "B.该处肌肉少",
      C: "C.该处活动量大",
      D: "D.该处血运差",
      E: "E.以上都不是",
    }, {
        question: "46．新生儿生理性黄疸的特点是（ ）",
      A: "A.发生于所有的足月儿",
      B: "B.生后即出现黄疸",
      C: "C.早产儿4周内黄疸消退",
      D: "D.一般情况差",
      E: "E.血清胆红素>205.2μmol／L（12mg／d1）",
    }, {
        question: "47．反映甲状腺功能最敏感的指标是（ ）",
      A: "A.TSH",
      B: "B.TT4",
      C: "C.TT3",
      D: "D.FT4",
      E: "E.FT3",
    }, {
        question: "48．早孕出现最早及最重要的症状是（ )",
      A: "A.停经史",
      B: "B.尿频",
      C: "C.呕吐",
      D: "D.腹部膨隆",
      E: "E.乳房胀痛",
    }, {
        question: "49．足月儿指的是（ ）",
      A: "A.胎龄≥37周至＜42周的新生儿",
      B: "B.胎龄＞28周至＜37周的新生儿",
      C: "C.胎龄≥28周至＜40周的新生儿",
      D: "D.胎龄＞37周至＜40周的新生儿",
      E: "E.胎龄≥42周的新生儿",
    }, {
        question: "50．女，45岁，接触性出血20天，白带米汤样，有恶臭，宫颈Ⅱ度糜烂，有4cm3的质地脆赘生物，易出血。子宫大小正常，触诊及双附件（-）。最可能的诊断是（ ）",
      A: "A.子宫颈息肉",
      B: "B.宫颈糜烂",
      C: "C.子宫颈癌",
      D: "D.语言发育",
      E: "E.牙齿的发育",
    }, {
        question: "51．有乳头溢血的乳晕深部肿块最多见的是（ ）",
      A: "A.乳癌",
      B: "B.乳腺囊性增生病",
      C: "C.乳房结核",
      D: "D.乳管内乳头状瘤",
      E: "E.乳房脓肿",
    }, {
        question: "52．伤寒的典型病变是（ ）",
      A: "A.肠道淋巴组织增生",
      B: "B.脾肿大",
      C: "C.败血症",
      D: "D.伤寒肉芽肿",
      E: "E.皮肤玫瑰疹",
    }, {
        question: "53．初产妇，妊娠40周，持续性枕后位，产程进展24小时，宫口开大4cm，给予肌内注射催产素10U，宫缩持续不缓解，胎心率90~100次/分，缩复环上升达脐平，导尿为血尿，应考虑是（ ）",
      A: "A.胎盘早期剥离",
      B: "B.先兆子宫破裂",
      C: "C.子宫收缩过强",
      D: "D.高涨性宫缩乏力",
      E: "E.不全性子宫破裂",
    }, {
        question: "54.对新斯的明的描述中，哪项不正确（ ）",
      A: "A.口服吸收少而不规则",
      B: "B.不易透过血脑屏障",
      C: "C.能可逆地抑制胆碱酯酶",
      D: "D.过量时可产生恶心、腹痛、呕吐等不良反应",
      E: "E.治疗重症肌无力时最常采用皮下给药的方式",
    }, {
        question: "55．骨盆骨折合并膀胱、尿道或直肠、阴道损伤，但皮肤完整是（ ）",
      A: "A.闭合性骨折",
      B: "B.开放性骨折",
      C: "C.压缩骨折",
      D: "D.嵌插骨折",
      E: "E.裂缝骨折",
    }, {
        question: "56．补钾浓度正确的是（ ）",
        A: "A.0.1%～0.6%",
      B: "B.0.15%～0.3%",
      C: "C.0.3%～2%",
      D: "D.0.9%～2%",
      E: "E.0.5%～3%",
    }, {
        question: "57．急性阑尾炎未转移至右下腹前，在诊断上下列具有重要意义的是（ ）",
      A: "A.腹痛、发热",
      B: "B.压痛固定在右下腹",
      C: "C.脐周压痛、反跳痛",
      D: "D.白细胞计数显著升高",
      E: "E.脐区及右下腹均有压痛",
    }, {
        question: "58．下列哪种出血用维生素K治疗无效（ ）",
      A: "A.长期使用四环素",
      B: "B.华法林引起的出血",
      C: "C.早产儿、新生儿",
      D: "D.肝素过量",
      E: "E.大剂量阿司匹林",
    }, {
        question: "59．泌尿、男性生殖系统肿瘤中最常见的肿瘤是（ ）",
      A: "A.肾癌",
      B: "B.肾盂癌",
      C: "C.膀胱癌",
      D: "D.阴茎癌",
      E: "E.前列腺癌",
    }, {
        question: "60．只能用于心源性哮喘，不能用于支气管哮喘的药物是（ ）",
      A: "A.肾上腺素",
      B: "B.异丙肾上腺素",
      C: "C.吗啡",
      D: "D.特布他林",
      E: "E.氨茶碱",
    }],
    anserList: [{
        answer: "31~35:BEEBE"
      }, {
        answer: "36~40:BEDCC"
      }, {
        answer: "41~45:CDBAD"
      }, {
        answer: "46~50:CAAAC"
      }, {
        answer: "51~55:DDBEB"
      }, {
        answer: "56~60:DBBDCC"
      }

    ]
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