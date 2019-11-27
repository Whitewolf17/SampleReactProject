//const fetch = require("node-fetch");
var data = require('../Data/Products.json');


    
    // initializeProducts = ()=>{
    //     let promise = fetch("../Data/Products");
    //     promise.then((resp) =>{
    //         resp.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         this.products = data;
    //     })

    // }


export let ProductUtil = {
    get getProducts(){
        return data.menu;
    },
    get getToppings(){
        return data.toppings;
    },
    get getBase(){
        return data.base;
    },
    getToppingById(id)
    {
        let toppings= data.toppings.filter((item)=> item.id==id);     
        return toppings[0];
    },
    getProdById(id)
    {
        let products= data.menu.filter((item)=> item.id==id);     
        return products[0];
    },
    getBaseById(id)
    {
        let bases= data.base.filter((item)=> item.id==id);     
        return bases[0];
    },
};
