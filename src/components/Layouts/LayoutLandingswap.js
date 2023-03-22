import React from 'react';
import Header from './HeaderLandingswap';
import Footer from './Footerstableswap';
import Sidebar from './Sidebarswap';

function Layout(props) {
    const [show, setArrow] = React.useState(false);

    function handle(){
        setArrow(!show);
    }
    return (
        <div id="wrapper" className={`home-wrapper ${show ? 'active' : ''}`}>
            <button className='arrow-btn' onClick={() => handle()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <Header />
            <Sidebar />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;