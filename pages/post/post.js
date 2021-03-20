const globalData = getApp().globalData
// pages/post/post.js
Page({
  onLoad(options){
    let id = options.id
    wx.request({
      url: `https://fml.shanghaiwogeng.com/api/v1/stories/${id}`,
      success: (res)=>{
        this.setData({
          story: res.data,
          id: id
        })
      }
    })
  },

  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  editStory: function(event){
    const story = event.detail.value
    console.log("?????????????????",story)
    // send the data to our api end 
    wx.request({
      url: `https://fml.shanghaiwogeng.com/api/v1/stories/${this.data.id}`,
      method: "PUT",
      data: story,
      success: (res)=>{
        console.log("posting to the backend", res)
        wx.switchTab({
          url: '/pages/stories/stories',
        })
      }, 
      fail: (res)=>{
        console.log("not success", res)
      }
    })
  },

  createStory: function(event){
    const story = event.detail.value
    console.log(story)
    // send the data to our api end 
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      method: "POST",
      data: story,
      success: (res)=>{
        console.log("posting to the backend", res)
        wx.switchTab({
          url: '/pages/stories/stories',
        })
      }, 
      fail: (res)=>{
        console.log("not success", res)
      }
    })
  }
})


