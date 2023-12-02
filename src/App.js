
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Product from './Product.js';

import Cart from './ListCard.js';
import { DataProvider } from './context/DataContext.js';

import Head from './Head.js';

function App() {






  return (

    <>
      <DataProvider>
        <Navbar />
        <Head />
        <br></br><br></br><br></br>
        <Routes>

          <Route path='/' element={<div className='container'>
        <div className='row'>
        
           <Product/>
          <br></br>
        </div>
        </div>} />


          <Route path='/cart' element={<div className='cart-container'>
            <div className='popup'>
              <Cart />
            </div></div>} />



        </Routes>


      </DataProvider>

    </>





  );
}

export default App;