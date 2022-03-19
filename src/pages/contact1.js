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
    name1: yup
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
    number: yup
        .number()
        //  .trim()
        // .min([10],'Please enter a valid number ')
        // .max([10],"Please enter a valid number")
        .required('number required')

});

export default async function contact1() {


    const onSubmit = (values) => {
        alert('from onSub')
        console.log("values from contact1", values)

        const response = await fetch('/api/contact1',
            {
                method='POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json'
                }

            })
        const data = await response.json()
        console.log("from comment submitvalue-----------", data)

        return values;

    }


    const formik = useFormik({
        initialValues: {
            name: '',
            lName: '',
            email: '',
            number: '0'
        },
        validationSchema: validationSchema,
        onSubmit
    })





    return (<>

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


            /><br />
            <TextField id="standard-basic" label="lName" variant="standard"
                name={'lName'}
                value={formik.values.lName}
                onChange={formik.handleChange}
                error={formik.touched.lName && Boolean(formik.errors.lName)}
                helperText={formik.touched.lName && formik.errors.lName}


            /><br />
            <TextField id="standard-basic" label="email" variant="standard"
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}



            /><br />
            <TextField id="standard-basic" label="number" variant="standard"
                name={'number'}
                value={formik.values.number}
                onChange={formik.handleChange}

                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}



            /><br />
            <Button variant="contained" type="submit" >Submit</Button>
        </form>



    </>)
}
