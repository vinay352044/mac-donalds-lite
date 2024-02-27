import React from 'react'
import { useState } from 'react'
const Cheese = ({orderIngredients,setOrderIngredients}) => {
  const [cheese,setCheese] = useState(0)
  const add = () => {
    setCheese(prev => prev+1)
    setOrderIngredients((prev)=>{
      return {...orderIngredients,
        cheese : prev.cheese+1}
    })
   }
   const remove = () => {
    if (cheese > 0) {
      setCheese(prev => prev - 1);
      setOrderIngredients(prev => {
        return { ...prev, cheese: prev.cheese - 1 };
      });
    }
  };
  return (
    <div className='rectangle'>
      <h5>{cheese}</h5>
      <button onClick={add}>Add Cheese</button>
      <button onClick={remove}>Remove Cheese</button>
    </div>
  )
}

export default Cheese
