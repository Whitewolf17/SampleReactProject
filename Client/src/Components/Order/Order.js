import React from 'react';
import ReactDOM from 'react-dom';
import OrderView from './OrderView'
import {ProductUtil} from '../Util/ProductsUtil';
import {PostAPI} from '../Util/ConnectionUtil'


class Order extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("Is Product Loaded - " + ProductUtil.isProductsLoaded)
        this.state= {
                name:"",
                comments:"",
                quantity:0,
                option: "",
                toppingSelected : "",
                baseSelected : "",
                itemSelected : "",
                toppings:[],
                toppingsAdded :[],
                pizzaMenus:[],
                pizzaBases:[],
                pizzaToppings:[],
                showCart : false,
                cartItems:[],
                cartTotal:0,
                isLoaded:false };
        //TODO: Need to implement a service call to fetch this
        // this.pizzaMenus = ProductUtil.getProducts;
        // this.pizzaBases = ProductUtil.getBase;
        // this.pizzaToppings = ProductUtil.getToppings;
        //this.cartTotal = 0;  
       
    }
    componentDidMount()
    {
        console.log("Component did mount")
        if(!ProductUtil.isProductsLoaded)
        {
          let promise = ProductUtil.initalizeProducts();
          promise
          .then((resp) =>resp.json()) 
          .then((result)=>{
              console.log(result);
              ProductUtil.isProductsLoaded=true;
              ProductUtil.setProducts(result);
              this.pizzaMenus = ProductUtil.getProducts;
              this.pizzaBases = ProductUtil.getBase;
              this.pizzaToppings = ProductUtil.getToppings;
              this.setState({pizzaMenus:this.pizzaMenus, pizzaBases:this.pizzaBases, pizzaToppings:this.pizzaToppings, isLoaded:true}); 
          })
        }
        else
        {
          this.pizzaMenus = ProductUtil.getProducts;
          this.pizzaBases = ProductUtil.getBase;
          this.pizzaToppings = ProductUtil.getToppings;
          this.setState({pizzaMenus:this.pizzaMenus, pizzaBases:this.pizzaBases, pizzaToppings:this.pizzaToppings, isLoaded:true}); 
        }
       
       
    }
    handleChange = (event)=>{
        const target = event.target;
      //  const value =  target.value;
        const value =  target.type === 'radio' ? target.value : target.value;
        const name = target.name;
     //   console.log("In Handle Change -  " +value);
        this.setState({
          [name]:value
        });
      }

     handleQuantity = (event)=>{
       let value= event.target.value; 
       let qty = this.state.quantity;   
       let result = (value=="Add")? ++qty : --qty;
       if(result<0)result = 0;
       this.setState({quantity: result});
       //console.log(result)
     } 

     addToCart = ()=>{
         let cartItems = this.state.cartItems;
         let item = {};
         
         if(this.state.option == "Menu")
         {
            let product = ProductUtil.getProdById(this.state.itemSelected);
            item.itemType = this.state.option;
            item.itemDescription = product.name;
            item.quantity = this.state.quantity;
            item.cost = this.state.quantity*parseFloat(product.price);
            item.itemId = cartItems.length+1;
            item.buildType = this.state.option;
            item.pizzaMenuId = product.id;
           
         } 
         else if (this.state.option == "Customize")  
         {
           let base = ProductUtil.getBaseById(this.state.baseSelected);
           let toppings = this.state.toppings;
           let qty = this.state.quantity;
           let toppingsCost = 0;
           let toppingsId = [];           
           let description = "Customized Pizza : "
           for (let topping  of toppings)
           {
              toppingsCost+= parseFloat(topping.price);
              description += topping.name +",";
              toppingsId.push(toppings.id);
           }
           let cost = qty* (toppingsCost+parseFloat(base.price));
           item.itemType = this.state.option;
           item.itemDescription = description;
           item.quantity = qty;
           item.cost = cost;
           item.itemId = cartItems.length+1;
           item.buildType = this.state.option;
           item.baseId = base.id;
           item.toppingsId = toppingsId;

         }  
         cartItems.push(item);
         console.log(`Item Added in the Cart ${JSON.stringify(item)}`)
         this.setState({showCart: true, cartItems:cartItems});
         //this.resetOrderComponent();
        // console.log(ProductUtil.getToppings);
        this.calculateTotal();
     }
     calculateTotal = ()=>{
       let cartItems = this.state.cartItems;
       let total = 0;
       for (let item of cartItems)
       {
          total += item.cost;
       }
       console.log(`Total ${total}`)
       this.setState({cartTotal:total});
     }
     removeCartItem = (event)=>{
        let itemId = event.target.value;
        let cartItems = this.state.cartItems;
        cartItems = cartItems.filter((item)=> item.itemId!=itemId)
        let showCart = true;
        if(cartItems.length==0)
        {
          showCart = false;
        }
        this.setState({showCart: showCart, cartItems:cartItems},()=>{ this.calculateTotal();}) //Will make sure State update is over and then calculate the total

     }
     placeOrder = ()=>{
       let order = {};
       order.customerName = this.state.name;
       order.cartTotal = this.state.cartTotal;
       order.cartItems = this.state.cartItems;
       console.log(JSON.stringify(order));
       let promise = PostAPI("http://localhost:9090/Order/saveOrder",order);
       promise.then((resp)=> resp.text())
              .then((orderId) => {
                 alert(`Order Placed Successfully. Your Order Id is ${orderId}`)  
                 resetOrderComponent();               
              });
     }
     addTopping = (event)=>{
       let toppings = this.state.toppings;
       let toppingsAdded = this.state.toppingsAdded;
       let topping = ProductUtil.getToppingById(this.state.toppingSelected)
       toppings.push(topping);
       toppingsAdded.push(topping.name);
       this.setState({toppings :toppings, toppingsAdded:toppingsAdded })
      // console.log(topping);
     }
     resetOrderComponent = ()=>{
       console.log("Reset Order Component")
          this.setState({ name:"",
          comments:"",
          quantity:0,
          option: "",
          toppingSelected : "",
          baseSelected : "",
          itemSelected : "",
          toppings:[],
          toppingsAdded :[],
          showCart : false,
          cartItems:[],
          cartTotal:0})
           
        }    

     
    render()
    {
      
        return (
        <div>
        {
           this.state.isLoaded? (<OrderView onChange={this.handleChange}
            pizzaMenus = {this.pizzaMenus}
            pizzaBases = {this.pizzaBases}
            handleQuantity = {this.handleQuantity}
            addToCart = {this.addToCart}
            pizzaToppings = {this.pizzaToppings}
            addTopping = {this.addTopping}
            value={this.state}
            cartTotal = {this. state.cartTotal}
            removeCartItem = {this.removeCartItem}
            resetOrder = {this.resetOrderComponent}
            placeOrder = {this.placeOrder} />) : (<div> Loading... </div>)
         }
         
         </div>
        )
    }
}

export default Order;