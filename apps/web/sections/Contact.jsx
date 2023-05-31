import React, { useEffect } from 'react'
import { buildImages } from '../libs/helpers'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const Contact = ({ contact }) => {

    const initalValues = {
        Nombre: "",
        Correo: "",
        Telefono: "",
        Mensaje: ""
    }

    const validation = Yup.object().shape({
        Nombre: Yup.string().required(),
        Correo: Yup.string().email().required()
    });

    useEffect(() => {
        let image = document.querySelector('.block.contact .background'),
            imageSrc = image.getAttribute('data-src');

        image.style.background = 'url(' + imageSrc + ')';
    })

    async function handleSubmit(values, { resetForm }){

        let statusMessage = document.querySelector('.contact-form .status-message'),
            wrapperForm = document.querySelector('.contact-form .wrapper-content-form');

        console.log(statusMessage)
    
        statusMessage.classList.remove('hidden');
        wrapperForm.classList.add('partial-hide');
        statusMessage.innerHTML = 
        `<div class="sending">
            <div class="icon-sending"></div>
            <div class="message">
                <div class="text-status">Enviando mensaje...</div>
            </div>
        </div>`;

        setTimeout(() => {
            resetForm();
            statusMessage.innerHTML = 
            `<div class="success">
                <div class="message">
                    <div class="text-status">
                        <strong>¡Mensaje enviado!</strong>
                        <span>Te contactaremos a la brevedad posible.</span>
                    </div>
                </div>
            </div>`;
            setTimeout(() => {
                statusMessage.classList.add('hidden');
                wrapperForm.classList.remove('partial-hide');
            }, 6000);
        }, 1250);
    }

    return (
        <section className="block contact" id='contacto'>
            <div className="flex-content">
                <div className="text-wrapper">
                    <div className="text-holder">
                        <div className="title text-inview">{contact.text}</div>
                        <Formik
                            initialValues={initalValues}
                            validationSchema={validation}
                            onSubmit={handleSubmit}
                        >
                            {({errors, touched}) =>(
                                <Form className='contact-form text-inview'>
                                    <div className="status-message contact-status hidden"></div>
                                    <div className="wrapper-content-form">
                                        <div className="input-container text-inview">
                                            <Field
                                                type='text'
                                                placeholder='Nombre y Apellido*'
                                                name='Nombre'
                                                id='name'
                                                className={`${errors.Nombre && touched.Nombre ? ("isError") : null}`}
                                            />
                                        </div>
                                        <div className="input-container text-inview">
                                            <Field
                                                type='text'
                                                placeholder='Email*'
                                                name='Correo'
                                                id='email'
                                                className={`${errors.Correo && touched.Correo ? ("isError") : null}`}
                                            />
                                        </div>
                                        <div className="input-container text-inview">
                                            <Field
                                                type='text'
                                                placeholder='Teléfono'
                                                name='Telefono'
                                                id='phone'
                                            />
                                        </div>
                                        <div className="input-container text-inview">
                                            <Field
                                                type='text'
                                                placeholder='Mensaje'
                                                name='Mensaje'
                                                id='message'
                                            />
                                        </div>
                                        <div className="submit-holder">
                                            <button type='submit' className='btn-effect text-inview'>Enviar</button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="image-wrapper hidden-xs text-inview">
                    <div className="background" data-src={buildImages(contact.image?.asset._ref).url()} />
                </div>
            </div>
        </section>
    );
}

export default Contact;