import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './indexx.scss'
function EmailForm() {
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
            // setName('')
            setEmail('')
            setMessage('')
            setMessage('')
            toast.success('Successfully created!');
        })
            .catch((error) => {
                console.error("Error send email:", error)
            })

    }



    return (
        <form action="" onSubmit={handleSubmit}
     
         

        >
          
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="message" cols="70" rows="50"  placeholder=' Your Message' value={message} onChange={(e) => setMessage(e.target.value)} style={{height:"140px"}} />
            {/* <textarea cols="70" rows="10" type="message" placeholder=' Your Message' value={message} onChange={(e) => setMessage(e.target.value)} /> */}
            <button type='submit'>Send</button>
        </form>
    )
}

export default EmailForm