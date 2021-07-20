import React, { useState, useEffect } from 'react'

import FeaturedFoodTile from "./FeaturedFoodTile.js"
import MyGoogleMap from "./MyGoogleMap.js"
import AboutUs from "./AboutUs.js"

const LandingPage = () => {
  const [featuredItems, setFeaturedItems] = useState([])

  //fetch the featured items
  const fetchFeatured = async () => {
    try {
      const response = await fetch("/api/v1/items/featured")
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const featuredData = await response.json()
      console.log("fetch ok")
      setFeaturedItems(featuredData.featured)
      } catch(error){
          console.error(`Error in fetch: ${error.message}`)
    }

  }
  //useEffect to run on load
  useEffect(() => {
    fetchFeatured()
  }, [])

  //map items to tiles
  const featuredTilesMap = featuredItems.map(item => {
    return(
      <div className="cell small-12 medium-6 large-auto">
        <FeaturedFoodTile
          key={item.id}
          featuredItem={item}
        />
      </div>
    )
  })

  let months = new Map()
  months.set(0,"January")
  months.set(1,"February")
  months.set(2,"March")
  months.set(3,"April")
  months.set(4,"May")
  months.set(5,"June")
  months.set(6,"July")
  months.set(7,"August")
  months.set(8,"September")
  months.set(9,"October")
  months.set(10,"November")
  months.set(11,"December")
  const date = new Date();
  const month = months.get(date.getMonth());

  return (
  <div className=" grid-y grid-padding-y">
    <div className="landing-image ">
      <div className="featured-food">
        <h1 className="landing-text-header">{month}'s Featured Food</h1>
        <hr/>
        <div className="grid-x">
          {featuredTilesMap}
        </div>
      </div>

      <div className="grid-x grid-padding-x" >
        <div className="about-us cell small-12 large-6">
          <AboutUs />
        </div>

        <div className="location-map small-12 large-5">
          <h1 className="landing-text-header">Location</h1>
          <hr/>
          <MyGoogleMap />
        </div>
      </div>
    </div>
  </div>
  )

}

export default LandingPage