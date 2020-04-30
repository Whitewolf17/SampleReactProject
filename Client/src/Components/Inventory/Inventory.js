import React from 'react';
import {$_GetAPI} from '../Util/ConnectionUtil'
import {InventoryView} from './InventoryView'

export default class Inventory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
                        "isLoading" : false,
                        "name" : "Suren",
                        "inventory" : []
                    }
    }
    loadInventory = ()=>{
       let promise =  $_GetAPI("http://localhost:9090/Inventory/getInventory","")
       promise.then((resp)=>resp.json())
              .then((result)=>{
                  console.log(result)
                 this.setState( ()=>({isLoading:false, inventory: result}) )
              })  
    }
    componentDidMount = ()=>{
        this.setState({isLoading:true})
        this.loadInventory();

    }
    render()
    {
      
        return (
            <div>
            {
                this.state.isLoading ? (<div> Loading.... </div>) :
                (<InventoryView value = {this.state} inventory = {this.state.inventory}/>)
            }
            </div>
            
        )
    }
}