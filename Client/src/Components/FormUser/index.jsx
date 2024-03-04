import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormUser = ({ getData }) => {
    async function AddUser(values) {
        const res = await axios.post("http://localhost:3000/users", values)
        getData()

    }
    return (
        <Formik
            initialValues={{ name: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
               

            })}
            onSubmit={(values, { resetForm }) => {
                AddUser(values)
                // setUpdatedData(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />

               
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default FormUser