import React from 'react'

const FeaturedFoodTile = (props) => {
  const {name, description, image} = props.featuredItem

  return (
    <div>
      <h3 className="landing-text-title">{name}</h3>
      <img className="featured-image" src={image}  />
      <p className="landing-text-title"> {description}</p>
    </div>
  )

}

export default FeaturedFoodTile