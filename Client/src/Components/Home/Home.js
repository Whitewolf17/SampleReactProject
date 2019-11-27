import React from 'react';
import UserLogin from '../Login/UserLogin'
import {UserContextProvider} from '../Login/UserContext'

class Home extends React.Component
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
        this.setState({isLoggedIn:true});
        
    }
    
    render()
    {
        return(
            <div>
                <h2>This is a Sample website developed in React to handle Pizza Ordering</h2>
                {(!this.state.isLoggedIn)&&<UserLogin onChange = {this.handleChange} value={this.state} onLogin = {this.onLogin} />}

            </div>
        )
    }
   
}

export default Home