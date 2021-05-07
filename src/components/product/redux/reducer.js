import { ADD_TO_CART } from './actions';
import { REMOVE_FROM_CART } from './actions';
import { ADD_QUANTITY } from './actions';
import { REDUCE_QUANTITY } from './actions';

var subtotal = 0 ;

export function cartReducer(state = [subtotal], action) {
    switch (action.type) {
        case ADD_TO_CART:
            const product = state.find(item => item.id === action.payload.id);
            if (product) {
                product.quantity++;
                subtotal = subtotal + action.payload.price;
                const products = state.filter(item => item.id !== action.payload.id && item.id);
                return [...products, product , subtotal]
            }
            action.payload.quantity = 1;
            subtotal = subtotal+ action.payload.price;
            const products_add = state.filter(item =>item.id)
            return [...products_add, action.payload , subtotal]


        case REMOVE_FROM_CART:
            subtotal = subtotal - (action.payload.price * action.payload.quantity);
            const products_remove = state.filter(item => item.id !== action.payload.id && item.id);
            return [...products_remove, subtotal]


        case ADD_QUANTITY:
            const theProduct = state.find(item => item.id === action.payload.id);
            theProduct.quantity++;
            subtotal = subtotal + action.payload.price;
            const otherProducts = state.filter(item => item.id !== action.payload.id && item.id);
            return [...otherProducts, theProduct , subtotal]

        case REDUCE_QUANTITY:
            const theProduct_reduce_Quantity = state.find(item => item.id === action.payload.id);
            if(theProduct_reduce_Quantity.quantity==1){
                const products_reduce = state.filter(item => item.id !== action.payload.id && item.id);
                subtotal = subtotal - action.payload.price;
                return [...products_reduce, subtotal]
            }else{
                theProduct_reduce_Quantity.quantity--;
                subtotal = subtotal - action.payload.price;
                const otherProducts_reduce_Quantity = state.filter(item => item.id !== action.payload.id && item.id);
                return [...otherProducts_reduce_Quantity, theProduct_reduce_Quantity , subtotal]
            }
        default:
            return state;
    }
}