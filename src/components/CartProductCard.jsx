import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { OrderContext } from "../contexts/OrderContext";

function CartProductCard({ product }) {
  const { order, setOrder } = useContext(OrderContext);

  return (
    <Container>
      <Row className="my-2 d-flex align-items-center justify-content-center">
        <Col lg={1} className="d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            checked={order.products.includes(product)}
            onChange={(e) => {
              if (e.target.checked) {
                setOrder({
                  ...order,
                  products: [...order.products, product],
                });
              } else {
                setOrder({
                  ...order,
                  products: order.products.filter(
                    (orderProduct) => orderProduct !== product
                  ),
                });
              }
            }}
          ></input>
        </Col>
        <Col lg={5}>
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "80px" }}
              className="mx-2"
            />
            <span className="mx-2 inline">{product.title}</span>
          </div>
        </Col>
        <Col lg={2}>
          <p>${product.price}</p>
        </Col>
        <Col lg={2}>
          <p>{product.quantity}</p>
        </Col>
        <Col lg={2}>
          <p>
            ${(
              (typeof product.price === "string"
                ? parseFloat(product.price.replace("$", ""))
                : product.price) * product.quantity
            ).toFixed(2)}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CartProductCard;
