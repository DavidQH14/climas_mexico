import React, { useState, useEffect } from 'react'
import { buildImages } from '../libs/helpers'
import SanityBlockContent from '@sanity/block-content-to-react'

const Cover = ({ cover }) => {

    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {

        setScriptLoaded(false)
        setTimeout(() => {
            setScriptLoaded(true)
        }, 250);
    }, [])

    useEffect(() => {
        let backgroundElement = document.querySelector('.background'),
            dataSrc = backgroundElement.getAttribute('data-src');
        
        backgroundElement.style.background = 'url(' + dataSrc + ')';
    })

    return (
        <section className="block cover" id='portada'>
            <div className="background" data-src={buildImages(cover.image?.asset._ref).url()} />
            <div className="text-wrapper">
                <div className={`text-one text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>
                    <SanityBlockContent blocks={cover.text1} />
                </div>
                <div className={`text-two text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>
                    <SanityBlockContent blocks={cover.text2} />
                </div>
                <a href="#contacto" className={`see-more text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>Contáctanos</a>
            </div>
        </section>
    );
}

export default Cover;