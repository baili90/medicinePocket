export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}