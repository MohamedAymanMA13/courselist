import React from 'react';
const Form = (props) =>{
    return(
        <form onSubmit = {props.addCousre}>
            <input type='text' value ={props.current} onChange = {props.updateCousre} />
            <button type='submit'>Add Course</button>
        </form>
    )
}

export default Form

