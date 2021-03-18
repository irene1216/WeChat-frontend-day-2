// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  data: {
    stories: []
  },

  onShow(){
    this.setData({
      stories: wx.getStorageSync('stories')
    })
  }
})