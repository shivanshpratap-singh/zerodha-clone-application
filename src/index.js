import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Homepage from './Landing_page/Home/Homepage';
import AboutPage from './Landing_page/About/AboutPage';
import ProductPage from './Landing_page/Products/ProductPage';
import SignUp from  './Landing_page/Signup/SignUp';
import PricingPage from './Landing_page/Pricing/PricingPage';
import Supportpage from  './Landing_page/Support/Supportpage';
import NotFound from './Landing_page/NotFound';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/Signup' element={<SignUp />}/>
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/Pricing' element={<PricingPage/>}/>
    <Route path='/Support' element={<Supportpage/>}/>
     <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
