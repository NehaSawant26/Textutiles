import React, { useState } from 'react'

export default function About(props) {
    return (
        <div className="container" style={{color: props.mode ==='dark'? 'white': '#042743'}}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion my-3" id="accordionExample" style={{color: props.mode ==='dark'? 'white': '#042743'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}}>
                            Textutiles gives you a way to analyze your text quickly and efficiently. Be it word count, character count, etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}}>
                            Textutiles is a free character counter tool that provides instant character count and word count statistics for a given text . Textutiles reports the number of words and characters. Thus it is suitable for writing text with word/charcater limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': '#042743'}}>
                            This word counter software works in any web browser such as chrome , firefox, Internet Explorer, Safari , Opera. It suits to count characters in facebook, book, excel document, pdf documents, essays,etc.It is the potential of a web browser to efficiently display the HTML code and carry out the scripts on web pages.
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

