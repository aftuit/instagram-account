import React from 'react';
import Footer from '../components/Footer';

const Common = (props) => {

    return (
        <div className="wrapper">
            {props.children}

            <Footer/>
        </div>
    );
};

export default Common;