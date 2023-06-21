import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";
import LogoImg from "../../assets/images/logo.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card variant="outlined" className="p-8 w-[40%] h-[80%]">
        <div className="flex justify-center items-center">
          <img src={LogoImg} className="h-14 w-14 text-center" />
        </div>

        <div className="flex flex-col gap-2 items-center my-4">
          <div className="font-medium text-2xl text-[#202124]">
            Find your email
          </div>
          <div className=" text-[#202124]">
            Enter your phone number or recovery email
          </div>
        </div>

        <form className="my-10 flex flex-col gap-10 w-full">
          <div>
            <TextField
              required
              id="demo-helper-text-misaligned"
              label="Phone number or email"
              //   helperText="Enter a valid email or phone number"
              className="w-full "
            />
          </div>

          <div className="flex justify-end">
            <Button variant="contained">Next</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ForgotPassword;
