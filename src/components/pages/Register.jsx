import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import Signin from "../Signin";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    // check if password === confirmPassword
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      // Clear fields
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="container user-registeration-page" autoComplete="off">
        <div className="content-wrapper">
          <div className="row">
            <h3 className="mr-bottom-20">Create Account</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="displayName">Display Name</label>
                <input
                  type="text"
                  name="displayName"
                  id="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button type="submit">create account</button>
            </form>
          </div>

          <Signin />
        </div>
      </div>
    );
  }
}

export default Register;
