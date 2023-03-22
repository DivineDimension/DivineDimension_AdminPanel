import React from 'react';
import Header from './HeaderAnalytics';
import Footer from './FooterInner';

function Layout(props) {
    return (
        <div id="wrapper">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;