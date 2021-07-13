import React from 'react'

const LandingPage = () => {
  //fetch the featured items

  //display those items (simply at first)

  return (
  <div className=" grid-y grid-padding-y">
    <div className="landing-image ">
      <h1 className="landing-text">
        <span className="red"> Open Wide </span>
        <span className="green">Deli </span>
      </h1>


      <div className="featured-food">
        <h1>Featured Food</h1>
        //featured food carousel
      </div>
      <div className="grid-x grid-padding-x" >
        <div className="about-us cell small-12 large-7">
          <h1>About Us</h1>
          //image
          //about the company/owner
        </div>

        <div className="location-map small-12 large-5">
          <h1>Location</h1>
        </div>
      </div>
    </div>
  </div>
  )

}

export default LandingPage