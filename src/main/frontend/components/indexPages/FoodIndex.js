import React, { useState, useEffect } from 'react'

import FeaturedFoodTile from "../landingPage/FeaturedFoodTile.js"
import ItemFilterButtons from "./ItemFilterButtons.js"

const FoodIndex = ()=> {
  const [foodItems, setFoodItems] = useState([])
  const [filteredFoodItems, setFilteredFoodItems] = useState([])

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
      setFilteredFoodItems(foodData.foodItems)
    } catch (error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  useEffect(() => {
    fetchFoods()
  }, [])

  //Make an array of maps where each map is a category(k) and array of items(v)
  const filter =  ()=> {
    const foodMap = new Map();
    filteredFoodItems.forEach(item => {
      if(foodMap.has(item.foodCategories.name)){
        foodMap.set(item.foodCategories.name, [...foodMap.get(item.foodCategories.name), item])
      } else {
        const allFoods = [item]
        foodMap.set(item.foodCategories.name, allFoods)
      }
    })

    const foodArray = []
    Array.from(foodMap.entries()).forEach(item => {
      const newFoodMap = new Map()
      newFoodMap.set(item[0], item[1])
      foodArray.push(newFoodMap)
    })
//    console.log(foodArray)
    return foodArray
  }

  //iterate over filterArray to create Headers with all corresponding Items from category
  const foodTiles = filter().map(food => {
    const foodTilesByCategory = food.values().next().value.map(foodItem => {
      return(
        <div className="food-index-item">
          <FeaturedFoodTile
            key={foodItem.id}
            featuredItem={foodItem}
          />
        </div>
      )
    })

    return (
      <div className="index-container index-reduce-margin">
        <h1 className="landing-text-header">{food.keys().next().value} </h1>
        <hr className="hr-index"/>
        <div className="food-index-container">
          {foodTilesByCategory}
        </div>
      </div>
    )
  })

  useEffect(() => {
    filter()
  }, [foodItems])

    const filterFood = (event)=> {
      event.preventDefault()
      const filterForCategory = event.currentTarget.value
      let filterFoodArray = []

      if(filterForCategory == "All") {
        filterFoodArray = [...foodItems]
        setFilteredFoodItems(filterFoodArray)
      } else {
        filterFoodArray = foodItems.filter((item) => {
          return item.foodCategories.name === (filterForCategory)
        })
        setFilteredFoodItems(filterFoodArray)
      }
//      console.log(filterFoodArray)
    }

  return (
    <div >
      <ItemFilterButtons
        filterFood={filterFood}
      />
      <div>
        {foodTiles}
      </div>
    </div>
  )
}

export default FoodIndex