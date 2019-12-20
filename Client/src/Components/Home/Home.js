import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Order from '../Order/Order';
import Products from '../Products/Products';
import User from '../Users/Users';
import Menu from '../Menu/MenuView'
import UserContextConsumer from '../Login/UserContext'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import UserLogin from '../Login/UserLogin';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


const Home = (props)=>{
    //let userName = "guest";
    
      let userName = <UserContextConsumer>{(value)=>value}</UserContextConsumer>
      let history = useHistory();
      let onLogout = ()=>{       
        history.push("/");
      props.inValidateUser();
      }
    
    return(
        <Router basename="PizzaHut">
        <div>          
          <h2>Welcome to my Pizza Website - {userName} 
                  <Button variant="contained" color="primary" onClick={onLogout}>
                     Logout
                  </Button> </h2>
          {/* <nav>
          <ul>
            <li><Link to={'/users'}> Users </Link></li>
            <li><Link to={'/order'} className="nav-link">Orders</Link></li>
            <li><Link to={'/menu'} className="nav-link">Menu</Link></li>
            <li><Link to={'/products'} className="nav-link">Products Maintenance</Link></li>
          </ul>
          </nav> */}
          <Breadcrumbs aria-label="breadcrumb">
              <Link to={'/users'}> Users </Link>
              <Link to={'/order'} >Orders</Link>
              <Link to={'/menu'}>Menu</Link>
              <Link to={'/products'}>Products Maintenance</Link>
          </Breadcrumbs>
          
          <Switch>
            <Route exact path='/' component={UserLogin} />
            <Route path='/users' component={User} />
            <Route path='/order' component={Order} />
            <Route path='/menu' component={Menu} />
            <Route path='/products' component={Products} />
          </Switch>
        </div>
      </Router>
    )
}

export default withRouter(Home)