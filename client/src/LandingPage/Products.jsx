import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import ProductCard from "../components/ProductCard/ProductCard";

export const Products = () => {
  return (
    <>
      <div className="px-16 py-16">
        <div className="flex flex-row justify-between">
          <Typography color="Black" className="text-3xl font-semibold">
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
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            description="Product Discription"
            price="1000"
          />
        </div>
      </div>
    </>
  );
};
