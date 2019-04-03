import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"), //capital username in validation
    password: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    const options = { abortEarly: false }; //checking all errors
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) // mapping Joi array into an object
      errors[item.path[0]] = item.message;
    return errors;

    // --------------------------------------------
    // BASIC VALIDATION
    // const errors = {};

    // const { username, password } = this.state.account;
    // if (username.trim() === "") errors.username = "Username is required";
    // if (password.trim() === "") errors.password = "Password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); //otherwise in null
    if (errors) return;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // getting single key
    const schema = { [name]: this.schema[name] }; //single property
    const { error } = Joi.validate(obj, schema); //no abortEarly
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
