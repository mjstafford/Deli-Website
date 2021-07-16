import React, { useState, useEffect } from 'react'

import FeaturedFoodTile from "./FeaturedFoodTile"
import MyGoogleMap from "./MyGoogleMap"

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

  return (
  <div className=" grid-y grid-padding-y">
    <div className="landing-image ">
      <h1 className="landing-text">
        <span className="red"> Open Wide </span>
        <span className="green">Deli </span>
      </h1>

      <div className="featured-food">
        <h1 className="landing-text-header">Featured Food</h1>
        <hr/>
        <div className="grid-x">
          {featuredTilesMap}
        </div>
      </div>

      <div className="grid-x grid-padding-x" >
        <div className="about-us cell small-12 large-6">
            <h1 className="landing-text-header">About Us</h1>
            <hr className="landing-hr"/>
            <img className="image-chef" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/34121324_103495260547748_6042988899226091520_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6wu7V6SzaZEAX9Kladc&_nc_ht=scontent-sea1-1.xx&oh=42002d9f081de18e3925707c116a7740&oe=60F4F109" alt="chef Joe Shirley" width="300" height="200"  align="left"/>
            <> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur augue ac purus convallis, ultricies pellentesque nisi tristique. Ut ullamcorper nulla mauris, molestie iaculis sapien interdum vitae. Praesent in ex nisl. Etiam a finibus mauris. Phasellus rutrum sit amet mauris non elementum. Nunc in ligula a arcu auctor ultrices at eget elit. Pellentesque egestas ac velit at pellentesque. Mauris non consequat mauris. Donec vel odio mi. Aenean dictum, odio et cursus ornare, mauris lectus pretium risunsequat ultrices. Aliqua.</>
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