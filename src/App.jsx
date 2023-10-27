import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemNav from './components/ItemNav/ItemNav'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Distribuidora KHG"}/>}/>   
          <Route path='/item/:prodId' element={<ItemDetailContainer/>}/> 
          <Route path='/category/:categoryId' element={<ItemNav/>}/>              
        </Routes>        
      </BrowserRouter>
    </>
  )    
}

export default App
