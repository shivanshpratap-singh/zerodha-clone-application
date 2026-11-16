import React from 'react';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function SignUp() {
    return ( 
        <>
        <div className='container mt-5 mb-5 text-center'>
            <div className='row'>
            <h1>Open a free demat and trading account online</h1>
            <p className='fs-3 mt-5 mb-5'>Start investing brokerage free and join a community of 1.8+ crore investors and traders</p>
</div>
        </div>

        <div className="container">
            <div clsassName="row">
                <div className="col-6">
                    <img src="account_open.svg" alt='SignUp' />

       </div> 
            <div className="col-6 ">
                <h2>Sign Up now</h2>
                <p>Or track your existing application</p>
                


        </div>
        </div>
   
        <OpenAccount/>
        </div>
        
        </>
     );
}

export default SignUp;