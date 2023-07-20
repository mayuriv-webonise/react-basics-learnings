import React from "react";
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {useNavigate} from "react-router-dom";

export default function Signup() {
    const [registerObject, setResgisterObject] = React.useState({ firstname: '', lastname: '', phone: '', email: '', password: '', role: '' });
    const navigate = useNavigate();
    const userSchema = yup.object().shape({
        firstname: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  lastname: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  phone: yup.string()
    .required("Phone number is required")
    .matches(
/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
      "Invalid phone number"
    ),

  email: yup.string().email().required("Email is required"),

  password: yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
    role: yup.string().required('Role is required')
    })


    async function validateForm() {

        // validating this dataObject concerning Yup userSchema

        const isValid = await userSchema.isValid(registerObject)
console.log(isValid, registerObject);
        if (isValid) {
            alert('Form is Valid')
        } else {
            alert('Form is Invalid')
        }
    }

    const handleInputChange = (evt) => {

        const { name, value } = evt.target;

        setResgisterObject((userObject) => ({ ...registerObject, [name]: value }));
    }
    return (
      
        
        <><Typography component="h1" variant="h5" textAlign='center'>
            Sign up
        </Typography><Box component="form" noValidate onSubmit={validateForm} sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Grid container xs={4} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstname"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            value={registerObject.firstname}
                            onChange={handleInputChange}
                            autoFocus />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                            value={registerObject.lastname}
                            onChange={handleInputChange}
                            autoComplete="family-name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={registerObject.email}
                            onChange={handleInputChange}
                            autoComplete="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            value={registerObject.phone}
                            onChange={handleInputChange}
                            autoComplete="phone" 
                            type="phone"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={registerObject.password}
                            onChange={handleInputChange}
                            autoComplete="new-password" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="role"
                            label="Role"
                            type="text"
                            id="role"
                            value={registerObject.role}
                            onChange={handleInputChange}
                            autoComplete="role" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={()=> navigate('/')}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Box></>
    )

}