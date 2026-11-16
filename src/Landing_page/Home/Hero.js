import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <img src='heropage.svg' alt='Hero'  className='mb-5'/>

        <h1 className='mt-5 mb-5'>Invest in everything</h1>
        <h4>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.

</h4>
     <button  className='p-2 btn btn-primary fs-5 color:blue mb-5 mt-5' style=  {{width:"30%" ,margin:"0 auto" }}>Sign Up For Free</button>

      </div> 
        </div>
      );
}

export default Hero;