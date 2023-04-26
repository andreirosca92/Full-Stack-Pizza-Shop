import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../utils/axios-utils";
import Card from "react-bootstrap/Card";

export const PizzaPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { pizzaId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await request({
          url: `/products-pizza/${pizzaId}`,
        });
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Ingredients:
          <br />
          {data.ingredients}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
