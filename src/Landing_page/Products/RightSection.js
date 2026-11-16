import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className='mt-3 p-5'>
              <a href={learnMore}>Learn More</a>
            </div>
          </div>
          <div className='col-6'>
            <img src={imageUrl} alt='right' />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;