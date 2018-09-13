import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../actions/loginActions'

export class Login extends Component {
  constructor(props) {

    super(props)
    this.state = {
        email: '',
        password: ''
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.authenticate(this.state.email, this.state.password)
  }

  render() {
    return (
      <React.Fragment>
        <div className="mts-container-login">
          <div className="col-md-12">
            <div className="mts-title-login">
              <h2>Sign In</h2>
            </div>
            <form >
              <div>
                <input type="text" className="mts-input-email-login" name="email" placeholder="Email"  value={this.state.email} onChange={this.onChangeEmail}/>

                <input className="mts-input-password-login" type="password" name="password" placeholder="Password" value={this.state.passsword} onChange={this.onChangePassword} />

              </div>

              <div className="mts-buttons-login">
                <span className="form-group">
                    <button className="btn btn-dark" onClick={this.onSubmit} style={{float: 'left'}}>Login</button>
                </span>

                <span className="form-group">
                    <button className="btn btn-dark" style={{float: 'right'}}>Create an account</button>
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="forget-password" className="text-info"><a>Forget the password ?</a></label> 
              </div>

            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (email, password) => { dispatch(authenticate(email, password)) }
  }
}

export default connect(null, mapDispatchToProps)(Login)
