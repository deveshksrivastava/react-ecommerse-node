import React,{useState} from 'react';
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';
import {postData} from "../Admin/FetchNodeService"
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from './footer';
/* import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
 */
export default function Login(props) {

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const handleClick=async()=>{
    var body={email:email,password:password}  
    var result=await postData("userregistration/chkadminlogin",body)
    if(result.result)
    {props.history.replace({pathname:'/showcart'})}
    else
    {
     alert("Invalid Login")

    }

   }
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Link to="/home" passHref>
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Back To Home
            </Button>
          </Link>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4" style={{fontSize:"30px", textAlign:"center"}}>
                Sign in22
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1" style={{fontSize:"25px"}}>
                 login with email address
              </Typography>
            </Box>
            <TextField
             
              fullWidth
              label="Email Address"
              required
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              onChange={(event)=>setEmail(event.target.value)}
            />
            <TextField
              fullWidth
              required
              label="Password"
              margin="normal"
              name="password"
              type="password"
              onChange={(event)=>setPassword(event.target.value)}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={()=>handleClick()}
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2" style={{fontSize:"20px"}}>
              Don&apos;t have an account?{" "}
                <Link
                  to="/signup">
                  Sign Up
                </Link><br/>
                <Link to="/forgotpasswort" variant="body2">
                 Click here Forgot password?
                </Link>
            </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
