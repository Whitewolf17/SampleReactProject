import React from 'react';
import UserLogin from '../Login/UserLogin'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {UserContextProvider} from '../Login/UserContext'
import Home from '../Home/Home'

export class App extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={userName:"", password:"", isLoggedIn:false};
  }

  handleChange = (event)=>{
      let name = event.target.name;
      let value = event.target.value;
      this.setState({[name]:value})
  }

  onLogin = ()=>{
    console.log("Redirect")
      this.setState({isLoggedIn:true});
      //return  <Redirect  to="/Home" />
  }
  inValidateUser = ()=>{
    this.setState({isLoggedIn:false});
  }
  onLogOut = ()=>{
    this.setState({isLoggedIn:false});
    const { history } = this.props;
    history.push("/")
  }
  
  render()
  {
      return(
        
          <div>
            <Router>
              <Switch>
                <Route path='/home' >
                <UserContextProvider value={this.state.userName}>
                    <Home inValidateUser={this.inValidateUser} />
                </UserContextProvider>
                </Route>
              </Switch>
              {this.state.isLoggedIn ? <Redirect  to="/home" />: <UserLogin onChange = {this.handleChange} value={this.state} onLogin = {this.onLogin} onLogOut = {this.onLogOut} />}
            </Router>
            {/* <UserLogin onChange = {this.handleChange} value={this.state} onLogin = {this.onLogin} /> */}
            
             

          </div>
      )
  }
 
}