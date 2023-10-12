import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import { productA, productB, productC, productD, productE } from "../assets";

const Cart = createContext();
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: 1,
  //   name: "Product A",
  //   price: 19.99,
  //   image: productA,
  //   inStock: true,
  //   fastDelivery: false,
  //   ratings: 4,
  // }));

  const products = [
    {
      id: 1,
      name: "Product A",
      price: 19.99,
      image: productA,
      inStock: true,
      fastDelivery: false,
      ratings: {
        stars: 4,
        count: 45,
      },
    },
    {
      id: 2,
      name: "Product B",
      price: 29.99,
      image: productB,
      inStock: false,
      fastDelivery: true,
      ratings: {
        stars: 3,
        count: 30,
      },
    },
    {
      id: 3,
      name: "Product C",
      price: 29.99,
      image: productC,
      inStock: false,
      fastDelivery: true,
      ratings: {
        stars: 3,
        count: 30,
      },
    },
    {
      id: 4,
      name: "Product D",
      price: 29.99,
      image: productD,
      inStock: false,
      fastDelivery: true,
      ratings: {
        stars: 3,
        count: 30,
      },
    },
    {
      id: 5,
      name: "Product E",
      price: 29.99,
      image: productE,
      inStock: false,
      fastDelivery: true,
      ratings: {
        stars: 3,
        count: 30,
      },
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
