import React from "react";

const Register = () => {
  return (
    <form className="container user-registeration-page" autoComplete="off">
      <h1>new account</h1>
      <div className="content-wrapper">
        <div className="row">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="cofirmPassword">Confirm Password</label>
            <input type="password" name="cofirmPassword" id="cofirmPassword" required />
          </div>
          <div className="input-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" required />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" required />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label htmlFor="address-one">Address Line 1</label>
            <input type="text" name="address-one" id="address-one" />
          </div>
          <div className="input-group">
            <label htmlFor="address-two">Address Line 2</label>
            <input type="text" name="address-two" id="address-two" />
          </div>
          <div className="input-group">
            <label htmlFor="city">city</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="input-group">
            <label htmlFor="compony">Company Name</label>
            <input type="text" name="compony" id="compony" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>
      </div>
      <button>create account</button>
    </form>
  );
};

export default Register;
