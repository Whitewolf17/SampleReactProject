import React from 'react';
import ReactDOM from 'react-dom';
import  './Order.css';
import CartView from './Cart/CartView'

let CustomizeMenu = (props)=>{
   
    return(
     <div>
        <h4>Select Base:
            <select name="baseSelected" onChange = {props.onChange} defaultValue = "0"> 
            <option value="0"> Select </option> 
            {props.value.pizzaBases.map((item)=> (<option key={item.id} value={item.id}>{item.name}</option>))}
             </select>
        </h4>

        <h4>Select Toppings:
            <select name="toppingSelected" onChange = {props.onChange} defaultValue = "0">       
            <option value="0"> Select </option>     
            {props.value.pizzaToppings.map((item)=> (<option key={item.id} value={item.id}>{item.name}</option>))}
            </select>
            <button onClick = {props.addTopping}>Add</button>
        </h4>
      {/* <h4> <label>Toppings Added : {props.value.toppings.map((item)=><span key={item}>{item} </span>) } </label> </h4> */}
      <h4> <label>Toppings Added : <span> {props.value.toppingsAdded.join(",")} </span> </label> </h4>
    </div>
    )
}

let NormalMenu = (props)=>{
    return(
        <h4>Select Pizza:
            <select onChange = {props.onChange} defaultValue = "0" name="itemSelected"> 
            <option value="0"> Select </option> 
            {props.value.pizzaMenus.map((item)=> (<option key={item.id} value={item.id}>{item.name}</option>))}
        </select>
        </h4>
    )
}

class OrderView extends React.Component
{
    constructor(props)
    {
        super(props);        
    }
    render()
    {
        return(
            <div>
            <div id="OrderDiv">
                <h4>Enter Name of the Order: 
                    <input type ="text" name="name" onChange = {this.props.onChange} value={this.props.value.name}/>
                </h4>

                <h4> Choose Build Type : 
                    <label> Menu : </label> <input type="radio" name = "option"  onChange = {this.props.onChange} value="Menu"/>
                    <label> Customize : </label> <input type="radio" name = "option" onChange = {this.props.onChange} value="Customize" />
                </h4>

                {
                    (this.props.value.option == "Menu") &&
                    <NormalMenu {...this.props} />                    
                }
                {
                    (this.props.value.option == "Customize") &&
                    <CustomizeMenu {...this.props} />                    
                }
             
                <h4> Quantity:
                    <label name="quantity">{this.props.value.quantity}</label>
                    <button id = "quantityInc" value = "Add" onClick={this.props.handleQuantity}>+</button>
                    <button id = "quantityDec" value = "Sub" onClick={this.props.handleQuantity}>-</button>
                </h4>

                <h4> Comments: 
                    <input type="text" name="comments" onChange = {this.props.onChange}  value = {this.props.value.comments}/>
                </h4>

                <button onClick={this.props.addToCart}> Add to cart</button>
                <button onClick={this.props.resetOrder}> New Order</button>

            </div>
                {
                  (this.props.value.showCart) ? <CartView 
                                items = {this.props.value.cartItems}
                                cartTotal = {this.props.cartTotal}
                                removeCartItem = {this.props.removeCartItem}
                                placeOrder = {this.props.placeOrder} /> : ""
                }
            </div>
        )
    }
}

export default OrderView;