import React, { useState, useEffect } from 'react'

import FeaturedFoodTile from "../landingPage/FeaturedFoodTile.js"

const DrinkIndex = ()=> {
  const [drinkItems, setDrinkItems] = useState([])

  const fetchDrinks = async ()=> {
    try{
      const response = await fetch("/api/v1/items/drinks")
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const drinkData = await response.json()
      setDrinkItems(drinkData.drinkItems)
    } catch (error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [])

  const drinkTiles = drinkItems.map(drink => {
      return(
        <div className="index-container">
          <h1 className="landing-text-header">Drink's </h1>
          <hr className="hr-index"/>
          <div className="food-index-container">
            <div className="food-index-item">
              <FeaturedFoodTile
                key={drink.id}
                featuredItem={drink}
              />
            </div>
          </div>
        </div>
      )
  })

  return (
    <div>
      {drinkTiles}
    </div>
  )
}

export default DrinkIndex