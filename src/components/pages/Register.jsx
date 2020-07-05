import React from "react";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuht = null;

  componentDidMount() {
    // Track current user login state
    this.unSubscribeFromAuht = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuht();
  }

  render() {
    return (
      <div className="container user-registeration-page" autoComplete="off">
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
                <button className="google-btn" onClick={signInWithGoogle}>
                  Sign in with Google
                  <FaGoogle />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
