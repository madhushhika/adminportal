import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Product from '../../components/product';

class ActionFigures extends Component {

    state = {
        allProducts: []
    };

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:5000/api/products/category/4");
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
        <Container>
            <h1 style={{color:"#fff"}} align="center">Action Figures</h1>
            <Row align="center">
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
            </Row>
        </Container>
    );
  }
}

export default ActionFigures;