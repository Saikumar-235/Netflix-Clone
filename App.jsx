import React from 'react'
import Signin from './Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

const App = () => {
  return (
   <> 

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route index element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/>
   </Routes>
   </BrowserRouter>


   </>
  )
}

export default App