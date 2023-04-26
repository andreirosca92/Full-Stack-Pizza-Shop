import { request } from "../utils/axios-utils";
import { useQuery } from "@tanstack/react-query";

const fetchPizzaProducts = () => {
  return request({ url: "/products-pizza" });
};
export const usePizzasData = (onSuccess, onError) => {
  return useQuery(["pizza-products"], fetchPizzaProducts, {
    onSuccess,
    onError,
  });
};
