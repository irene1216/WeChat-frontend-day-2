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

  delete(){
    // currently we remove the story from the stories array 
    globalData.stories.splice(this.options.index, 1);

    // However, we want to remove it through our /DELETE story's endpoint with story's id
    // We can do sth like: 

    // wx.request({
      // url: `http://localhost:3000/api/v1/stories/${this.options.id}`,
      // method: 'DELETE',
      // ...
    // })
    wx.switchTab({
      url: '/pages/stories/stories',
    })
  },

  update(){
    // currently we pass over the index of the story to the post page
     // so that we can find the story on /pages/post/post's onload function 
    wx.navigateTo({
      url: `/pages/post/post?index=${this.options.index}`,
    })

  // However, we want to be able to get the *id* of the story this time and pass it to the post page with options
  // and the we can find the story with the /GET stories/:id api endpoin in order to pre-fill the edit story form
  },

  back: function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})