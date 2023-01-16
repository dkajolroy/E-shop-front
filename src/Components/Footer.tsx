import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-3 col-6">
            <div className="d-flex flex-column">
              <Link to="/">Home</Link>
              <Link to="/">Product</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-column">
              <Link to="/">Community</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Chat</Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-column">
              <Link to="/">Help</Link>
              <Link to="/">Live Chat</Link>
              <Link to="/">Campaign</Link>
              <Link to="/">Message</Link>
              <Link to="/">Team</Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-column">
              <Link to="/">Hotline</Link>
              <Link to="/">Address</Link>
              <Link to="/">Lalmonihat BD</Link>
              <Link to="/">Payment</Link>
              <Link to="/">015xxxxxxxx</Link>
              <Link to="/">Bkash, Rocket, Nagat</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
