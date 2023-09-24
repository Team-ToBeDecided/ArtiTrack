import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants/basUrl";
import ProductCard from "../components/ProductCard/ProductCard";

export const Products = () => {
  const [products, setProducts] = React.useState([]);
  const getProducts = async () => {
    const response = await axios.get(BASE_URL + "/products/product/")
    console.log(response.data)
    setProducts(response.data)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <div className="px-16 py-16">
        <div className="flex flex-row justify-between">
          <Typography color="Black" className="text-3xl font-heading semibold font-">
            Trending & New
          </Typography>
          <Button
            className="rounded-none"
            variant="outlined"
            size="lg"
            ripple={false}
          >
            See All
          </Button>
        </div>
        <div className="grid gap-10 mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
    </>
  );
};
