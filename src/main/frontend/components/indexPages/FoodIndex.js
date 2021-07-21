import React, { useState, useEffect } from 'react'

import FeaturedFoodTile from "../landingPage/FeaturedFoodTile.js"

const FoodIndex = ()=> {
  const [foodItems, setFoodItems] = useState([])
  //save all food in state

  //fetch all food
  const fetchFoods = async ()=> {
    try{
      const response = await fetch("/api/v1/items/food")
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const foodData = await response.json()
      setFoodItems(foodData.foodItems)
    } catch (error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  useEffect(() => {
    fetchFoods()
  }, [])

  //working on trying to get headers for each type of food
  const filter =  ()=> {
    const foodMap = new Map();
    foodItems.forEach(item => {
      if(foodMap.has(item.foodCategories.name)){
        foodMap.set(item.foodCategories.name, [...foodMap.get(item.foodCategories.name), item])
      } else {
        const allFoods = [item]
        foodMap.set(item.foodCategories.name, allFoods)
      }
    })

    console.log(foodMap)
    console.log(foodMap.keys())
    console.log(foodMap.get("Sandwich"))
    console.log(Object.entries(foodMap))
  }

  useEffect(() => {
    filter()
  }, [foodItems])

  const foodTiles = foodItems.map(food => {
      return(
        <div className="food-index-item">
          <FeaturedFoodTile
            key={food.id}
            featuredItem={food}
          />
        </div>
      )
  })

  //show all foods
    //link to showPages

  return (
    <div className="food-index-container">
      {foodTiles}
    </div>
  )
}

export default FoodIndex