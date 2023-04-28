import React from "react";
import { usePizzasData } from "../hooks/usePizzasData";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
export const ProductsPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };
  const { data, error, isLoading } = usePizzasData(onSuccess, onError);
  console.log({ data });
  if (isLoading) {
    return <h2>Loading data...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Products Pizza</h2>
      <br />
      <Container fluid={true}>
        <Row
          id="row_products"
          style={{
            display: "inline-flex",
          }}
          className="justify-content-around"
        >
          {data?.data?.map((pizza) => {
            return (
              <Card item={pizza} key={pizza.id}>
                {" "}
                <Card.Body>
                  <Figure>
                    <Figure.Image
                      width={300}
                      height={300}
                      alt={pizza.name}
                      src={pizza.url}
                    />
                    <Figure.Caption>{pizza.name}</Figure.Caption>
                    <br />
                    <br />
                    <br />
                    <Card.Text>
                      <Link to={`/products-pizza/${pizza.id}`}>
                        <Card.Text key={pizza.id}>Ingredients</Card.Text>
                      </Link>
                    </Card.Text>
                    <Card.Text>
                      {pizza.price} {pizza.currency}
                    </Card.Text>
                    <br />
                    <Button variant="primary">Buy</Button>
                  </Figure>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>

      {/* <div>
        {data.map((pizza) => (
          <div className="item" key={pizza.id}>
            <h2>{pizza.name}</h2>
            <img
              src={`${pizza.url}`}
              alt={`${pizza.description}`}
              key={pizza.id}
            />
            <p key={pizza.id}>{pizza.ingredients}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};
