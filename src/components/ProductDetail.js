import { useParams } from 'react-router-dom';
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const { state: { products }, dispatch } = CartState();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === id);
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card className="product-image-card">
            <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="mb-3">{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ₹ {product.price.split(".")[0]}
            </Card.Subtitle>
            <Card.Text>
              <strong>Rating: </strong>
              <Rating rating={product.ratings} />
            </Card.Text>
            <Card.Text>
              <strong>Description: </strong>
              <p>{product.description}</p>
            </Card.Text>
            <Card.Text>
              {product.fastDelivery ? (
                <div className="text-success">Fast Delivery</div>
              ) : (
                <div className="text-warning">4 days delivery</div>
              )}
            </Card.Text>
            <Button
              variant={product.inStock ? "primary" : "secondary"}
              onClick={() =>
                dispatch({
                  type: product.inStock ? "ADD_TO_CART" : "REMOVE_FROM_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
