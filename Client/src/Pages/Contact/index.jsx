import React from 'react'
import { Formik, Form, Field } from "formik";
import './index.scss'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Min 3 characters!')
        .max(50, 'Max 50 characters !')
        .required('Name is required'),
    email: Yup.string().email('Email is not correct!').required('Email is required'),
    number: Yup.string()
        .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Invalid phone number format')
        .required('Number is required'),
    message: Yup.string()
        .required(' Message is required')



});
const Contact = () => {
    const showSweetAlert = (values) => {
        console.log('Submitting form:', values);
        Swal.fire({
            icon: 'success',
            showCancelButton: false,

        });
    };

    return (
      
        <Formik
            initialValues={{ name: '', email: '', number: '', message: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    showSweetAlert(values);
                    setSubmitting(false);
                    resetForm();
                }, 300);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="ContactPage">
                       
                        <div className="forms">
                            <div className="ContactText">
                                <div className="ContactTextOne">
                                    <div className="callContact">
                                        <div className="ContactIcon">
                                            <IoCallOutline />
                                        </div>
                                        <div className="CallOne">
                                            <h2>Call To Us</h2>
                                        </div>
                                    </div><br />
                                    <div className="TextOne">
                                        <p>We are available 24/7, 7 days a week.</p><br />
                                        <p>Phone: +8801611112222</p>
                                    </div>
                                </div>
                                <div className="ContactTextTwo">
                                    <div className="callContact">
                                        <div className="ContactIcon">
                                            <CiMail />
                                        </div>
                                        <div className="CallOne">
                                            <h2>Write To US</h2>
                                        </div>
                                    </div>
                                    <div className="TextOne">
                                        <p>Fill out our form and we will contact <br /> you within 24 hours.</p><br />
                                        <p>Emails:  help@shopilaunch.com</p><br />
                                       

                                    </div>

                                </div>


                            </div>

                            <div className="RowContact">
                                <div className="row1">
                                    <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="name" type="text" placeholder="your name*" />{errors.name && touched.name ? (
                                        <div style={{ color: 'red', fontSize: "18px" }}>{errors.name}</div>
                                    ) : null}</div></div>
                                    <div className='col-12 col-md-12 col-lg-4'><div className="from-group"><Field name="email" type="email" placeholder="your email*" />
                                        {errors.email && touched.email ? (
                                            <div style={{ color: 'red', fontSize: "18px" }}>{errors.email}</div>
                                        ) : null}</div></div>
                                    <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="number" type="tel" placeholder="your number*" />{errors.number && touched.number ? (
                                        <div style={{ color: 'red', fontSize: "18px" }}>{errors.number}</div>
                                    ) : null}</div></div>

                                </div>
                                <div className="row2">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="from-message"><Field name="message" type="text" placeholder="Your Massage" />{errors.message && touched.message ? (
                                            <div style={{ color: 'red', fontSize: "18px" }}>{errors.message}</div>
                                        ) : null}</div></div> </div>

                                <div className='butt'>
                                    <div className='btn'>
                                        <button type="submit" className='submitt' >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Contact