import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';


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

export default function contact1(){


    const onSubmit=(values)=>{
        alert('from onSub')
        console.log("values from contact1",values)

    }


    const formik = useFormik({
        initialValues:{name:'',email:''},
        validationSchema:validationSchema,
        onSubmit
    })

    



    return(<>
    
        <form
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
      
      <TextField id="standard-basic" label="Name" variant="standard" 
        name={'name'}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}

     
      />
      <TextField id="standard-basic" label="Email" variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              


      />
      <Button variant="contained" type="submit" >Submit</Button>
      </form>

    
    
    </>)
}
