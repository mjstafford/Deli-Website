import React, { useState, useEffect } from 'react'

const ItemFilterButtons = (props)=> {
  const [filterCategories, setFilterCategories] = useState([])

  const fetchCategories = async ()=> {
    try{
      const response = await fetch("/api/v1/items/categories")
      if(!response.ok){
        const message = `${response.status} (${response.statusText})`
        const error = new Error(message)
        throw error
      }
      const categoriesData = await response.json()
      const removeDrinksFromData = categoriesData.itemCategories.filter((item)=> {
        return item.name !== "Drink"
      })
      setFilterCategories(removeDrinksFromData)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const buttonClass = "btn "
  const filterButtons = filterCategories.map(category => {
    return(
      <button className={buttonClass} onClick={props.filterFood} value={category.name}> {category.name} </button>
    )
  })


  return (
    <div className="filter-div">
      <div className="filter-div-white">
        <button className={buttonClass} onClick={props.filterFood} value="All"> All items</button>
        {filterButtons}
      </div>
    </div>
  )
}

export default ItemFilterButtons