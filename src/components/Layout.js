import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Layouts/Sidebarswap';

function Layout(props) {
    return (
        <div id="wrapper">
            <Sidebar />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;