import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import swal from "sweetalert";
import { getData, postData, postDataAndImage } from "../Admin/FetchNodeService";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    marginTop: "46px",

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => { 
    var formData = new FormData();
    formData.append("fname", firstName);
    formData.append("lname", lastName);
    formData.append("email", email);
    formData.append("mobileno", mobile);
    formData.append("password", password);

    const formObj = {
    fname:firstName,
    lname:lastName,
    email:email,
    mobileno:mobile,
    password:password
    }

    var config = { headers: { "content-type": "multipart/form-data" } };
      console.log("form data", formObj);
      var res = await postData(
        "userregistration/insertdata",
        formObj,
        config
      );
      if (res.result) {
        alert(res.result)
        swal({
          title: "Registration Successfully",
          icon: "success",
          dangerMode: true,
        });
        clearData();
      } 
      else {
        swal({
          title: "Table Booking",
          text: "Fail Registration",
          icon: "warning",
          dangerMode: true,
        });
      }

      const clearData = () => {
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");
        setPassword("");
      };

  };

  return (
    <div>
    <div className={classes.root}>
    <h1>Create account</h1>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <TextField
        label="Mobile Number"
        variant="filled"
        type="mobile"
        required
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <Button variant="contained" >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={() => handleSubmit()}>
          Signup
        </Button>
      </div>
      <h3>Already have an account?<Link to="/login"> Sign in</Link></h3>
    </div>
    </div>
  );
};
