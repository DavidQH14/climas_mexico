import React from 'react'
import { buildImages } from '../libs/helpers'
import BlockContent from '@sanity/block-content-to-react';

const Types = ({types}) => {
    return (
        <>
            {
                (types)
                    ?
                        <div className="types">
                            <div className="block-title text-inview">Tipos:</div>
                            {
                                (types.text1 && types.text2)
                                    ?
                                        <div className="types-one">
                                            <div className="flex-content">
                                                <div className="text-wrapper">
                                                    <div className="text-one text-inview">
                                                        <BlockContent blocks={types.text1} />
                                                    </div>
                                                    <div className="images-wrapper text-inview">
                                                        <div className="image-one">
                                                            <img src={buildImages(types.image1?.asset._ref).url()} alt="Imagen Uno" />
                                                        </div>
                                                        <div className="image-two">
                                                            <img src={buildImages(types.image2?.asset._ref).url()} alt="Imagen Dos" />
                                                        </div>
                                                        <div className="image-three">
                                                            <img src={buildImages(types.image3?.asset._ref).url()} alt="Imagen Tres" />
                                                        </div>
                                                    </div>
                                                    <div className="text-two text-inview">
                                                        <BlockContent blocks={types.text2} />
                                                    </div>
                                                    <div className="images-wrapper text-inview">
                                                        <div className="image-four">
                                                            <img src={buildImages(types.image4?.asset._ref).url()} alt="Imagen Cuatro" />
                                                        </div>
                                                        <div className="image-five">
                                                            <img src={buildImages(types.image5?.asset._ref).url()} alt="Imagen Cinco" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="float-image text-inview">
                                                    <div className="image-six">
                                                            <img src={buildImages(types.image6?.asset._ref).url()} alt="Imagen Seis" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        null
                            }
                            {
                                (types.all_types)
                                    ?
                                        <div className="types-two">
                                            {
                                                types.all_types.map((type, index) => (
                                                    <div className="item" key={index}>
                                                        <div className="image-wrapper image-inview">
                                                            <div className="image">
                                                                <img src={buildImages(type.image?.asset._ref).url()} alt={type.text1} />
                                                            </div>
                                                        </div>
                                                        <div className="item-wrapper text-inview">
                                                            <div className="item-name">{type.text1}</div>
                                                            <div className="item-desc">{type.text2}</div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    :
                                        null
                            }
                        </div>
                    :
                        null
            }
        </>
    );
}

export default Types;