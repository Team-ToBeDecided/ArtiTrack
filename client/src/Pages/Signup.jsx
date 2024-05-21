import React, { useEffect } from "react";
import { useContext } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import image from "../assets/random/loginImage.svg";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import { BASE_URL } from "../constants/basUrl";
import { Box } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [gstin, setGstin] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [craft, setCraft] = React.useState(null);
  const [company, setCompany] = React.useState(null);

  const [userType, setUserType] = React.useState("Consumer");

  const { login, accessToken, userData, userRole } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {

    if (accessToken !== null) {
      if (userRole === 'consumer') {
        navigate('/products');
      } else if (userRole === 'artisan') {
        navigate('/artisanProfile');
      }
      else if (userRole === 'wholesaler') {
        navigate('/b2bdashboard');
      }
      else if(userRole === "supplyChain"){
        navigate('/supplyChainDashboard');
      }
    }
  }, [accessToken, userData]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGstinChange = (e) => {
    setGstin(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCraftChange = (e) => {
    setCraft(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleLogin = () => {
    console.log(email, password);
    login(email, password);
  };

  const handleSignup = () => {
    const userData = {
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
      //   is_active: true,
      //   is_staff: false,
      role:
        userType === "Consumer"
          ? "consumer"
          : userType === "WholeSale Consumer"
            ? "wholesaler"
            : userType === "Artisan"
              ? "artisan" :
              userType === "Supply Chain" ?
                "supplyChain" : null,
      gender: gender,
      phone_number: phoneNo,
      address: address,
      district: district,
      craft: craft,
      description: "none",
      gstin: gstin,
      company_name: company
    };
    console.log(userData);
    axios.post(BASE_URL + "users/register/", userData).then(
      (response) => {
        console.log(response);
        login(email, password);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div className="items-center lg:flex">
        <Box className="flex flex-col items-center justify-center h-screen lg:w-1/2" sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
          {/* <img src={image} className="w-full " /> */}
          <Typography
            color="white"
            className="text-5xl font-extrabold ml-20 mt-[-80px] self-start"
          >
            Embrace the <br />{" "}
            <span className="text-white">spirit of India</span>
          </Typography>
          <br />
          <Typography
            color="white"
            className="text-sm w-[30rem] ml-20 self-start"
          >
            An unparalleled legacy that spans millennia. Pure, authentic craft
            sourced from artisans across the Indian sub- continent. Our vast
            collection of over 80 different craft forms celebrates a heritage of
            some of the world's oldest handicrafts.
          </Typography>
          <br />
          <div className="flex flex-row self-start gap-5 ml-20">
            <Button
              variant="filled"
              size="regular"
              className="rounded-none bg-Charcoal"
              ripple={false}
              onClick={() => setUserType("Consumer")}
            >
              Consumer
            </Button>
            <Button
              variant="filled"
              size="regular"
              className="rounded-none bg-Charcoal"
              ripple={false}
              onClick={() => setUserType("WholeSale Consumer")}
            >
              WholeSale Consumer
            </Button>
            <Button
              variant="filled"
              size="regular"
              className="rounded-none bg-Charcoal"
              ripple={false}
              onClick={() => setUserType("Artisan")}
            >
              Artisan
            </Button>
            <Button
              variant="filled"
              size="regular"
              className="rounded-none bg-Charcoal"
              ripple={false}
              onClick={() => setUserType("Supply Chain")}
            >
              Supply Chain
            </Button>
          </div>
        </Box>
        <div className="flex flex-col items-center justify-center h-full gap-5 px-56 lg:w-1/2">
          <Typography color="black" className="self-start text-xl">
            {userType}&nbsp;SIGNUP
          </Typography>
          <Typography color="gray" className="self-start text-sm">
            If you are already registered, please log in.
          </Typography>
          {userType === "Artisan" ? (
            <>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={firstName}
                label="First Name"
                className="rounded-none"
                onChange={handleFirstNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={lastName}
                label="Last Name"
                className="rounded-none"
                onChange={handleLastNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={phoneNo}
                label="Phone Number"
                className="rounded-none"
                onChange={handlePhoneNoChange}
              />
              <Input
                type="email"
                color="lightBlue"
                size="regular"
                value={email}
                label="Email Address"
                className="rounded-none"
                onChange={handleEmailChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={address}
                label="Address"
                className="rounded-none"
                onChange={handleAddressChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={district}
                label="District"
                className="rounded-none"
                onChange={handleDistrictChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={craft}
                label="Craft"
                className="rounded-none"
                onChange={handleCraftChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gender}
                label="Gender"
                className="rounded-none"
                onChange={handleGenderChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gstin}
                label="GSTIN"
                className="rounded-none"
                onChange={handleGstinChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={password}
                label="Password"
                className="rounded-none"
                onChange={handlePasswordChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={confirmPassword}
                label="Confirm Password"
                className="rounded-none"
                onChange={handleConfirmPasswordChange}
              />
            </>
          ) : userType === "WholeSale Consumer" ? (
            <>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={firstName}
                label="First Name"
                className="rounded-none"
                onChange={handleFirstNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={lastName}
                label="Last Name"
                className="rounded-none"
                onChange={handleLastNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={phoneNo}
                label="Phone Number"
                className="rounded-none"
                onChange={handlePhoneNoChange}
              />
              <Input
                type="email"
                color="lightBlue"
                size="regular"
                value={email}
                label="Email Address"
                className="rounded-none"
                onChange={handleEmailChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={address}
                label="Address"
                className="rounded-none"
                onChange={handleAddressChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gender}
                label="Gender"
                className="rounded-none"
                onChange={handleGenderChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gstin}
                label="GSTIN"
                className="rounded-none"
                onChange={handleGstinChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={password}
                label="Password"
                className="rounded-none"
                onChange={handlePasswordChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={confirmPassword}
                label="Confirm Password"
                className="rounded-none"
                onChange={handleConfirmPasswordChange}
              />
            </>
          ) : userType === "Consumer" ? (
            <>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={firstName}
                label="First Name"
                className="rounded-none"
                onChange={handleFirstNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={lastName}
                label="Last Name"
                className="rounded-none"
                onChange={handleLastNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={phoneNo}
                label="Phone Number"
                className="rounded-none"
                onChange={handlePhoneNoChange}
              />
              <Input
                type="email"
                color="lightBlue"
                size="regular"
                value={email}
                label="Email Address"
                className="rounded-none"
                onChange={handleEmailChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={address}
                label="Address"
                className="rounded-none"
                onChange={handleAddressChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gender}
                label="Gender"
                className="rounded-none"
                onChange={handleGenderChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={password}
                label="Password"
                className="rounded-none"
                onChange={handlePasswordChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={confirmPassword}
                label="Confirm Password"
                className="rounded-none"
                onChange={handleConfirmPasswordChange}
              />
            </>
          ) : userType === "Supply Chain" ? (
            <>
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={firstName}
                label="First Name"
                className="rounded-none"
                onChange={handleFirstNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={lastName}
                label="Last Name"
                className="rounded-none"
                onChange={handleLastNameChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={phoneNo}
                label="Phone Number"
                className="rounded-none"
                onChange={handlePhoneNoChange}
              />
              <Input
                type="email"
                color="lightBlue"
                size="regular"
                value={email}
                label="Email Address"
                className="rounded-none"
                onChange={handleEmailChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={address}
                label="Address"
                className="rounded-none"
                onChange={handleAddressChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                value={gender}
                label="Gender"
                className="rounded-none"
                onChange={handleGenderChange}
              />
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                label='Company Name'
                className="rounded-none"
                onChange={handleCompanyChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={password}
                label="Password"
                className="rounded-none"
                onChange={handlePasswordChange}
              />
              <Input
                type="password"
                color="lightBlue"
                size="regular"
                value={confirmPassword}
                label="Confirm Password"
                className="rounded-none"
                onChange={handleConfirmPasswordChange}
              />
            </>
          ) : null}
          <Button
            variant="outlined"
            size="regular"
            className="w-full rounded-none "
            onClick={handleSignup}
          >
            SignUp
          </Button>
        </div>
      </div>
    </>
  );
};
