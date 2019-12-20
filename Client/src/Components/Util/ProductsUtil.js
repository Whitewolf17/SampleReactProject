//const fetch = require("node-fetch");
//var data = require('../Data/Products.json');
var data = null;
let isProductsLoaded = false;
export let ProductUtil = {
    set isProductsLoaded(value)
    {
        isProductsLoaded = true;
    },
    get isProductsLoaded(){
        return isProductsLoaded;
    },
    setProducts(result)
    {
        data = result;
    },
    get getProducts(){
        console.log(data.menu);        
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
    initalizeProducts()
    {
        let promise = fetch("http://localhost:9090/Products/getProducts",
                            {
                                method:"GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            });
       return promise
    }
};
