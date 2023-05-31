import React from 'react'
import { buildImages } from '../libs/helpers'

const HowItWorks = ({ how_it_works }) => {
    return (
        <section className="block how-it-works" id='como-funciona'>
            <div className="holder">
                <div className="content">
                    <div className="flex-content">
                        <div className="image-wrapper">
                            <div className="image image-inview">
                                <img src={buildImages(how_it_works.image?.asset._ref).url()} alt={how_it_works.section_title} />
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <div className="title text-inview">¿Cómo trabajamos?</div>
                            <div className="steps">
                                {
                                    how_it_works.steps.map((step, index) => (
                                        <div className="item text-inview" key={index}>
                                            <div className="item-number">{index + 1}</div>
                                            <div className="item-title">{step.text1}</div>
                                            <div className="item-desc">{step.text2}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <a href="#contacto" className="see-more text-inview">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;