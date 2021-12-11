import React from 'react';
import {  makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({   
    
    baseContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      
        header: {
          fontSize: "24px",
          fontFamily: "Open Sans",
        },
      
        content: {
          display: "flex",
          flexDirection: "column",
      
          image: {
            width: "21em",
            img: {
              width: "100%",
              height: "100%",
            },
          },
      
          form: {
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
      
            formgroup: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "fit-content",
              label: {
                fontSize: "20px",
              },
              input: {
                marginTop: "6px",
                minWidth: "18em",
                height: "37px",
                padding: "0px 10px",
                fontSize: "16px",
                fontFamily: "Open Sans",
                backgroundColor:"#f3f3f3",
                border: 0,
                borderRadius: "4px",
                marginBottom: "31px",
                transition: "all 250ms ease-in-out",
                "&:hover": {
                  //background-color: #ffffff;
                  //box-shadow: 0px 0px 14px 0.3px #0e81ce96;
                },
      
                "&:focus": {
                  outline: "none",
                  boxShadow: "0px 0px 12px 0.8px #3474dbb2",
                },
              },
            },
          },
        },
        footer: {
          marginTop: "3em",
        },
      },
}));




export default function SignUp() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.baseContainer}>
        <div className={classes.header}>Register</div>
        <div className={classes.content}>
          <div className={classes.image}>
           {/*  <img src={loginImg} /> */}
          </div>
          <div className={classes.form}>
            <div className={classes.formgroup}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className={classes.formgroup}>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <button type="button">
            Register
          </button>
        </div>
      </div>
        </div>
    )
}
