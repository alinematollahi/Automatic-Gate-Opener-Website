import React, { Component } from 'react';
import { cartStore } from '../product';

export class CartIcon extends Component {
    state = {};

    componentDidMount(){
        cartStore.subscribe(()=>{
            this.setState({count: cartStore.getState().length });
        })
    }

    render(){
        return (
            <div style={{marginRight:30}}>
                <img src='/pictures/cart.png' width='30' className="mt-20" />
                {this.state.count>0 &&
                <span style={{position:'absolute',marginTop:-5,marginLeft:-10}} className="badge badge-danger badge-pill">
                    {this.state.count}
                </span>
                }
            </div>
        );
    }
}
