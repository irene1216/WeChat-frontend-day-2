const globalData = getApp().globalData
// pages/post/post.js
Page({
  onLoad: function (options) {
    // Currently we find the story with the index that got pass over from the options

    this.setData({
      story: globalData.stories[options.index]
    })
    // wx.request({
    //   url: `http://localhost:3000/api/v1/stories/${options.id}`,
    //   success: (res)=>{
    //     console.log(res)
    //     this.setData({
    //       story: res.data
    //     })
    //   }
    // })

    // However, we want to find the story with the id 
    // We can do something like :
    // wx.request({
    //   url: `http://localhost:3000/api/v1/stories/${options.id}`,
    //   // ........
    // })
  },


  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  },

  editStory: function(e){
    let story = e.detail.value
    globalData.stories[this.options.index] = story
    wx.navigateTo({
      url: `/pages/show/show?index=${this.options.index}`,
    })

    // We want to edit the story with our UPDATE story api endpoint
    // We can do sth like...
    // wx.request({
    //   url: `http://localhost:3000/api/v1/stories/${this.options.id}`,
    //   method: 'PUT',
    //   data: .....
    // })
  },

  createStory: function(e){
    // currently we push the new story option that we get from the form submit event to globaldata's stories array
    // Then redirect back to the stories page
    let story = e.detail.value

    globalData.stories.push(story)
    wx.switchTab({
      url: '/pages/stories/stories',
    })

    // However, we want to do a POST request to the stories create api endpoint
    // We can do sth like...
    // wx.request({
    //   url: 'http://localhost:3000/api/v1/stories',
    //   method: 'POST',
    //   data: .....
    // })
  }
})


