export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY ='ADD_QUANTITY';
export const REDUCE_QUANTITY ='REDUCE_QUANTITY';

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function addQuantity(product){
    return {
        type: ADD_QUANTITY,
        payload: product
    }
}

export function reduceQuantity(product){
    return {
        type: REDUCE_QUANTITY,
        payload: product
    }
}