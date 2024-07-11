import React from "react";
import Navbar from "../components/cotactAppbar.js";

export default function contact() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-4 border-end">side bar for chat member</div>
        <div className="col-8">
          <p>Find the mortgage you qualify for Now. without the hassle.</p>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="/images/Borrower.png" alt="profile-img" />
                <hr></hr>
                <p>i am Borrower searching for own mortgage solution...</p>
              </div>
              <div className="col-md-6">
                <img src="/images/Broker.png" alt="profile-img" />
                <hr></hr>
                <p>i am broker working on behalf of client...</p>
              </div>
              <div className="col-md-6">
                <img src="/images/Purchase.png" alt="profile-img" />
                <hr></hr>
                <p>I am looking to purchase a property..</p>
              </div>
              <div className="col-md-6">
                <img src="/images/Refi.png" alt="profile-img" />
                <hr></hr>
                <p>i am looking to refinance a property...</p>
              </div>
              <div className="col-md-6">
                <img src="/images/RefID.png" alt="profile-img" />
                <hr></hr>
                <p>Enter a reference number from a previous conversation...</p>
              </div>
              <div className="col-md-6">
                <img src="/images/LiveAgent.png" alt="profile-img" />
                <hr></hr>
                <p>tranfer me to a live agent now... </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
