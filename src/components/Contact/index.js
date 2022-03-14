import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Dialog from './Dialog';


const Contact = () => {
    const [emailResult, setEmailResult] = useState("");
    const [textColor, setTextColor] = useState("Chartreuse");

    useEffect(() => {
        let SendBtn = document.getElementById('sendBtn');
        let SendBtnSVG = document.getElementById("sendBtnSVG");
        SendBtn.addEventListener('click', function () {
            this.classList.add('activated');
            setTimeout(() => { this.classList.remove('activated'); }, 700);
        });
        //disable hover effect if device is mobile
        if (window.matchMedia("(pointer: coarse)").matches) {
            // touchscreen
            SendBtnSVG.classList.remove("hoverAllowed");
            console.log("removed hover");
        }
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j9qrsan', 'template_yoqj5wu', form.current, 'd-uYZgYiVlzjuT_57')
            .then((result) => {
                console.log(result.text);
                setEmailResult("Message Sent!");
                setTextColor("Chartreuse");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setEmailResult(error.text);
                setTextColor("Red");
            });
    }


    return (
        <section className='about-container' id='About'>
            <h2 className='mx-1' id="about-title">Contact Me</h2>
            <div className='dark-input'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form-row'>
                        <input
                            className='half'
                            type="text"
                            id='name'
                            placeholder="Name"
                            name='from_name'
                        />
                        <input
                            type="text"
                            id='email'
                            placeholder="Email"
                            name='respond_email'
                        />
                    </div>
                    <input
                        type="text"
                        id='subject'
                        placeholder="Subject"
                        name='subject'
                    />
                    <textarea
                        type="text"
                        id='message'
                        placeholder="Message"
                        name='message'
                    />

                    <button type="submit" className="button btn-1 " id='sendBtn'>
                        <svg id='sendBtnSVG' className='hoverAllowed'>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" rx='5' />
                        </svg>
                        Send Message
                    </button>
                </form>
                <p style={{ color: textColor }}>{emailResult}</p>
            </div >



        </section >
    );
}

export default Contact;