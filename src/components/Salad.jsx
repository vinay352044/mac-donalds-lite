import React from 'react'
import { useState } from 'react'
const Salad = ({orderIngredients,setOrderIngredients}) => {
  const [salad,setSalad] = useState(0)
  const add = () => {
    setSalad(prev => prev+1)
    setOrderIngredients((prev)=>{
      return {...orderIngredients,
        salad : prev.salad+1}
    })
   }
 const remove = () => {
  if(salad>0){
  setSalad(prev => prev-1)
  setOrderIngredients((prev)=>{
    return {...orderIngredients,
      salad : prev.salad-1}
  })
}
 }
  
  return (
    <div className='triangle'>
      <h5>{salad}</h5>
      <button onClick={add}>Add Salad</button>
      <button onClick={remove}>Remove Salad</button>
    </div>
  )
}

export default Salad
