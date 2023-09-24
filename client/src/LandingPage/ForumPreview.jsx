import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";
import footerBg from '../assets/random/footerBg.png'
import { Box } from "@mui/material";
export const ForumPreview = () => {
  return (
    <>
      <div className="bg-Bamboo h-[100vh] lg:h-[80vh] flex flex-col items-center lg:flex-row justify-between ">
        <Box sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} className="flex flex-col items-center justify-center w-[100%] lg:w-1/2 ">
          <div className="flex flex-col gap-1 my-10">
            <Typography  color="white" className="text-lg font-heading">
              Have a Question?
            </Typography>
            <textarea className="rounded-none w-[32rem] h-36 rounded-br-3xl focus:border-none" />
            <div className="flex flex-row gap-10 mt-5 w-96">
              <Button className="rounded-none bg-Charcoal" ripple={false}>
                Ask a Question
              </Button>
              <Button className="rounded-none bg-Charcoal" ripple={false}>
                Answer a Question
              </Button>
            </div>
          </div>
        </Box>
        <div className="flex flex-col items-start justify-center max-w-2xl p-10 mr-24">
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              What materials did you use, and why did you choose them?
            </a>
          </Typography>
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              What challenges did you face while creating this piece, and how
              did you overcome them?
            </a>
          </Typography>
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              How do you ensure the quality and durability of your products?
            </a>
          </Typography>
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              How do you balance the demands of your craft with other aspects of
              your life?
            </a>
          </Typography>
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              Have you experimented with any new techniques or styles recently?
            </a>
          </Typography>
          <Typography color="white" className="text-lg font-body">
            <a href="#" className="hover:underline font-body">
              How do you approach pricing your work, considering the time and
              effort invested?
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
};
