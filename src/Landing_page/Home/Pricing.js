import React from 'react';

function Pricing() {
    return (  
       
        <div className='containor mb-5 mt-5 p-10 '>
            <div className='row mx-4'>
            <div className='col-6 p-5'>
            <h1 className='mb-5 mt-5'lass >Unbeatable pricing</h1>
            <h4 className='mb-5 mt-10'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</h4>

            <a href='' className='mt-5 mb-5'>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>

            
        <div className='col-6 p-5 '>
            <div className='row '>
                <div className='col mb-10 p-5 '>

            <img src='pricing.svg'  />
            <h4>Free account opening</h4>
            </div>
            <div className='col mb-10 p-5 '>
          <img src='pricing.svg' />
          <h4> Free equity delivery
and direct mutual funds</h4>
</div>
          <div className='col mb-10 p-5 '>
           <img src='other-trades.svg'  />
           <h4> Intraday and

F&O
</h4>
        </div>
        </div>
         </div>
         </div>


        </div>
          

    );
}

export default Pricing;