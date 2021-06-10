// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  onShow(){
    this.setData({
      stories: globalData.stories
    })
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      success: (res)=>{
        console.log("trying to test our index api", res.data.stories)
        this.setData({
          stories: res.data.stories
        })
      }
    })
  },

  tapOnCard: function(e){
  }
})