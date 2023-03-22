import React from 'react';
import Footer from './Footer';
import Header from './HeaderT';
// import Sidebar from '../Layouts/Sidebarswap';
import Sidebar from './Sidebar';

function Layout(props) {
    const [show, setShow] = React.useState(false);
    const pull_data = (data) => {
        setShow(data)
      }
    return (
        <>
        {/* <Sidebar/>  className={show ? 'ps-dash' : ''} */}
            <div id="dashboard">
                <Header func={pull_data} />
                {/* <Sidebar /> */}
                {props.children}
               
            </div>
          
            
            <Footer />
            
        </>
    );
}

export default Layout;