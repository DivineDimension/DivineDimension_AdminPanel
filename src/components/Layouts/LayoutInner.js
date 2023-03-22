import React from 'react';
import Header from './Header';
import Footer from './FooterInner';
import Blue from '../../assets/images/circle-blue.png';



function LayoutInner(props) {
    return (
        <div id="wrapper">
            <div className="page-inner">
                <img src={Blue} className='circle-blue' alt="shape blue" />
                <Header />
                {props.children}
                <Footer />
            </div>
        </div>
    );
}

export default LayoutInner;