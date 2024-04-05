import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'

const FoodDisplay = ({category, setCategory}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display'>
        <h2 className="food-display-heading">
             Top dishes near you
        </h2>
        <div className="food-display-list">
            
     {/* eslint-disable-next-line */}      
            {food_list.map((item, index) =>{
                if(category==="All" || category===item.category) 
                {
                    return(
                        <>
                            <FoodItem 
                                key={index}
                                id = {item._id}
                                name = {item.name}
                                description = {item.description}
                                price = {item.price}
                                image = {item.image}
                            />
                        </>
                )  }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay