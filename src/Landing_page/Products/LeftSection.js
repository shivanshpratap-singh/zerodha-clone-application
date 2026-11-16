import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <>
  <div className="container mt-5">
    <div className="row ">
      <div className="col-6 ">
        <img src={imageUrl}/>

      </div>
      <div className="col-6 mt-5 p-5">
        <h1>{productName}</h1>
        <p> {productDescription}</p>
        <div className="mt-3 mx-2">
        <a href={tryDemo}>Try Demo</a>
        <a href={learnMore}>Learn More</a>
        </div>
        <div className="mt-3 mx-2 ">
        <a href={googlePlay}><img src="google-play-badge.svg"/></a>
        <a href={appStore}><img src="appstore-badge.svg"/></a>
        </div>
      </div>
    </div>

  </div>
  </>;
}

export default LeftSection;
