// index.js
// 获取应用实例

const app = getApp()

Page({
  data: {
    newTitle: "I love coding",
    array: ['title1', 'title2', 'title3'],
    user: "irene",
    story: {
      title: "Story's name",
      author: "Ashkan"
    }
  },
  onLoad: function(){
    // console.log("1. This is the onload function")
    this.anotherCustomFunction()
    console.log("testing how to get data within a page", this.data.story.title)
    let page = this
    let person = {
      name: "Ashkan",
      age: 10,
      realAge: function(){
        return this.age + page.anotherCustomFunction()
      }
    }
    // console.log(person.realAge())
  },

  anotherCustomFunction(){
    return 17
  },

  onShow(){
    // console.log("2. This is the onShow function")
    console.log("testing globaldata", getApp().globalData)
    wx.setStorage({
      data: "ashkan123",
      key: 'username',
    })
    // this.setData({
    //   story: {
    //     title: "new story's title",
    //     author: "Ashkan"
    //   }
    // })
    this.setData({
      newTitle: getApp().globalData.anotherTitle
    })
  },

  onReady(){
    // console.log("3. This is the onReady function")
  },

  onHide(){
    // console.log("4. This is the onHide function")
  },

  navigateToStories (event){
    // console.log(event)
    wx.navigateTo({
      url: '/pages/post/post'
    })
  }
})
