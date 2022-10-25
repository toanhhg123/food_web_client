import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <a href="#/" className="scroll" id="top">
                <span>
                    <i className="fa fa-angle-double-up"></i>
                </span>
            </a>
            <div className="mm-fullscreen-bg"></div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
