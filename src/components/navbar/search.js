import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export function Search() {

    const [state, setState] = useState();
    const history = useHistory();

    const submitHandler = (event) => {
        event.target.reset();
        event.preventDefault();
        history.push('/products/?q='+state);
    }

    return (
        <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search" placeholder="Search"
                aria-label="Search"
                onChange={(event) => setState(event.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
            </button>
        </form>
    )
}