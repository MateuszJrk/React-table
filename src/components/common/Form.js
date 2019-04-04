import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false }; //checking all errors
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {}; //adding property to an object
    for (let item of error.details) // mapping Joi array into an object
      errors[item.path[0]] = item.message;

    return errors;

    // --------------------------------------------
    // BASIC VALIDATION
    // const errors = {};

    // const { username, password } = this.state.data;
    // if (username.trim() === "") errors.username = "Username is required";
    // if (password.trim() === "") errors.password = "Password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // getting single key
    const schema = { [name]: this.schema[name] }; //single property of schema
    const { error } = Joi.validate(obj, schema); //no abortEarly
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); //otherwise in null
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
