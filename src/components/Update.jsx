import React, { useState,useEffect } from 'react'
// import Patties from './Patties'
// import Salad from './Salad'
// import Cheese from './Cheese'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
// const dispatch = useDispatch()

const Update = () => {
    const {id} = useParams()
    // const history  = useHistory()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders);
    const orderToUpdate = orders.find(order => order.id ===id)
    
  const [ing, setIng] = useState({
    orderby: orderToUpdate.orderby,
         patties: orderToUpdate.patties,
         salad: orderToUpdate.salad,
         cheese: orderToUpdate.cheese
  })

  const handleUpdate = () => {
    console.log(ing)
    console.log( orders);
    const updateOrders = orders.map(order=> order.id === id ? {...order,...ing}:order)
    console.log(updateOrders)
    localStorage.setItem('orders',JSON.stringify(updateOrders))
    dispatch({type:'updateorder',payload:updateOrders})
    navigate('/orders')
  }




  const handleChange = (e) => {
    setIng((prevIng) =>( {
      ...prevIng, [e.target.name]: e.target.value
    }))
  }



  return (
    <div id='update-container'>
        <h1>Enter the values to be updated</h1>
    <input
    type='text'
    placeholder='orderby'
    name='orderby'
    onChange={handleChange}
    value={ing.orderby}
    />
    <input
    type='number'
    placeholder='patties'
    name='patties'
    onChange={handleChange}
    value={ing.patties}
    />
    <input
    type='number'
    name='salad'
    placeholder='salad'
    onChange={handleChange}
    value={ing.salad}
    />
    <input
    type='number'
    name='cheese'
    placeholder='cheese'
    onChange={handleChange}
    value={ing.cheese}
    />
    <br/>
    <br/>
    <input
    type='submit'
    onClick={handleUpdate}
    placeholder='Submit'
    />
    </div>
  )
}

export default Update
