import React, { Component } from 'react'
import fire from "./firebase/fire";



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
    }

    login = (event) => {
        this.setState({ id: this.state.id + 1 })



        const auth = fire.auth();
        const email = this.state.email;
        const pass = this.state.pass;
        auth.signInWithEmailAndPassword(email, pass).then((user) => {
            console.log("user successfully log-in");
           
        }).catch((error) => {
            this.setState({ err: error.message });

        })
    }
    signup = () => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).then((u) => {

        }).catch((err) => {
            console.log(err)
            this.setState({err:err.message})
        })
    }
   
    render() {
        return (
            <div style={{ textAlign: "center", margin: "3vh auto", color: "white", overflow: "auto" }}>
                I am from Authen Component<br></br>
                <input id="email" type="email" name="email" placeholder="enter your email" onChange={this.inputHandler} /><br />
                <input id="pass" type="password" name="pass" placeholder="enter your password" onChange={this.inputHandler} /><br />
                <br />
                <p>{this.state.err}</p>
                <button className="btn btn-success" onClick={this.login}>login</button>
                <button className="btn btn-info" onClick={this.signup}>sign-up</button>
               
            </div>
        )
    }
}
