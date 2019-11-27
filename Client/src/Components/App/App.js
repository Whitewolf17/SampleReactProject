import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Order from '../Order/Order';
import Products from '../Products/Products';
import User from '../Users/Users';
import Home from '../Home/Home';
import Menu from '../Menu/MenuView'
export const App = ()=>{
    return(
        <Router>
        <div>
          <h2>Welcome to my Pizza Website</h2>
          <nav>
          <ul>
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/users'}> Users </Link></li>
            <li><Link to={'/order'} className="nav-link">Orders</Link></li>
            <li><Link to={'/menu'} className="nav-link">Menu</Link></li>
            <li><Link to={'/products'} className="nav-link">Products Maintenance</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={User} />
            <Route path='/order' component={Order} />
            <Route path='/menu' component={Menu} />
            <Route path='/products' component={Products} />
          </Switch>
        </div>
      </Router>
    )
}