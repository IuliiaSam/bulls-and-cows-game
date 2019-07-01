import React from 'react';
import { connect } from 'react-redux';
import { change, clear } from '../redux/actions/inputAction';
import { onSubmit } from '../redux/actions/submitAction';
import './Form.css';

const Form = ({ input, change, clear, onSubmit, generatedNumbers }) => {
    const onFormSubmit = (e) => {
        onSubmit(e, input, generatedNumbers);
        clear();
    }
    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input type='text' className='input' onChange={change} value={input} maxLength='4'></input>
            <button className='button' type='submit'>Go</button>
        </form>
    );
};

function MSTP(state) {
    return {
        input: state.input,
        generatedNumbers: state.generatedNumbers,
    }
};

function MDTP(dispatch) {
    return {
        change: function (e) {
            dispatch(change(e))
        },
        onSubmit: function (e, input, generatedNumbers) {
            e.preventDefault();
            dispatch(onSubmit(input, generatedNumbers));
        },
        clear: function () {
            dispatch(clear())
        }
    }
};

export default connect(MSTP, MDTP)(Form);