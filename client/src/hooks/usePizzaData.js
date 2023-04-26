import { useQuery, useQueryClient } from "@tanstack/react-query";

import { request } from "../utils/axios-utils";
const fetchPizzaData = ({ queryKey }) => {
  const pizzaId = queryKey[1]; // position 1
  return request({ url: `/products-pizza/${pizzaId}` });
};

export const usePizzaData = (pizzaId) => {
  //   const queryClient = useQueryClient();
  //   console.log(queryClient.getQueryData(["pizza-products"]));
  //   return useQuery(["pizza", pizzaId], fetchPizzaData, {
  //     initialData: () => {
  //       const pizza = queryClient
  //         .getQueryData(["pizza-products"])
  //         ?.data?.data?.find((pizza) => pizza.id === parseInt(pizzaId));
  //       console.log(pizza);
  //       if (pizza) {
  //         return { data: pizza };
  //       } else {
  //         return undefined;
  //       }
  // },
  //   });
};
