import React, { useState } from 'react';


export function CommentCreate(props) {

    let [state, setState] = useState({ comment: {}, errors: {} });

    const submitHandler = (event) => {
        
        event.preventDefault();

        if (formIsValid()) {
            alert('validam');
            props.onComment(state.comment);
            setState({ comment: {}, errors: {} });
        }
    }

    const formIsValid = ()=>{

        let errors = {};

        if(!state.comment.auther){
            errors.auther = 'Name is require';
        }
        if(!state.comment.text){
            errors.text = 'Text is require';
        }
        setState({...state,errors});
        return !(errors.auther || errors.text);
    }

    const changeHandler = (event) => {

        let formDate = { [event.target.name]: event.target.value };
        setState({ ...state, comment: { ...state.comment, ...formDate } });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Your Name</label>
                <br/>
                <input value={state.comment.auther || ''} onChange={changeHandler}  className="form-control" name="auther" type="text" />
                <small className="form-text text-danger">{state.errors.auther}</small>
            </div>
            <div className="form-group">
                <label>Your Comment</label>
                <textarea value={state.comment.text || ''} onChange={changeHandler} name="text" className="form-control" rows="4"></textarea>
                <small className="form-text text-danger">{state.errors.text}</small>
            </div>
            <button type="submit" className="btn btn-primary" style={{marginBottom:'5Vh',width:'20%'}}>Send Comment</button>
        </form>
    );
}