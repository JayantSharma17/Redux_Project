import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export function add_to_cart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}
export function remove_from_cart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}