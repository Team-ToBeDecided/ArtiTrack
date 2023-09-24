import React from "react";
import { Typography, Button } from "@material-tailwind/react";
// import ProductCard from "../components/ProductCard/ProductCard";

const ProductCard = ({ image, description, price }) => {
  return (
    <div className="flex flex-col items-center justify-center duration-500 hover:scale-110">
      <div className="w-64 h-64">
        <img
          src={image}
          alt="Product"
          className="object-cover w-full h-full "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Typography
          color="Black"
          className="text-2xl font-semibold text-center"
        >
          {description}
        </Typography>
        <Typography
          color="Black"
          className="text-2xl font-semibold text-center"
        >
          {price}
        </Typography>
      </div>
    </div>
  );
};

export const Products = () => {
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
