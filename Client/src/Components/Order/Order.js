import React from 'react';
import ReactDOM from 'react-dom';
import OrderView from './OrderView'

class Order extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state({name:""});
    }
    handleChange = (event)=>{
        console.log(event.target.value);
        
        this.setState({name:event.target.value})
    }
    render()
    {
        return (
        <div>
         <h2> Order Component </h2>
         <OrderView onChange={this.handleChange} />
         </div>
        )
    }
}

export default Order;