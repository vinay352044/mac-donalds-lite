import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Bread from './components/Bread'
import Orders from './components/Orders'
import Customhook from './components/Customhook'
import Update from './components/Update'


const App = () => {
  if(!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Bread/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/practice' element={<Customhook/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
