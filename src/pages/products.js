import React, { Component } from 'react';
import { ProductList } from "../components/product";
import { productService } from "../components/product";



export class ProductPage extends Component {
    state = { products: [] };

    async componentDidMount() {
        const response = await productService.getProducts();
        this.setState({ products: response.data });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <ProductList products={this.state.products} />
                </div>
            </div>

        );
    }
};
