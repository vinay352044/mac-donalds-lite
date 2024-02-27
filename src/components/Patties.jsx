import React from 'react'
import { useState } from 'react'
const Patties = ({orderIngredients,setOrderIngredients}) => {
  const [patties,setPatties] = useState(0)
  const add = () => {
    setPatties(prev => prev+1)
    setOrderIngredients((prev)=>{
      return {...orderIngredients,
        patties : prev.patties+1}
    })
   }
  const remove = () => {
    if(patties>0){
    setPatties(prev => prev-1)
    setOrderIngredients((prev)=>{
      return {...orderIngredients,
        patties : prev.patties-1}
    })
  }
   }
  return (
    <div className='circle'>
      <h5>{patties}</h5>
      <button onClick={add}>Add Patties</button>
      <button onClick={remove}>Remove Patties</button>
    </div>
  )
}

export default Patties
