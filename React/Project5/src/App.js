import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      successAlertVisible: false,
      errorAlertVisible: false
    };

    this.initialState = this.state;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.setAlertVisible = this.setAlertVisible.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const message = this.state;
    axios
      .post("http://localhost:3001/message", message)
      .then((res) => {
        console.log(res.data);
        this.resetForm();
        this.setAlertVisible("success");
      })
      .catch((err) => {
        console.log(err);
        this.setState({errorAlertVisible: false});
        this.setAlertVisible("error");
      });
  }

  setAlertVisible(alertType) {
    alertType === "success"
      ? this.setState({ successAlertVisible: !this.state.successAlertVisible })
      : this.setState({ errorAlertVisible: !this.state.errorAlertVisible });
  }

  resetForm() {
    this.setState(this.initialState);
  }

  setSuccessAlertVisible() {
    this.setState({ successAlertVisible: !this.state.successAlertVisible });
  }

  setErrorAlertVisible() {
    this.setState({ errorAlertVisible: !this.state.errorAlertVisible });
  }

  render() {
    return (
      <div className="App container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="first-name">*First Name:</Label>
            <Input
              type="text"
              id="first-name"
              name="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="last-name">*Last Name:</Label>
            <Input
              type="text"
              id="last-name"
              name="lastName"
              required
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">*Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
          <Button color="danger" className="ml-3" onClick={this.resetForm}>
            Reset
          </Button>
        </Form>
        <Alert
          color="primary"
          className="mt-3"
          isOpen={this.state.successAlertVisible}
          toggle={() => this.setAlertVisible("success")}
        >
          Message Received!
        </Alert>
        <Alert
          color="danger"
          className="mt-3"
          isOpen={this.state.errorAlertVisible}
          toggle={() => this.setAlertVisible("error")}
        >
          Message not received!
        </Alert>
      </div>
    );
  }
}

export default App;
