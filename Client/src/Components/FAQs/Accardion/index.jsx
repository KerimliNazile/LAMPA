import React, { useState } from 'react';
import './index.scss'
const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleItemClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="TextAccordion">
                <h1>#Frequently Asked Questions</h1>
                {/* <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> */}
            </div>
            <div className="Area">
                <div className="ImgDisplay">
                    <div className="RightAcardionImg">
                        <img src="https://lights-demo.myshopify.com/cdn/shop/articles/blog03_82ae410c-6c4d-4797-a41f-67fba626dd94.jpg?v=1640685045" alt="" />
                    </div>
                    <div className="ImgAcardion">
                        <img src="https://dt-lights.myshopify.com/cdn/shop/files/responsive-slider-2_768x940.jpg?v=1614290586" alt="" />
                    </div>
                </div>


                <section id='Accordion'>
                    <div className="AreaAcardion">

                        <div className="LeftAcardion">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <div
                                        onClick={() => handleItemClick(index)}
                                        style={{ cursor: 'pointer', padding: '20px', border: '1px solid #ccc', color: '#294B29', fontSize: '18px' }}
                                    >
                                        <strong>{item.title}</strong>
                                    </div>
                                    {expandedIndex === index && (
                                        <div style={{ padding: '20px', border: '1px solid #789461', fontSize: '18px', color: '#294B29' }}>
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>


                </section>
            </div>


        </>
    );
};

export default Accordion;