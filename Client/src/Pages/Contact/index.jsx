import React, { useState } from 'react'
import { Formik, Form, Field } from "formik";
import './index.scss'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import EmailForm from './Email';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Min 3 characters!')
        .max(50, 'Max 50 characters !')
        .required('Name is required'),
    email: Yup.string().email('Email is not correct!').required('Email is required'),

    message: Yup.string()
        .required(' Message is required')



});
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const serviceId = "service_q6u7bxu"
        const templateId = "template_ds1pswu"
        const publicKey = "fIe2kHrr7l19jog7y"

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Nazile",
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            console.log("Email Send Success", response);
            setEmail('')
            setMessage('')
            setMessage('')
        })
            .catch((error) => {
                console.error("Error send email:", error)
            })

    }

    const showSweetAlert = (values) => {
        console.log('Submitting form:', values);
        Swal.fire({
            icon: 'success',
            showCancelButton: false,

        });
    };

    return (

        <div className='atak'>


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


                            </div> </div>
                    </div>






                </div>
            </div>

                <div className='EmailForm'>
                    <EmailForm />
                </div>





        </div>

    )
}

export default Contact