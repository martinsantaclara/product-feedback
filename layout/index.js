import React from 'react';

export const Layout = ({children}) => {
    return (
        <>
            <main>{children}</main>
            <footer style={{color: '#8e9aff'}}>
                Developed by Martin Santa Clara
            </footer>
        </>
    );
};
