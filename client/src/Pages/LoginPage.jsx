import React, { useEffect, useContext } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import image from "../assets/random/loginImage.svg";
import { AuthContext } from "../components/AuthContext";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const { login, accessToken, userRole } = useContext(AuthContext);

  useEffect(() => {
    console.log('accessToken:', accessToken);
    console.log('userRole:', userRole);
    if (accessToken !== null) {
      if (userRole === 'consumer') {
        navigate('/products');
      } else if (userRole === 'artisan') { 
        navigate('/artisanProfile'); 
      } else if(userRole ==='supplyChain'){
        navigate('/orders')
      }
    }
  }, [accessToken, userRole, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassWordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(email, password);
    login(email, password);
  };

  return (
    <>
      <div className="items-center lg:flex">
        <Box
          className=" lg:w-1/2 h-[79vh] flex flex-col items-center justify-center"
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img src={image} className="w-full " /> */}
          <Typography
            color="white"
            className="font-heading text-5xl font-extrabold ml-20 mt-[-80px] self-start"
          >
            Embrace the <br />{" "}
            <span className="text-white">spirit of India</span>
          </Typography>
          <br />
          <Typography
            color="white"
            className="text-md w-[30rem] ml-20 font-body self-start"
          >
            An unparalleled legacy that spans millennia. Pure, authentic craft
            sourced from artisans across the Indian sub- continent. Our vast
            collection of over 80 different craft forms celebrates a heritage of
            some of the world's oldest handicrafts.
          </Typography>
        </Box>
        <div className="lg:w-1/2 px-56 h-[79vh] flex flex-col gap-5 items-center justify-center">
          <Typography  color="black" className="text-heading -xl fontself-start">
            LOGIN
          </Typography>
          <Typography color="gray" className="text-sm font-self-start font-body">
            If you are already registered, please log in.
          </Typography>
          <Input
            type="text"
            color="lightBlue"
            size="regular"
            value={email}
            label="Enter your email"
            className="rounded-none"
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            color="lightBlue"
            size="regular"
            value={password}
            label="Enter your password"
            className="rounded-none "
            onChange={handlePassWordChange}
          />
          <Typography color="gray" className="self-start text-xs font-body">
            <span className="cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </Typography>
          <Button
            variant="outlined"
            size="regular"
            className="w-full rounded-none "
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography color="gray" className="mt-5 text-sm font-body">
            Create your account and enjoy a new shopping experience.{" "}
            {/* <span className="cursor-pointer text-lightBlue-500">Sign up</span> */}
          </Typography>
          <Button
            variant="filled"
            size="regular"
            className="w-full rounded-none bg-Charcoal"
            onClick={()=>navigate('/signup')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};
