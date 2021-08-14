import React from 'react'
import './Footer.scss';

function Footer():JSX.Element {
    return (
        <footer className="Footer" data-test="Footer">
        <div className="Footer__text" data-test="Footer__text">
            © {new Date().getFullYear()}
            <a href="https://github.com/vjnadar"> Korkai Software,</a> All Rights Reserved.
        </div>
    </footer>
    )
}

export default Footer
