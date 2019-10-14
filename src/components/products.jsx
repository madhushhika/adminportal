import React, { Component } from "react";
import Product from "./product";
import axios from "axios";
class Products extends Component {
  state = {
    allProducts: []
  };

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
  }

  render() {
    return (
        <div className="container">
        <h1>All Toys!!!</h1>
        <div className="row">
          {this.state.allProducts.map(product => (
            <div className="col-sm" key={product.product_id}>
              <Product
                key={product.product_id}
                product_name={product.product_name}
                product_description={product.product_description}
                image={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <br></br><br></br>
      </div>
    );
  }
}

export default Products;