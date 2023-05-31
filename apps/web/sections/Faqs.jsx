import React from 'react'

const Faqs = ({ faqs }) => {

    const expando = (e) => {
        let parent = e.target.parentNode,
            content = parent.querySelector('.block.faqs .item-content'),
            wrapper = parent.querySelector('.block.faqs .item-wrapper'),
            newHeight = wrapper.offsetHeight,
            allItems = document.querySelectorAll('.block.faqs .item');

        if (parent.classList.contains('expanded')) {
            content.style.height = '0';
            parent.classList.remove('expanded')
        } else {
            allItems.forEach(item => {
                let itemContent = item.querySelector('.block.faqs .item-content');
                itemContent.style.height = '0';
                item.classList.remove('expanded')
            })
            content.style.height = newHeight + 'px';
            parent.classList.add('expanded')
        }
    }

    return (
        <section className="block faqs">
            <div className="holder">
                <div className="header">
                    <div className="title text-inview">Preguntas Frecuentes</div>
                </div>
                <div className="content">
                    {
                        faqs.faqs.map((faq, index) => (
                            <div className="item text-inview" key={index}>
                                <div className="item-header" onClick={expando}>
                                    <div className="question">{faq.text1}</div>
                                </div>
                                <div className="item-content">
                                    <div className="item-wrapper">
                                        <div className="answer">{faq.text2}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Faqs;