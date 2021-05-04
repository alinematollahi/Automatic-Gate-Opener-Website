import React from 'react';
import { cartStore, removeFromCart, addQuantity, reduceQuantity } from '../product';

export function Cart({ products }) {

    if (!products || !products.length) {
        return (
            <div style={{ marginTop: '30vh', fontSize: 40 }} className="text-center">Cart is Empty</div>
        )
    }

    const removeHandler = (product) => {
        cartStore.dispatch(removeFromCart(product))
    }

    const addQuantityHandler = (product) => {
        cartStore.dispatch(addQuantity(product))
    }

    const reduceQuantityHandler = (product) => {
        cartStore.dispatch(reduceQuantity(product))
    }

    return (

        <div className="row">
            <div className="col9">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Title</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img width="50" src={product.pic} />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <span onClick={() => reduceQuantityHandler(product)} style={{ marginRight: 20, cursor: 'pointer' }}>-</span>
                                        <span>{product.quantity}</span>
                                        <span onClick={() => addQuantityHandler(product)} style={{ marginLeft: 20, cursor: 'pointer' }}>+</span>
                                    </td>
                                    <td>
                                        <button onClick={() => removeHandler(product)} className="btn btn-danger">Remove</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <div className="col3 mx-auto">
                <table className="table table-dark" style={{ marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th scope="col">SUMMERY</th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr>
                            <th scope="row">Subtotal</th>
                            <td>{products.subtotal}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tax(5%)</th>
                            <td>Jacob</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: 25 }}>Total</th>
                            <td colspan="2"> </td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-3 mb-2 bg-dark text-white" style={{ marginTop: 0 }}>
                    <button
                        style={{ width: '100%' }}
                        class="btn btn-primary" type="button"
                    >
                        Checkout
                        </button>
                </div>
            </div>
        </div>
    )
}