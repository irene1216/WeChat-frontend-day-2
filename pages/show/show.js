// pages/show/show.js
const globalData = getApp().globalData
Page({
  data: {
    story: {
      name: "irene",
      text: "Forgot to git add git comit..."
    }
  },

  onLoad: function (options) {
    // this.setData({
    //   story: globalData.stories[options.index]
    // })
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      success: (res)=>{
        console.log(res)
        this.setData({
          story: res.data
        })
      }
    })
  },

  delete(){
  },

  update(){
    wx.navigateTo({
      url: `/pages/post/post?id=${this.data.story.id}`,
    })
  },

  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})