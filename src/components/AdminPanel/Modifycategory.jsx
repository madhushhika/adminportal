import React from "react";
import { MDBTable,MDBDataTable,MDBTableBody, MDBTableHead,MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact"; 
import SectionContainer from "../../components/SectionContainer"
import "../../styles/category.css";
import axios from 'axios';
import { Table} from 'reactstrap';
import ImageUploader from 'react-images-upload';
 
class Modifycategory extends React.Component {
    constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {   
        allCategories: [],
        Category_id:"",
        category_Name: "",
        
        }
      }
       
async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/categories");
        console.log(data);
        let categoriesArray = data.map(categories => {
          return {
            Category_id: categories.Category_id,
            category_Name: categories.category_Name
         
          };
        });
        this.setState({ allCategories: categoriesArray });
    console.log("data",categoriesArray);
  }
  renderTableData() {
    return this.state.allCategories.map((categoriesArray, index) => {
        return(

            <tr key={categoriesArray.Category_id}>
            <td class="table-category">{categoriesArray.Category_id}</td>
            <td class="table-category">{categoriesArray.category_Name}</td> 
            </tr>
            )
    })
 }
 submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
     <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
         <label class="table-category">Category Id</label>
         <input
                value={this.state.Category_id}
                name="Category_id"
                onChange={this.changeHandler}
                type="text"
                id="Category_id"
                className="form-control"
                placeholder="Category id"
                required
              />
          <label class="table-category">Category Name</label>
          <input
                value={this.state.category_Name}
                name="CategoryName"
                onChange={this.changeHandler}
                type="text"
                id="CategoryName"
                className="form-control"
                placeholder="Category Name"
                required
              />
          
          <button type="submit" className="btn btn-primary btn-md btn-center">
            Update
         </button>
         <button type="submit" className="btn btn-primary btn-md btn-center">
              Add new
         </button>
        </form>
        </MDBCol>
        <MDBCol md="8" >        
        <Table>
        <thead  className="thead-light">
                  <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                                       
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

export default Modifycategory;
