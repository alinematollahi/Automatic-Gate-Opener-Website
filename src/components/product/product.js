import React from 'react';
import {Link} from 'react-router-dom';

export function Product({ data }) {
    return (
        <div className="card mt-5">
            <div className="container">
                <img src={data.pic} className="card-img-top" alt={data.title} />
                <div className="card-body">
                    <h5 classNameName="card-title"> {data.title}</h5>
                    <p className="card-text" style={{fontSize:20,color:'green',fontWeight:700}}>{'$ '+data.price}</p>
                    <Link to={"/detail/"+data.id}><span className="btn btn-primary">Show More</span></Link>
                </div>
            </div>
        </div>
    );
}