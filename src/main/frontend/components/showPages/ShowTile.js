import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedFoodTile = (props) => {
  const {name, description, image, id, cost} = props.item
  console.log(id)

  return (
    <div className="polaroid-show ">
      <img className="show-image" src={image}  />
      <div className="container">
        <h2 className="landing-text-title">{name} - ${cost}</h2>
        <p className="landing-text-title"> {description}</p>
      </div>
    </div>
  )
}

export default FeaturedFoodTile