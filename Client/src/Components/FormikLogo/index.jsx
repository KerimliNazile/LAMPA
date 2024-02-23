import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormikLogo = ({ getData }) => {
    async function AddMenuu(values) {
        const res = await axios.post("http://localhost:3000/swiper", values)
        getData()

    }
    return (
        <Formik
            initialValues={{ image: '', title: '', text: ''}}
            validationSchema={Yup.object({
                image: Yup.string()
                    .required('Required'),
                title: Yup.string().matches(/^[a-zA-Z ]+?$/, "Must be only digits")
                    .required('Required'),
                text: Yup.string()
                    .required('Required'),
                   
            })}
            onSubmit={(values, { resetForm }) => {
                AddMenuu(values)
                // setUpdatedData(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="image">Image</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <label htmlFor="title">Title</label>
                <Field name="title" type="text" />
                <ErrorMessage name="title" />


                <label htmlFor="text">Text</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

              
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default FormikLogo