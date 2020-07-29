import React from "react";
import { signinWithGoogle, auth } from "../firebase/firebase.utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.msg);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in-form">
        <h3 className="mr-bottom-20">Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="singinEmail">Email</label>
            <input
              type="email"
              name="email"
              id="singinEmail"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="btn-group">
            <button>sign in</button>
            <button onClick={signinWithGoogle}>sign in with Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
