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
import { Link } from "react-router-dom";
function PasswordInput() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card variant="outlined" className="p-8 w-[40%]">
        <div className="flex justify-center items-center">
          <img src={LogoImg} className="h-14 w-14 text-center" />
        </div>

        <div className="flex flex-col gap-2 items-center my-4">
          <div className="font-medium text-2xl text-[#202124]">Hi User</div>
          <div className="flex items-center justify-center rounded-full border border-gray-300 p-1 gap-2">
            <img src={LogoImg} className="h-6 w-6 rounded-full" />
            <div className="text-sm text-[#202124]">
              adminuser@gmail.com{" "}
              <KeyboardArrowDownRoundedIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className=" text-[#202124] mt-6">
          To continue, first verify it's you
        </div>
        <div className="my-10 flex flex-col gap-10 w-full">
          <div>
            <TextField
              id="demo-helper-text-misaligned"
              label="Enter your password"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show password"
            />
          </div>

          <div className="flex justify-between items-center">
            <Link to={"/forgot"}
              className="text-[#1a73e8] font-medium cursor-pointer"
            >
              Forgot Password ?
            </Link>
            <Button variant="contained">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PasswordInput;
