import React from 'react';

 let UserLogin  = (props)=>{

    return(
        <div>
            <h2>User Name : <input type="text" 
                                   name="userName"
                                   value={props.value.userName}
                                   onChange={props.onChange} /> </h2>

            <h2>Password : <input type="text" 
                                  name="password"
                                  value = {props.value.password}
                                  onChange = {props.onChange} /> </h2>
            <button onClick = {props.onLogin}> Login </button>    
        </div>
    )
}

export default UserLogin;