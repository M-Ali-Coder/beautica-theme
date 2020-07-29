import React from "react";
import { signinWithGoogle } from "../../firebase/firebase.utils";

class Register extends React.Component {
  render() {
    return (
      <div className="container user-registeration-page" autoComplete="off">
        <h1>new account</h1>
        <div className="content-wrapper">
          <div className="row">
            <div className="input-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname" id="fname" required />
            </div>
            <div className="input-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname" id="lname" required />
            </div>
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

            <button>create account</button>
          </div>

          <div className="sign-in-form">
            <form>
              <div className="input-group">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" required />
              </div>
              <div className="input-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" required />
              </div>

              <div className="btn-group">
                <button>sign in</button>
                <button onClick={signinWithGoogle}>sign in with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
