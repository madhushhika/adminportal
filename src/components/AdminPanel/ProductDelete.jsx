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

class ProductDelete extends React.Component {
  
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {   
        allProducts: [],
        modal1: false,
        modalShow:false,
      }
    }

    
async componentDidMount() {
    let {data} = await axios.get("http://localhost:5000/api/products");
    console.log("data",data);
    let productDetails = data.map(products => {
      return {
        product_id: products.product_id,
        product_name: products.product_name,
        product_description:products.product_description,
        image:products.image,
        price:products.price,
        quantity:products.quantity
      };
    });
    this.setState({ allProducts: productDetails });
  }
 
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  renderTableData() {
    return this.state.allProducts.map((prodct, index) => {
      
     
       return (
          <tr key={prodct.product_id}>
             <td class="table-category">{prodct.product_id}</td>
             <td class="table-category">{prodct.product_name}</td>
             <td><button class="Danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this Category?')) this.handleClick(prodct.product_id) }}>Delete </button></td>
         
          </tr>
       )
    })
 }


 handleClick = product_id => {

  const requestOptions = {
    method: 'DELETE'
  };

  fetch("http://localhost:5000/api/products/"+product_id, requestOptions).then((response) => {
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
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th >Product Description</th>
                    <th>Image </th>
                    <th>Price</th>
                    <th >Quantity</th>                                    
                  </tr>
                  </thead>
                  <tbody>
                    {this.renderTableData()}
                </tbody>
      </Table>         
    )
  }
 }

export default ProductDelete;