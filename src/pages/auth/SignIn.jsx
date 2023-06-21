import { Button, Card, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import LogoImg from "../../assets/images/logo.svg";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";

function SignIn() {
  const [step, setStep] = useState(1)

  return (
    <Container className="h-screen w-full">
      {step==1 ? (
        <div className="flex justify-center items-center h-screen ">
          <Card variant="outlined" className="p-8 w-[40%]">
            <div className="flex justify-center items-center">
              <img src={LogoImg} className="h-14 w-14 text-center" />
            </div>

            <div className="flex flex-col gap-2 items-center my-4">
              <div className="font-medium text-2xl text-[#202124]">Sign in</div>
              <div className="  font-normal text-[#202124] tracking-normal">
                Use your PAX Training Account
              </div>
            </div>
            <div className="my-10 flex flex-col gap-10 w-full">
              <div>
                <TextField
                  id="demo-helper-text-misaligned"
                  label="Email or phone"
                  className="w-full"
                />
                <Link to={"/forgot"} className="text-[#1a73e8] font-medium mt-4 cursor-pointer ">
                  Forgot email ?
                </Link>
              </div>
              <div className="text-[#5f6368] text-sm">
                Not your computer? Use Guest mode to sign in privately.
                <span className="text-[#1a73e8] font-medium  block cursor-pointer ">
                  Learn more
                </span>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="text">Create account</Button>{" "}
                <Button
                  variant="contained"
                  onClick={() => setStep(prev=>prev+1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ) : step==2 ? (
        <PasswordInput />
      ): (null)}
    </Container>
  );
}

export default SignIn;
