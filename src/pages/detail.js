import React, { Component, Fragment } from "react";
import { CommentList, CommentCreate } from "../components/comment";
import { productService } from "../components/product";

export class DetailPage extends Component {
    state = { data: undefined }

    async componentDidMount() {
        let id = this.props.match.params.id;
        const { data } = await productService.getProductById(id);
        this.setState({ data })
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
                    <div className="col-7 mt-10">
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <div>{data.price}</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 mx-auto">
                        <CommentList comments={data.comments || []} />
                        <hr className="my-5" />
                        <CommentCreate onComment={this.submitComment.bind(this)} />
                    </div>
                </div>

            </Fragment>
        );
    }
}