import React from 'react';
import AppNav from './AppNav.jsx';
import Footer from './Footer.jsx';

const Layout = (props) => {
    return (
        <>
            <AppNav />
            {props.children}
            <Footer/>
            
        </>
    );
};

export default Layout;