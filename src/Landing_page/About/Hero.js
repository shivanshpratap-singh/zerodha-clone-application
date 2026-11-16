import React from "react";

function Hero() {
  return (
    <>
      <div className="containor">
        <div className="row mt-5 p-5 mb-5 fs-2 text-center">
          <h2>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>
      <div className="container  fs-5">
        <div
          className="row border-top p-5 mt-5 text-muted fs-2"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 mb-5 mt-5 ">
            <h4>
              {" "}
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
              <br />
              <br />
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
              <br />
              <br />
              Over 1.8+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </h4>
          </div>
          <div className="col-6 mt-5 mb-5 text-muted">
            <h4>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
              <br />
              <br />
              <a href="">Rainmatter</a>, our fintech fund and incubator, has
              invested in several fintech startups with the goal of growing the
              Indian capital markets.
              <br />
              <br />
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </h4>
          </div>
        </div>
      </div>
      <div className="containor">
        <div className="row  mt-5 mb-5">
          <h2 className=" mt-5 mb-5 text-center">People</h2>
          <div className="col-6 text-center">
            <img
              src="nithin-kamath.jpg"
              className=" mt-5"
              style={{ borderRadius: "100%", width: "40%" }}
            />
            <h4 className="mt-2"
            >Nithin Kamath</h4>
            <h5 className="text-muted mt-3">Founder, CEO</h5>
          </div>
          <div className="col-6 p-5 text-muted fs-2">
            <h4>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            
            </h4>
            <br/>
            <h4>
             He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
           </h4>
           <br/>
           <h4>
            Playing basketball is his zen. 
            </h4>
            <br/>
            <h4>Connect on <a href=""> Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
