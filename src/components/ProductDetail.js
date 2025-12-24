import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './Cart';

const ProductDetail = () => {
  const { id } = useParams(); 
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center my-5"><h3>Loading details...</h3></div>;
  if (!product) return <div className="text-center my-5"><h3>Product not found.</h3></div>;

  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.title} style={{ maxHeight: "400px", objectFit: "contain" }} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h6 className="text-uppercase text-muted">{product.category}</h6>
          <h2 className="display-6 fw-bold">{product.title}</h2>
          <p className="lead fw-bolder">Rating: {product.rating?.rate} ⭐</p>
          <h3 className="my-4 text-primary">${product.price}</h3>
          <p className="text-secondary mb-4">{product.description}</p>
          
          <button className="btn btn-dark px-4 py-2 me-3" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link to="/" className="btn btn-outline-dark px-4 py-2">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;