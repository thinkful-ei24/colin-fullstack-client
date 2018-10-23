import React from 'react';
import {Link} from 'react-router-dom';
import LogInForm from './login-form.js';
import SignUpForm from './signup-form.js';
import './landing-nav.css';

export default class LandingNav extends React.Component {
  state = {
    LogInHidden:true,
    SignUpHidden: true
  }

  showHideLogIn() {
    this.setState({
      LogInHidden: !this.state.LogInHidden
    })
    if (this.state.SignUpHidden === false) {
      this.setState({SignUpHidden: true})
    }
  }

  showHideSignUp(e) {
    this.setState({
      SignUpHidden: !this.state.SignUpHidden
    })
    if (this.state.LogInHidden === false) {
      this.setState({LogInHidden: true})
    }
  }


  render() {
    return (<div>
      <button
        className="col-4 sign-in-button"
        type="button"
        onClick={() => this.showHideLogIn()}>Log In</button>
      {!this.state.LogInHidden && <LogInForm />}
      <button
        className="col-4 register-button"
        type="button"
        onClick={() => this.showHideSignUp()}>Sign Up</button>
      {!this.state.SignUpHidden && <SignUpForm />}
      <button
        className="col-4 explore-button"
      ><Link to={'/search'}>Explore!</Link></button>
    </div>
    )
  }
}

