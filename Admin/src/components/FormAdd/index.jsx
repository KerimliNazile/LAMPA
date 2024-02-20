import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import './index.scss'
const FormAdd = ({ getData }) => {
    async function AddMenu(values) {
        const res = await axios.post("http://localhost:3000/product", values)
        getData()

    }
    return (
        <Formik
            initialValues={{ image: '', title: '', category: '', price: "" }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .required('Required'),
                title: Yup.string().matches(/^[a-zA-Z ]+?$/, "Must be only digits")
                    .required('Required'),
                category: Yup.string().matches(/^[a-zA-Z ]+?$/, "Must be only digits")
                .required('Required'),
                    price: Yup.number().positive("price must be higher than 0")
                    .required('Required')

            })}
            onSubmit={(values, { resetForm }) => {
                AddMenu(values)
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


                <label htmlFor="category">Category</label>
                <Field name="category" type="text" />
                <ErrorMessage name="category" />

                <label htmlFor="price">Price</label>
                <Field name="price" type="number" />
                <ErrorMessage name="price" />

                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default FormAdd