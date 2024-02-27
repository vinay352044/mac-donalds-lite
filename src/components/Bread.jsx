import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cheese from "./Cheese";
import Patties from "./Patties";
import Salad from "./Salad";
import { Link, json } from "react-router-dom";
import Customhook from "./Customhook";
import useLocalStorage from "./useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import bgImage from '../assets/logo.jpg'

const Bread = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    id:crypto.randomUUID(),
    orderby:'',
    patties: 0,
    cheese: 0,
    salad: 0
  })
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  // const [orderIngredientsArr, setOrderIngredientsArr, getOrders] = useLocalStorage(
  //   'orders', // Key for localStorage
  //   [] // Initial value
  // );

  // let orders = localStorage.getItem("orders");
  const handleChange = (event) => {
    setData({ ...data, orderby: event.target.value });
  };
  const placeOrder = () => {
    // local storage procedure
    

    orders.push(data);

    localStorage.setItem('orders', JSON.stringify(orders));
  };
  
  const submitHandler = () => {
    if(data.orderby.trim()===''|| data.patties===0 && data.salad===0 && data.cheese===0){
      // alert("Please fill out all the fields and then place order")
      toast("Please fill out the name field and atleast one ingredient")
      return ;
    }
    placeOrder();
    orderHandler();
    toast("Order Placed")
    navigate('/orders')
  };
  // useEffect(() => {
  //   // const fromStorage = JSON.parse(localStorage.getItem("orders"));
  //   // console.log(fromStorage);
  //   // fromStorage ? setOrderIngredientsArr(fromStorage) : null;



  // }, []);

  const dispatch = useDispatch();
  const orderHandler = () => {
    // redux data manipulation
    dispatch({ type: "placeorder", payload: orders });
  };

  return (
    <div>
      <Link to="/orders">Orders</Link>
      <h1>Hey there create your Burger!!</h1>
      <input
        type="text"
        placeholder="name"
        value={data.orderby}
        onChange={handleChange}
        />
      <div className="shapes-container">
        
        <Cheese
          orderIngredients={data}
          setOrderIngredients={setData}
        />
        <Patties
          orderIngredients={data}
          setOrderIngredients={setData}
        />
        <Salad
          orderIngredients={data}
          setOrderIngredients={setData}
        />
        <ToastContainer/>
      </div>
      <button onClick={submitHandler}>Place Order</button>
    </div>
  );
};

export default Bread;
