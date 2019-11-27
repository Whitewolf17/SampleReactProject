import React from 'react';
import ReactDOM from 'react-dom';
import ProductMaintenance from  './ProductsView'
import { ProductUtil } from '../Util/ProductsUtil';

/* React Concept -  Lifting State Up */
class Products extends React.Component
{
    constructor(props)
    {
        super(props)
        this.products = ProductUtil.getProducts
        this.bases = ProductUtil.getBase
        this.toppings = ProductUtil.getToppings
        this.product = {id:"" ,name : "", price :""}
        this.base = {id:"" ,name : "", price :""}
        this.selectedBase = {id:"" ,name : "", price :""}
        this.state = {
            showActions : false,
            action : "add",
            showProducts : false,
            showProductModification : false,
            showBases : false,
            showToppings : false,
            products : this.products,
            bases : this.bases,
            toppings : this.toppings,
            product : {id:"" ,name : "", price :""},
            base : {id:"" ,name : "", price :""},
            selectedBase: {id:"" ,name : "", price :""},
        }
    }
    showMaintenanceActions = ()=>{
        this.setState({showActions:true})
    }
    showProducts = (event)=>{
        let action = event.target.value;
        if(action =="Products")
        {
            this.setState({showProducts:true,showBases:false, showToppings:false})
        }
      
    }

    showBases = ()=>{
        this.setState({showProducts:false,showBases:true, showToppings:false})
    }
    addBase = ()=>{      
        console.log("On Add Base") 
        let base = {id:"" ,name : "", price :""}
        this.setState({showProducts:false,showBases:true, showToppings:false,action : "add", base:base})
       // this.setState({showCart: showCart, cartItems:cartItems},()=>{ this.calculateTotal();})
    }
    modifyBase = ()=>{       
        console.log("On Modify Base") 
        let base = this.state.selectedBase;
        this.setState({showProducts:false,showBases:true, showToppings:false,action : "modify", base:base})
    }
    onBaseNameChange = (event)=>{
        let name = event.target.value;  
        this.setState(prevState => ({
            base: {                   
                ...prevState.base,   
                name: name      
            }
        }))

    }
    onBasePriceChange = (event)=>{
        let price = event.target.value;  
        this.setState(prevState => ({
            base: {                   
                ...prevState.base,   
                price: price      
            }
        }))

    }

    addProduct = ()=>{
        console.log("Add Product")
        let product = {id:"" ,name : "", price :""}
        this.setState({showProducts:true,showBases:false, showToppings:false, showProductModification : true, product:product, action : "add"})
        
    }
    modifyProduct = ()=>{
        console.log("Modify Product")
        this.setState({showProducts:true,showBases:false, showToppings:false, showProductModification : true, action : "modfiy"})
    }
    onProductNameChange = (event)=>{
        let prodName = event.target.value;
     //   this.product.name = prodName;
        this.setState(prevState => ({
            product: {                   // object that we want to update
                ...prevState.product,    // keep all other key-value pairs
                name: prodName       // update the value of specific key
            }
        }))
    }
   onProductCostChange = (event)=>{
    let prodCost = event.target.value;
   // this.product.price = prodCost;
    this.setState(prevState => ({
        product: {                   // object that we want to update
            ...prevState.product,    // keep all other key-value pairs
            price: prodCost       // update the value of specific key
        }
    }))
    }
    onSelectProduct = (event) =>{
        let product = ProductUtil.getProdById(event.target.value);
      //  this.product = product;
        this.setState({product:product})
    }
    onSelectBase = (event) =>{
        let base = ProductUtil.getBaseById(event.target.value);
        this.setState({base:base, selectedBase:base})
    }
  
    saveProduct = ()=>{
        let action = this.state.action;
        console.log(action)
        if(action =="add")
        {
           let product = this.state.product;
           let products = this.state.products
           product.id = (products.length) +1;
           this.state.products.push(product)
            console.log(`Save Product - ${JSON.stringify(this.state.products)}`)
            this.setState({showProducts:true,
                            showBases:false,
                            showToppings:false, 
                            showProductModification : false, 
                            product:this.product})
        }
        else
        {
             let modifyPordId = this.state.product.id;
             let products = this.state.products;
             let index = products.findIndex((obj => obj.id == modifyPordId));
             products[index] = this.state.product; 
             this.setState({products:products});  
        }    

    }

    saveBase = ()=>{
        let action = this.state.action;
        console.log(action)
        if(action =="add")
        {
           let base = this.state.base;
           let basese = this.state.bases;
           base.id = (basese.length) +1;
           this.state.bases.push(base)
           console.log(`Save Product - ${JSON.stringify(this.state.bases)}`);
           this.setState({showProducts:false,
            showBases:true,
            showToppings:false, 
            showProductModification : false, 
            base:this.base})           
        }
        else
        {
            console.log("Inside Else");
            
             let modifybaseId = this.state.base.id;
             let bases = this.state.bases;
             let index = bases.findIndex((obj => obj.id == modifybaseId));
             bases[index] = this.state.base; 
             this.setState({bases:bases});  
        }    
    }
    render()
    {
        
        return (
            <ProductMaintenance
             showMaintenanceActions = {this.showMaintenanceActions}
             showProducts = {this.showProducts}
             addProduct = {this.addProduct}
          //   onProductChange= {this.onProductChange}
             saveProduct = {this.saveProduct}
             modifyProduct = {this.modifyProduct}
            // onModifyProdChange = {this.onModifyProdChange}
             onSelectProduct = {this.onSelectProduct}
             onProductCostChange = {this.onProductCostChange}
             onProductNameChange = {this.onProductNameChange}
             showBases = {this.showBases}
             onBaseNameChange = {this.onBaseNameChange}
             onBasePriceChange = {this.onBasePriceChange}
             onSelectBase = {this.onSelectBase}
             saveBase = {this.saveBase}
             addBase = {this.addBase}
             modifyBase = {this.modifyBase}
             value = {this.state} />
        )
    }
}

export default Products;