import React from 'react'
import { useDispatch } from 'react-redux'
import Orders from './Orders'
import { useNavigate,Link } from 'react-router-dom'
import { returnPaginationRange } from '../utils/appUtils'
const Compo = ({id,orderby,patties,cheese,salad}) => {
  
  const navigate = useNavigate()
  const orders = JSON.parse(localStorage.getItem('orders'))
  const dispatch = useDispatch()
  
  const handleCancel = (id) => {
    const newOrders = orders.filter((order) => {
      return order.id !== id;
    });
    dispatch({type:'removeorder',payload:newOrders});
    localStorage.setItem('orders', JSON.stringify(newOrders));
    // setOrders(newOrders)
    // setData(newOrders);
  };
  const handleUpdate = () => {
    navigate(`/update/${id}`)
  }
  return (
    
    
    <div className='table-container'>
      <table>
        <tbody>
          <tr>
          <th>Id</th>
          <th>Order By</th>
          <th>Cheese</th>
          <th>Patties</th>
          <th>Salad</th>
          <th>Remove Order</th>
          <th>Update Order</th>
          </tr>
          <tr>
            
            <td>{id}</td>
            <td>{orderby}</td>
          <td>{cheese}</td>
          <td>{patties}</td>
          <td>{salad}</td>
          <td><button onClick={() => handleCancel(id)}>Remove Order</button></td>
          <td><button onClick={handleUpdate}>Update Order</button></td>
          </tr>
      {/* <div className='circle'>{patties}</div>
      <div className='rectangle'>{cheese}</div>
      <div className='triangle'>{salad}</div> */}

      {/* <button onClick={() => handleCancel(id)}>Remove Order</button> */}
      {/* <button onClick={handleUpdate}>Update Order</button> */}
      </tbody>
      </table>
    </div>
  )
}

export default Compo
