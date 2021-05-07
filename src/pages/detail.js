import React, { Component, Fragment } from "react";
import { CommentList, CommentCreate } from "../components/comment";
import { addToCart, cartStore, productService } from "../components/product";

export class DetailPage extends Component {
    state = { data: undefined }

    async componentDidMount() {
        let id = this.props.match.params.id;
        const { data } = await productService.getProductById(id);
        this.setState({ data });

        this.unsubscribe = cartStore.subscribe(()=>{
            console.log(cartStore.getState());
        });
    }

    addToCartHandler () {
        cartStore.dispatch(addToCart(this.state.data));
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    async submitComment(comment) {
        alert(comment.auther + ' ' + comment.text);
        let response = await productService.addComment(this.state.data.id, comment);

        if (response.status === 200) {
            alert('200');
            let gooz = await productService.getComments(this.state.data.id);
            alert(gooz.data);
            this.setState({ data: { ...this.state.data, comments: gooz.data } }) ;
        }
    }

    render() {
        const data = this.state.data;
        if (!data) {
            return <div>Loading...</div>
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="col-5">
                        <img src={data.pic} width="100%" />
                    </div>
                    <div className="col-7 mt-5">
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <div style={{fontSize:20,color:'green',fontWeight:700}}>{'$ '+data.price}</div>
                        <br/>
                        <button onClick={this.addToCartHandler.bind(this)} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 mx-auto" style={{border:'3px solid rgb(33, 33, 70)',borderRadius:'15px',marginBottom:'10vh'}}>
                        <span style={{fontSize:30,fontWeight:700 ,color:'rgb(33, 33, 70)',textAlign:'center',display:'block'}}>Users Comments</span>
                        <CommentList comments={data.comments || []} />
                        <hr className="my-5" />
                        <span style={{fontSize:30,fontWeight:700 ,color:'rgb(33, 33, 70)',textAlign:'center',display:'block'}}>Add New Comment</span>
                        <CommentCreate onComment={this.submitComment.bind(this)} />
                    </div>
                </div>

            </Fragment>
        );
    }
}