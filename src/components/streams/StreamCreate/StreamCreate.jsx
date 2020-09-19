import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../../actions/actions.root';

class StreamCreate extends Component {
    
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input autoComplete="off" {...input} />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        console.log("onSubmit -> formProps", formValues)
        this.props.createStream(formValues)
        console.log("this.props" , this.props)
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form >
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors
}
const formWrapped = reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamCreate);


export default connect(null, { createStream })(formWrapped)