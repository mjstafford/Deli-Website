import React from 'react'

const FeaturedFoodTile = (props) => {
  const {name, description, image} = props.featuredItem

  return (
    <div className="polaroid">
      <img className="featured-image" src={image}  />
      <div className="container">
        <h3 className="landing-text-title">{name}</h3>
        <p className="landing-text-title"> {description}</p>
      </div>
    </div>
  )

}

export default FeaturedFoodTile