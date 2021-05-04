import { ADD_TO_CART } from './actions';
import { REMOVE_FROM_CART } from './actions';
import { ADD_QUANTITY } from './actions';
import { REDUCE_QUANTITY } from './actions';

export function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            const product = state.find(item => item.id === action.payload.id);
            if (product) {
                product.quantity++;
                const products = state.filter(item => item.id !== action.payload.id);
                return [...products, product]
            }
            action.payload.quantity = 1;
            return [...state, action.payload]


        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id)


        case ADD_QUANTITY:
            const theProduct = state.find(item => item.id === action.payload.id);
            theProduct.quantity++;
            const otherProducts = state.filter(item => item.id !== action.payload.id);
            return [...otherProducts, theProduct]

        case REDUCE_QUANTITY:
            const theProduct_reduce_Quantity = state.find(item => item.id === action.payload.id);
            if(theProduct_reduce_Quantity.quantity==1){
                return state.filter(item => item.id !== action.payload.id)
            }else{
                theProduct_reduce_Quantity.quantity--;
                const otherProducts_reduce_Quantity = state.filter(item => item.id !== action.payload.id);
                return [...otherProducts_reduce_Quantity, theProduct_reduce_Quantity]
            }
        default:
            return state;
    }
}