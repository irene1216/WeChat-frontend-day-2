// pages/test/test.js
const globalData = getApp().globalData

Page({
  data: {
    name: "Ashkan",
    age: 17,
    favoriteFood: ["Big Mac", "French Fries", "Apple Pie", "Cheese Burger"],
    showBurger: false,
    person: {
      name: "Ashkan",
      age: 19,
      a: "sdsd",
      b: "dssd"
    }
  },


  ageAshkan: function(event){
    // get ashkan's current age
    let page = this
    console.log("age", page.data.age)
    let currentAge = page.data.age
    // add one to current age

    let newAge = currentAge + 1
    // set the age to new age
    // page.data.age = newAge
    page.setData({
      age: newAge
    })
    page.person.age = 20
    page.setData({
      person: page.data.person
    })
  },

  giveHimFood: function(event){
    // set true to showBurger
    this.setData({
      showBurger: true
    })
  }
})