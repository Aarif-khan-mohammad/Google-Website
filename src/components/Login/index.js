import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from  'js-cookie'
import './index.css'

class Login extends Component {
  state = {username:"" , password:"" , showError:false , errorMsg:""}

  onSubmitSuccess = (jwtToken)=>{
    Cookies.set("jwt_token" , jwtToken , {expires: 30})
    const {history} = this.props
    history.replace("/")
  }

  onSubmitFailure = (errorMsg)=>{
    this.setState({
      showError:true ,errorMsg 
    })
  }

  submitForm = async (event)=>{
    event.preventDefault()

    const {username, password} = this.state;
    const userDetails = {username , password};
    const url = "https://apis.ccbp.in/login"
    const options = {
      method : "POST",
      body : JSON.stringify(userDetails),
    }

    const response = await fetch(url , options)
    const data = await response.json();

    if(response.ok === true){
      this.onSubmitSuccess(data.jwt_token)
    }else{
      this.onSubmitFailure(data.error_msg)
    }
  }

  onInputUsername = (event)=>{
    this.setState({username : event.target.value})
  }

  onInputPassword = (event)=>{
    this.setState({password : event.target.value})
  }


  render(){
    const {username , password , errorMsg , showError} = this.state
    const jwtToken = Cookies.get("jwt_token");
    if(jwtToken !== undefined){
      return <Redirect to="/"/>
    }
  return (
    <>
      <div className='login'>
        <div className='login-container'>
          <h2 className='log-head'>Login</h2>
          <form className='login-form' onSubmit={this.submitForm}>
            <label htmlFor='username' className='username'>Username</label><br/>
            <input type='text' id='username' value={username} placeholder="Enter your name" onChange={this.onInputUsername} /><br/>
            <label htmlFor='password'  className='password'>Password</label><br/>
            <input type='password' id='password' value={password} placeholder="Enter your password" onChange={this.onInputPassword} /><br/>
            <button type='submit' className='button'>Enter</button>
            {showError && <p className='error'>{errorMsg}</p> }
          </form>
        </div>
      </div>
    </>
  )
}
}
export default Login
