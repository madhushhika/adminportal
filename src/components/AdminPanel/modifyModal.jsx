import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class modifyModal extends React.Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
       
      <Modal
        id ={this.props.id}
        show={this.props.show}
        onHide={this.props.onHide}
        className={this.state.modalTypeCss}
        bsSize="small"
        backdrop={this.props.backdrop}
        Categoryid={this.props.Categoryid}
        CategoryName={this.props.CategoryName}
       
        >
            
    
        <Modal.Header closeButton>
          <Modal.Title>Update Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
            <div md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="text"
                 >
                Category ID
              </label>
              <input
                value={this.state.CategoryID}
                name="CategoryID"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder={this.props.Categoryid}
                required
               />
                <label
                htmlFor="defaultFormRegisterNameEx"
                className="text"
                >
                Category Name
              </label>
              <input
                value={this.state.CategoryName}
                name="CategoryName"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                defaultValue={this.props.CategoryName}
                required
                />
              </div>
         </form>       
        </Modal.Body>
        <Modal.Footer>
        <button class="modify">Submit</button>
        <button class="Danger" onClick={this.props.cancel}>Cancel</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

modifyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default modifyModal;