import React from "react";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
    HeartIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export const NavbarDefaut = () => {
  const navigate= useNavigate();
  return (
    <>
      <Card className=" bg-Charcoal h-8 rounded-none items-center flex-row justify-end">
        {/* <h1>Navbar</h1> */}
        {/* <Typography className="px-5" color="white">ENG | हिंदी | اردو</Typography> */}
        <Button variant="solid" className=" bg-Charcoal">
          ENG
        </Button>
        <Typography className="" color="white">
          |
        </Typography>
        <Button variant="solid" className=" hover:none bg-Charcoal">
          हिंदी
        </Button>
        <Typography className="" color="white">
          |
        </Typography>
        <Button variant="solid" className="w-10 hover:none bg-Charcoal mr-10">
          اردو
        </Button>
      </Card>
      <Card className=" bg-Sandalwood h-12 rounded-none flex-row items-center justify-end shadow-none">
        {/* <Button variant="text" size="sm" className=" h-10 text-white shadow-none" ripple={false}>
          Login
        </Button> */}
        <Typography color="white" className="cursor-pointer px-2">
            Login
        </Typography>
        <Typography color="white">
          |
        </Typography>
        <Typography color="white" onClick={()=> navigate('/masti')} className="cursor-pointer px-2 mr-3">
            SignUp
        </Typography>
        <MagnifyingGlassIcon className="h-6 w-6 text-white mr-5 cursor-pointer" />
        <HeartIcon className="h-6 w-6 text-white mr-5 cursor-pointer" />
        <ShoppingCartIcon className="h-6 w-6 text-white mr-10 cursor-pointer" />
      </Card>
    </>
  );
};
