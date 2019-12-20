import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './ProductTable.js'
import {BasePopup} from './BasePopup.js'
import  Button from '@material-ui/core/Button';
import './Products.css'

let Toppings = (props)=>{
    return(
        <div id="toppingTable">
            <ProductTable collection ={props.value.toppings} onSelect = {props.onSelectBase} />
        </div>
    )
}
let Bases = (props)=>{
   // console.log(props)
return(
    <div>
        <div id="baseContent">
              <div id="baseDataTable">  
                 <ProductTable collection ={props.value.bases} onSelect = {props.onSelectBase} />
             </div>
             <div id="baseBtnFooter">
             <BasePopup {...props} /> 
            </div>
        </div>
    </div>
 )
}


let ShowProductModification = (props)=>{
   //console.log(props.value)
    return(
        <div>
            <h3> <label> Product Name </label> <input type = "text" name="productName" onChange = {props.onProductNameChange} value= {props.value.product.name}/> </h3>
            <h3> <label> Product Cost </label> <input type = "text" name="productCost" onChange = {props.onProductCostChange} value= {props.value.product.price}/> </h3>
            <Button variant="outlined" onClick={props.saveProduct} color="primary">
                {props.value.action == "add"?"Add Product" : "Modify Product"}
            </Button>
            {/* <h3> <button onClick = {props.saveProduct}> {props.value.action == "add"?"Add Product" : "Modify Product"}</button> </h3> */}
        </div>
    )
}
let Products = (props)=>{
    let products = props.products;
    
    return(
        <div>
            <div id="productContent">
                <ProductTable collection ={products} onSelect = {props.onSelectProduct} />
                <div id="productFooter">
                    <Button variant="outlined" onClick={props.addProduct} color="primary">
                         Add New Product
                    </Button>
                    <Button variant="outlined" onClick={props.modifyProduct} color="primary">
                         Modify Product
                    </Button>
                  
                </div>
            </div>
            <div id ="productModification">
                {
                    (props.value.showProductModification)&&<ShowProductModification {...props} />
                }
            </div>
        </div>
    )
}
class ProductMaintenance extends React.Component
{
    render()
    {
        return (
        <div id="mainDiv">
            <h2> Product Maintenance </h2>
            <input type="radio" name="option" value="Products" onClick={this.props.showProducts}/> Products
            <input type="radio" name="option" value="Bases" onClick={this.props.showBases} /> Bases
            <input type="radio" name="option" value="Toppings" onClick={this.props.showToppings} /> Toppings
            {
                (this.props.value.showProducts)&& <Products 
                                                    products={this.props.value.products}
                                                    value = {this.props.value}
                                                    addProduct = {this.props.addProduct}
                                                    saveProduct = {this.props.saveProduct}
                                                    modifyProduct = {this.props.modifyProduct}
                                                    onSelectProduct = {this.props.onSelectProduct}
                                                    onProductCostChange = {this.props.onProductCostChange}
                                                    onProductNameChange = {this.props.onProductNameChange}
                                                     />
            }

            {
                (this.props.value.showBases)&& <Bases value = {this.props.value}
                                                     onSelectBase = {this.props.onSelectBase}
                                                     onBaseNameChange = {this.props.onBaseNameChange}
                                                     onBasePriceChange = {this.props.onBasePriceChange}
                                                     saveBase = {this.props.saveBase}
                                                     addBase = {this.props.addBase}
                                                     modifyBase = {this.props.modifyBase} />
            }

            {
                (this.props.value.showToppings)&& <Toppings value = {this.props.value} />
            }
        </div>
        )
    }
}

export default ProductMaintenance;