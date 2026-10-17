import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Eduction from './Eduction';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Homepage() {
    return (  
        <>
         <Navbar/>
          < Hero/>
           < Awards/>
          < Stats/>
          < Pricing/>
          < Eduction/>
          <OpenAccount/>
          <Footer/>

        </>
    );
}

export default Homepage;