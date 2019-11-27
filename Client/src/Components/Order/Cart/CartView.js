import React from 'react';
import ReactDOM from 'react-dom';


class CartView extends React.Component
{
    constructor(props)
    {
      super(props);        
    }

    render()
    {
        //console.log(this.state.item);
        let items = this.props.items;
        return (
            <div id = "CartDiv">
                <table id="cartTable">
                    <thead>
                        <tr>
                            <td>Type </td> 
                            <td>Item Name </td>
                            <td> Quantity </td>
                            <td> Cost </td>
                            <td> Option </td>
                        </tr>
                    </thead>
                  {items.map((item)=>(
                      <tbody>
                        <tr>
                        <td>{item.itemType}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.quantity}</td>
                        <td>${item.cost}</td>
                        <td><button onClick={this.props.removeCartItem} value={item.itemId}>Remove</button></td>                      
                        </tr>
                      </tbody>
                  ))}
                    
                </table>
            <h3>Cart Total = ${this.props.cartTotal}</h3>
            <button onClick = {this.props.placeOrder}> Place Order </button>
            </div>
        )
    }
}


export default CartView;
