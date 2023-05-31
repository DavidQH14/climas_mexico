import React, { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react';
import { buildImages } from '../libs/helpers'

const SectionOne = ({section_one}) => {

    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {

        setScriptLoaded(false)
        setTimeout(() => {
            setScriptLoaded(true)
        }, 250);
    }, [])

    return (
        <div className="section-one">
            <div className="holder">
                <div className="flex-content">
                    <div className={`image-wrapper text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>
                        <div className="image">
                            <img src={buildImages(section_one.image?.asset._ref).url()} alt='Imagen' />
                        </div>
                    </div>
                    <div className={`text-wrapper text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>
                        <div className="text"><BlockContent blocks={section_one.text} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;