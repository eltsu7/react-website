import React from 'react'
import './css/Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav>
            <li>
                <a id='link' href="http://eelih.fi/blog/">Blog</a>
            </li>
            <li>
                <a id='link' target="_blank" rel="noopener noreferrer" href="https://github.com/eltsu7/">GitHub</a>
            </li>
            <li>
                <a id='link' target="_blank" rel="noopener noreferrer" href="https://eeli.kuvat.fi/">Gallery</a>
            </li>
            </nav>
        </div>
    )
}