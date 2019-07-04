import React from 'react';
import Flip from 'react-reveal/Flip';

const PageHeader = (props) => {
    return (
        <header className="section-header">
            <div className="container h-100">
                <div className="row h-100 align-items-end">
                    <div className="col text-white">
                        <h1><Flip left cascade delay={1000}>{props.title}</Flip></h1>
                        {props.desc ? <p>{props.desc}</p> : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;