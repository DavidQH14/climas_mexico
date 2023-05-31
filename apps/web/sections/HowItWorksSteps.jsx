import React from 'react'
import { buildImages } from '../libs/helpers'

const HowItWorksSteps = ({how_it_works}) => {
    return (
        <div className="how-it-works-steps">
            <div className="block-title text-inview">¿Cómo funciona?</div>
            {
                how_it_works.all_steps.map((element, index) => (
                    <div className="item" key={index}>
                        <div className="image-wrapper image-inview">
                            <div className="image">
                                <img src={buildImages(element.image?.asset._ref).url()} alt={element.text1} />
                            </div>
                        </div>
                        <div className="text-wrapper text-inview">
                            <div className="item-title">{element.text1}</div>
                            <div className="item-desc">{element.text2}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default HowItWorksSteps;