const globalData = getApp().globalData
// pages/post/post.js
Page({
  onLoad: function (options) {
  },


  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  editStory: function(e){
  },

  createStory: function(e){
    console.log(e.detail.value)
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      method: 'POST',
      data: {story: e.detail.value},
      success: (res)=>{
        console.log("testing story create endpoint", res)
      }
    })
  }
})


