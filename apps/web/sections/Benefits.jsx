import React from 'react'
import { buildImages } from '../libs/helpers'

const Benefits = ({benefits}) => {
    return (
        <div className="benefits">
            <div className="block-title text-inview">Beneficios:</div>
            <div className="content">
                <div className="flex-content">
                    {
                        benefits.map((benefit, index) => (
                            <div className="item text-inview" key={index}>
                                <div className="image-wrapper">
                                    <div className="image">
                                        <img
                                            src={buildImages(benefit.image?.asset._ref).url()}
                                            alt='Beneficios'
                                        />
                                    </div>
                                </div>
                                <div className="text-wrapper">
                                    <div className="text">{benefit.text}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Benefits;