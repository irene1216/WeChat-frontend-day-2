// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("showpage", options.id)
    let id = options.id
    wx.request({
      url: `https://fml.shanghaiwogeng.com/api/v1/stories/${id}`,
      success: (res)=>{
        console.log("geting one story", res)
        this.setData({
          story: res.data,
          id: id
        })
      }
    })
  },

  delete(){
    wx.request({
      url: `https://fml.shanghaiwogeng.com/api/v1/stories/${this.data.id}`,
      method: 'DELETE',
      success: (res)=>{
        console.log(res)
        wx.switchTab({
          url: '/pages/stories/stories',
        })
      }
    })
  },

  update(){
    wx.navigateTo({
      url: `/pages/post/post?id=${this.data.id}`,
    })
  },

  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})