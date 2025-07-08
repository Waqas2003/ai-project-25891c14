import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetailsPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${match.params.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailsPage;