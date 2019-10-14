import React, { Component } from "react";

class Product extends Component {
  state = {
    product_name:null,
    image:"",
    product_name:"",
    price:"",
    quantity:"",
    product_description:"",
  };

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.product_description}
            </p>
            <button
              onClick={this.props.onLike}
              type="button"
              className="btn btn-info"
            >
              Like{" "}
              <span className="badge badge-light">cccc</span>
            </button>
            {"  "}
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
 
}
export default Product;
