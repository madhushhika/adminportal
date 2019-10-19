import React from "react";
import { MDBTable,MDBDataTable,MDBTableBody, MDBTableHead,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact"; 
import SectionContainer from "../../components/SectionContainer"
import "../../styles/category.css";
import axios from 'axios';
import { Table} from 'reactstrap';
import ImageUploader from 'react-images-upload';
 
class Product extends React.Component {
    constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {   
        allProducts: [],
        product_id:"",
        product_description: "",
        product_name:"",
        price:"",
        image:"",
        }
      }
       
async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/products");
        console.log(data);
        let productsArray = data.map(product => {
          return {
            product_id: product.product_id,
            product_description: product.product_description,
            product_name: product.product_name,
            price: product.price,
            image: product.image,
          };
        });
        this.setState({ allProducts: productsArray });
    console.log("data",productsArray);
  }
  renderTableData() {
    return this.state.allProducts.map((product_details, index) => {
        return(

            <tr key={product_details.product_id}>
            <td class="table-category">{product_details.product_id}</td>
            <td class="table-category">{product_details.product_name}</td>
            <td class="table-category">{product_details.product_description}</td>      
            <td class="table-category">{product_details.price}</td>
            </tr>
             )
    })
 }
 submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandlerDes= event =>{
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandler = event => {
    this.setState({product_name: event.target.value });
    alert(this.state.product_name)
  };
  
  changeHandlerprice = event =>{
    this.setState({ product_description: event.target.value });
    alert(this.state.product_description)
  }
   savaProductDetails(){

  }
 /*   ProductPOst(opts) {
    ChromeSamples.log('Posting request to  API...');
    fetch('http://localhost:5000/api/products', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      ChromeSamples.log('Created Gist:', data.html_url);
    });
  } */

  render(){
  return (
<div class="section">
 
     <div align="center">
     <MDBRow >
     <MDBCol md="4" className="mb-3">
     <form>
         <label class="table-category">Product Name</label>
         <input
                value={this.state.product_name}
                name="product_name"
                onChange={this.changeHandler}
                type="text"
                id="product_name"
                className="form-control"
                placeholder="Product name"
                required
              />
          <label class="table-category">Description</label>
          <input
                value={this.state.product_description}
                name="product_description"
                onChange={this.changeHandlerDes}
                type="text"
                id="product_description"
                className="form-control"
                placeholder="Description"
                required
              />
          <label class="table-category">Price</label>
          <input
                value={this.state.price}
                name="price"
                onChange={this.changeHandlerprice}
                type="text"
                id="price"
                className="form-control"
                placeholder="price"
                required
              />
          <ImageUploader
                value={this.state.image}
                name="image"
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          <button type="submit"  onClick={() => this.savaProductDetails()}className="btn btn-primary btn-md btn-center">
            Add New
            </button>
        </form>
        </MDBCol>
        <MDBCol md="8" >        
        <Table>
        <thead  className="thead-light">
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>                   
                  </tr>
                  </thead>
                
                  <tbody>
                    {this.renderTableData()}
                </tbody>
                 
      </Table> 
        </MDBCol>  
        </MDBRow>
     </div>
     </div>
  );
};
}

export default Product;
