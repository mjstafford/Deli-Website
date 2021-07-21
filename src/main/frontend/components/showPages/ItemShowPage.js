import React, { useState, useEffect} from 'react'

import ShowTile from "./ShowTile"

const ItemShowPage = (props)=>{
  const [Item, setItem] = useState([])
  const id = props.match.params.id

  const fetchItem = async ()=> {
    try{
      const response = await fetch(`/api/v1/items/${id}`)
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const itemData = await response.json()
      setItem(itemData.item)
    } catch (error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <div className="food-index-container">
      <ShowTile
        key={Item.id}
        item={Item}
      />
    </div>
  )
}

export default ItemShowPage