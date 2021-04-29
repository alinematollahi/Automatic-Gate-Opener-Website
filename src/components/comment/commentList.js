import React from 'react';
import {CommentItem} from './commentItem'

export function CommentList ({comments}) {
    if(!comments.length){
        return <div className="text-center">There is no comment yet!</div>
    }
    return (
<ul>
    {comments.map((comment,index)=>(
<li key={index}>
<CommentItem {...comment}/>
</li>
    ))}
</ul>
    );
}