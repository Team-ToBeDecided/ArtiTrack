import { Button, Typography, Carousel } from "@material-tailwind/react";
import React from "react";
import { Box } from "@mui/material";
import landingBg from '../assets/random/landingBg.svg'

export const Feature = () => {
  return (
    <>
      <div className="items-center lg:flex">
        <Box sx={{
          backgroundColor:'#BD7A32',
          backgroundImage: `url(${landingBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} className="lg:w-1/2 sm:w-full h-[90vh] flex flex-col justify-center items-center lg:justify-start md:flex-col sm:flex-col sm:justify-center lg:p-36 md:p-10">
          <div className="flex flex-col lg:gap-5 sm:gap-10 lg:mt-10 xs:gap-10 xs:p-4 lg:flex-col lg:items-start sm:justify-center">
            {/* <h1 className="text-5xl text-white">Feature</h1> */}
            <Typography color="white" className="text-5xl font-semibold">
              Welcome to Our
              <Typography color="white" className="text-5xl font-extrabold">
                ODOP Platform
              </Typography>
            </Typography>
            <Typography
              color="white"
              className="max-w-lg font-light text-md"
            >
              Identifying unique products from each district, promoting local
              craftsmanship, and preserving cultural heritage. Providing artisans
              with training, resources, and market access to enhance product
              quality and competitiveness. Facilitating collaborations between
              artisans, businesses, and government agencies to foster sustainable
              growth.
            </Typography>
            <Button
              className="rounded-none bg-Charcoal w-36"
              size="lg"
              ripple={false}
            >
              Shop Now
            </Button>
          </div>
        </Box>
        <div className="flex items-center justify-center m-5 lg:w-1/2 sm:w-full">
          <div className="h-[70vh] w-96">
            <CarouselCustomNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="object-cover w-full h-full"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="object-cover w-full h-full"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="object-cover w-full h-full"
      />
    </Carousel>
  );
}
