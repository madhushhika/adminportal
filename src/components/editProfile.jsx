import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class EditProfile extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    telephone: "",
    password: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div align="center">
          <h1>Edit Profile</h1>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="text"
              >
                Name
              </label>
              <input
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <div className="invalid-feedback">
                Please provide a valid Email.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Address
              </label>
              <input
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="address"
                placeholder="address"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Telephone
              </label>
              <input
                value={this.state.telephone}
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="telephone"
                placeholder="Telephone"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Password
              </label>
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default EditProfile;