import React from "react";
import { Typography, Button } from "@material-tailwind/react";

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
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
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
        {/* <div className="flex flex-row justify-between gap-10 mt-10">
          
        </div> */}
      </div>
    </>
  );
};

// export const ProductCard = () => {
//   return (
//     <>
//       <div className="h-[32rem] flex flex-col">
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="object-cover w-full h-full mb-5"
//         />
//         <div className="flex flex-col gap-2 mt-3">
//             <div className="h-[2px] bg-Bamboo w-24"/>
//           <Typography color="Black" className="text-2xl">
//             Product Discription
//           </Typography>
//           <Typography color="Black" className="text-xl font-semibold">
//             ₹ 1000
//           </Typography>
//           </div>
//       </div>
//     </>
//   );
// };

const ProductCard = ({ image, description, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={image} alt={description} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{description}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
