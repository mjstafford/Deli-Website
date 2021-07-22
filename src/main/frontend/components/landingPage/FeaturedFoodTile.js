import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedFoodTile = (props) => {
  const {name, description, image, id} = props.featuredItem

  return (
    <div className="polaroid">
      <Link className="" to={`/open-wide-deli/item/${id}`}>
        <img className="featured-image" src={image}  />
      </Link>
      <div className="container">
        <h3 className="landing-text-title">{name}</h3>
        <p className="landing-text-title"> {description}</p>
      </div>
    </div>
  )
}

export default FeaturedFoodTile