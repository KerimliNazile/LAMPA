import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormikMarketing= ({ getData }) => {
    async function AddMenuMarketing(values) {
        const res = await axios.post("http://localhost:3000/logo", values)
        getData()

    }
    return (
        <Formik
            initialValues={{ image: '' }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .required('Required'),
                

            })}
            onSubmit={(values, { resetForm }) => {
                AddMenuMarketing(values)
                // setUpdatedData(values)
                resetForm()
            }}
        >
            <Form>
                <label htmlFor="image">Image</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};
export default FormikMarketing