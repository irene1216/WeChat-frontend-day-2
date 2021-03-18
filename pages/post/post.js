const globalData = getApp().globalData
// pages/post/post.js
Page({
  handleFormSubmit: function(event){
    const story = event.detail.value
    console.log(story)
    globalData.stories.push(story)
    wx.setStorage({
      data: globalData.stories,
      key: 'stories',
    })
    wx.switchTab({
      url: '/pages/stories/stories',
    })
  }
})