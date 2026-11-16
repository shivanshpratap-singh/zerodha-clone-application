import React from "react";

function Universe() {
  return (
    <div className="container">
        <div className="row text-center mb-5 mt-5">
      <h1>The Zerodha Universe</h1>
      <p className="mt-4 mb-5 fs-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="col-4 p-3 mt-5">
        <img src="zerodhafundhouse.png"/>
        <p className="text-small text-muted mt-2">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
      

      </div>
       <div className="col-4 p-3 mt-5">
        <img src="sensibull-logo.svg" style={{width:"80%"}}/>
        <p className="text-small text-muted mt-5">Options trading platform that lets you create strategies,analyze positions,and examine data points like open interest ,Fll/Dll, and more. </p>
      
  

       </div>
        <div className="col-4 p-3 mt-5">
            <img src="tijori.svg"style={{width:"60%"}}/>
            <p className="text-small text-muted mt-4">Investments research platform that offers detailed insights on stocks ,sectors,supply chains,and more.</p>
      
    

        </div>
        <div className="col-4 p-3 mt-4">
              <img src="streak-logo.png"style={{width:"80%"}}/>
              <p className="text-small text-muted mt-4">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
      
        </div>
         <div className="col-4 p-3 mt-5">
                   <img src="smallcase-logo.png"style={{width:"60%"}}/>
                   <p className="text-small text-muted mt-4">Thematic investing platform that helps you invest in diversified  baskets of stocks on ETFs.</p>
      
        </div>
         <div className="col-4 p-3 mt-5">
                  <img src="ditto-logo.png" style={{width:"50%"}}/>
                  <p className="text-small text-muted mt-4">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
      
        </div>

        </div>
       
          <div className="container text-center ">
          
           <button className='btn btn-primary  mb-5 fs-4 mt-5' >Sign up for free</button>
    </div>
    
        </div>
  );


}

export default Universe;
