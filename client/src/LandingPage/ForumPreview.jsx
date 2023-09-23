import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";

export const ForumPreview = () => {
  return (
    <>
      <div className="bg-Bamboo h-[60vh] flex justify-between">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-1">
            <Typography color="white" className="text-md">
              Have a Question?
            </Typography>
            <textarea className="rounded-none w-[32rem] h-36 rounded-br-3xl focus:border-none" />
            <div className="flex flex-row gap-10 w-96 mt-5">
              <Button className="rounded-none bg-Charcoal" ripple={false}>
                Ask a Question
              </Button>
              <Button className="rounded-none bg-Charcoal" ripple={false}>
                Answer a Question
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-10 mr-24 max-w-2xl">
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              What materials did you use, and why did you choose them?
            </a>
          </Typography>
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              What challenges did you face while creating this piece, and how
              did you overcome them?
            </a>
          </Typography>
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              How do you ensure the quality and durability of your products?
            </a>
          </Typography>
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              How do you balance the demands of your craft with other aspects of
              your life?
            </a>
          </Typography>
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              Have you experimented with any new techniques or styles recently?
            </a>
          </Typography>
          <Typography color="white" className="text-lg">
            <a href="#" className="hover:underline">
              How do you approach pricing your work, considering the time and
              effort invested?
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
};
