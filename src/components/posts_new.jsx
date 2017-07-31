import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/">
                        View Posts
                    </Link>
                </div>
                <form>
                    <Field 
                        label="Title For Post"
                        name="title"
                        component={this.renderField} />
                    <Field
                        label="Tags"
                        name="tags"
                        component={this.renderField} />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField} />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);