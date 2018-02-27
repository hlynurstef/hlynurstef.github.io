import React from 'react';

const Form = (props) => {
    return (
        <form className="form-search" onSubmit={props.getMovie}>
            <button>Search</button>
            <span><input type="text" name="title" placeholder="Movie Title" /></span>
            
        </form>
    );
}

export default Form;