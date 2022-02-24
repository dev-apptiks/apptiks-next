// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

const validationSchema = yup.object({
    name: yup
        .string()
        .trim()
        .min(2, 'Please enter a valid name')
        .max(50, 'Please enter a valid name')
        .required('Please specify your name'),
    email: yup
        .string()
        .trim()
        .email('Please enter a valid email address')
        .required('Email is required.'),
});

function Login() {
    // const [userName, setuserName] = useState('');
    // const [password, setpassword] = useState('');

    const initialValues = {
        name: '',
        email: '',
    };
    //--------------------------------------------------

    // const submitValue = async () => {
    //     // alert('frm login')
    //     // console.log(userName,password)
    //     const loginDet = { userName: userName, password: password }
    //     const response = await fetch('/api/login', {
    //         method: 'POST',
    //         body: JSON.stringify(loginDet),
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //     })
    //     const data = await response.json()
    // } 
    //--------------------------------------
    const onSubmit = (values) => {
        alert("from login Submit")
        // axios.post().then(req,res)
        console.log("froom,,,,,,,,,,,,,",values)
        return values;

    };

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        
        <form
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            
                <TextField id="standard-basic" label="UserName" variant="standard"
                    //   value={userName}
                    //   onChange={(e)=>setuserName(e.target.value)}

                    name={'name'}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}

                />
                <TextField id="standard-basic" label="Password" variant="standard"
                    // value={password}
                    // onChange={(e) => setpassword(e.target.value)}

                    name={'email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.email && Boolean(formik.errors.email)
                    }
                    helperText={formik.touched.email && formik.errors.email}
                />
                {/* <Button variant="contained" onClick={submitValue}>Submit</Button> */}

                <Button
                    sx={{ height: 54, whiteSpace: 'nowrap', minWidth: 100 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                    type="submit"
                >
                    Send
                </Button>

            


        </form>
        
        )
}
export default Login;