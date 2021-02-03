import React, { Component } from "react";
import { auth } from "./firebase/fire";
import authenStyle from "../assets/styles/authen.module.css";

export default class Authen extends Component {
  state = {
    id: "",
    email: "",
    pass: "",
    err: "",
  };

  inputHandler = (event) => {
    if (event.target.name === "email")
      this.setState({ email: event.target.value });
    else if (event.target.name === "pass") {
      this.setState({ pass: event.target.value });
    }
  };

  login = (e) => {
    e.preventDefault();
    this.setState({ id: this.state.id + 1 });

    const email = this.state.email;
    const pass = this.state.pass;
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {})
      .catch((error) => {
        this.setState({ err: error.message });
      });
  };
  signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.pass)
      .then((u) => {})
      .catch((err) => {
        console.log(err);
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div className={authenStyle.ext_div}>
        <div className={authenStyle.center_div}>
          <div className={authenStyle.main_div}>
            <h2>
              Login to <span style={{ fontWeight: "bolder" }}>ToDo App</span>
            </h2>
            <h3>***</h3>
            <form>
              <fieldset>
                <legend>Email</legend>
                <input
                  type="email"
                  name="email"
                  onChange={this.inputHandler}
                  value={this.state.email}
                />
                <legend>Password</legend>
                <input
                  type="password"
                  name="pass"
                  onChange={this.inputHandler}
                  value={this.state.pass}
                />
              </fieldset>

              <button
                className={authenStyle.button}
                type="submit"
                onClick={this.login}
              >
                Login
              </button>
              <button
                className={authenStyle.button}
                type="submit"
                onClick={this.signup}
              >
                Signup
              </button>
            </form>
            {this.state.err && (
              <h4 style={{ marginTop: "10px", color: "red" }}>
                {this.state.err}
              </h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}
