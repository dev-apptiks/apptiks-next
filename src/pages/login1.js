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
    username: yup
        .string()
        .trim()
        .min(2, 'Please enter a valid name')
        .max(50, 'Please enter a valid name')
        .required('Please specify your name'),
    password: yup
    .string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});



export default function Login1() {

    const initialValues = {
        username: '',
        password: '',
    };

    // const onSubmit = (values) => {
    //     alert('from login1---')

    //     console.log('from login1 -------', values)
    //     return values;

    // };

    const onSubmit = (values)=>{
        alert("from login Submit")
        // axios.post().then(req,res)
        console.log("froom,,,,,,,,,,,,,",values)
        return values;

    };


   

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit

    })
   
    return (<>
        <h1>from login1 </h1>

        <form
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <TextField id="standard-basic" label="UserName" variant="standard"
                

                name={'username'}
                 value={formik.values.username}
                onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}

            />
            <TextField id="standard-basic" label="Password" variant="standard"


                name={'password'}
                 value={formik.values.password}
               onChange={formik.handleChange}
            error={
                formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email && formik.errors.email}
            />
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


    </>

    )

}