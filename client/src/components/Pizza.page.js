import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../utils/axios-utils";
import Card from "react-bootstrap/Card";
import { usePizzaData } from "../hooks/usePizzaData";

export const PizzaPage = () => {
  const { pizzaId } = useParams();
  const { data } = usePizzaData(pizzaId);
  console.log({ data });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{data?.data?.name}</Card.Title>
        <Card.Text>
          Ingredients:
          <br />
          {data?.data?.ingredients}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
