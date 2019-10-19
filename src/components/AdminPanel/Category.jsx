import React from "react";
import { MDBRow, MDBCol, MDBBtn ,MDBModal,MDBModalHeader,MDBModalBody,MDBInput,MDBModalFooter} from "mdbreact";
import {
  Container,
  Progress,
  Table,
  Row
} from 'reactstrap';
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../styles/category.css"
import Modal from "../AdminPanel/modifyModal"

class Category extends React.Component {
  
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {   
        allCategories: [],
        modal1: false,
        modalShow:false,

      }
    }

    
async componentDidMount() {
    let {data} = await axios.get("http://localhost:5000/api/categories");
    console.log("data",data);
    let CategoryDetails = data.map(categories => {
      return {
        Category_id: categories.Category_id,
        category_Name: categories.category_Name,
       
      };
    });
    this.setState({ allCategories: CategoryDetails });
  
  }
 
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  setModalShow(Category_id,CategoryName){
    this.setState({ modalShow: true });
    this.openModal(Category_id,CategoryName);
  }

  cancelModal(){
    this.setState({ modalShow: false });
  }
  renderTableData() {
    return this.state.allCategories.map((cat, index) => {
      localStorage.setItem("Categoryid",cat.Category_id);
      console.log("category",cat.category_Name);
       return (
          <tr key={cat.Category_id}>
             <td class="table-category">{cat.Category_id}</td>
             <td class="table-category">{cat.category_Name}</td>
             <td><button class="Danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this Category?')) this.handleClick(cat.Category_id) }}>Delete </button></td>
          {/*    <td><button class="modify" onClick={() => this.setModalShow()}>Modify</button></td>   */}
             <Modal id="1"
                show={this.state.modalShow}
                cancel={() =>this.cancelModal}
                Categoryid={localStorage.getItem("Categoryid")}
                CategoryName={cat.category_Name}
              />           
          </tr>
       )
    })
 }
 openModal(Category_id,CategoryName){

 }
/*  openModal(Category_id,CategoryName){
  
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
              defaultValue={Category_id}
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
              defaultValue={CategoryName}
              />
            </div>
       </form>       
      </Modal.Body>
      <Modal.Footer>
      <button class="modify">Submit</button>
      <button class="Danger" onClick={this.props.cancel}>Cancel</button>
      </Modal.Footer>
    </Modal>
  
 } */
 handleClick = Category_id => {
  console.log("Categoryinside ",Category_id);
  const requestOptions = {
    method: 'DELETE'
  };

  fetch("http://localhost:5000/api/categories/"+Category_id, requestOptions).then((response) => {
    return response.json();
  }).then((result) => {  
    console.log("Category Deleted",result);
    window.location.reload();
  });
}

render(){
return(
        <Table hover responsive className="table d-sm-table" >
                 <thead className="thead-light">
                  <tr>
                    <th >Category Id</th>
                    <th>Category Name</th>
                    <th >Delete</th>
                                      
                  </tr>
                  </thead>
                  <tbody>
                    {this.renderTableData()}
                </tbody>
      </Table>         
    )
  }
 }

export default Category;