import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Users extends React.Component
{
    render()
    {
        console.log("User Component rendering")
        return <h2> User Component </h2>
    }
}

//export default Users;
export default withRouter(Users)