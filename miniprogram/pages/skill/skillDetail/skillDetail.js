// miniprogram/pages/skill/skillDetail/skillDetail.js
  import request from '../../../utils/network.js'
  const app = getApp();

  Page({

    /**
     * 页面的初始数据
     */
    data: {
      url: 'https://www.qianshibuwang.cn/mpdoc/skill/',
      title: '',
      last:'.md',
      article: { },				// 内容数据
    },
    // 页面加载时就请求当前文章，用了封装的request工具和towxml插件
    onLoad:function(options){
      this.setData({
        title: options.title
      })
    //note:this.data
    console.log(this.data.title)
    // console.log(this.data.url)

    // 这个拼接方法看起来怪怪的，待优化。目的是根据题目请求不同的文章。
    request({
        url: this.data.url + this.data.title + this.data.last,
    }).then(res => {

    //注意：towxml只能解析md文档，如果文档的内容含有诸如网页标签，解析失败会直接不渲染。
    let data = app.towxml.toJson(
      res.data,               // `markdown`或`html`文本内容
      'markdown'              // `markdown`或`html`
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
onShow: function () {
  wx.showLoading({
    title: '努力加载中'
  })
}
})