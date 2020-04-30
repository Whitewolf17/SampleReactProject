import React from 'react';
import InventoryTable from './InventoryTable'

 export let InventoryView = (props)=>{
    console.log(props.inventory)
    return(
       <InventoryTable collection = {props.inventory} />
    )
}
