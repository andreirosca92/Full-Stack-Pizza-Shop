import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const fetchPizzaProducts = () => {
  return request({ url: "/products-pizza" });
};
export const usePizzasData = (onSuccess, onError) => {
  return useQuery(["pizza-products"], fetchPizzaProducts, {
    onSuccess,
    onError,
  });
};
