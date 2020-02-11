import React from 'react'
import './css/About.css'


export default function About() {
    return (
        <div class="grid-container">
            <main>
                <h1>Eeli Hernesniemi</h1>
                <p>Studying my third year of information technology in Tampere University, majoring in software engineering.</p>
                <p>Photographing anything that peaks my interest, both in digital and in film.</p>
                <p>{ calculateAge() } years old.</p>
                <p>Buzzwords: Python, C++, Qt, Linux, Git, SQL, DigitalOcean, Docker, Django, React</p>
            </main>

            <header>
                <li>
                    <a id='link' href="http://eelih.fi/blog/">Blog</a>
                </li>
                <li>
                    <a id='link' target="_blank" rel="noopener noreferrer" href="https://github.com/eltsu7/">GitHub</a>
                </li>
                <li>
                    <a id='link' target="_blank" rel="noopener noreferrer" href="https://eeli.kuvat.fi/">Gallery</a>
                </li>
            </header>

            <div class="portrait">
                {/* <img src={process.env.PUBLIC_URL + "/images/portrait.jpg"} alt="Pic of Me"></img> */}
            </div>

        </div>
    )
}

function calculateAge() {
    var year = 365 * 24 * 60 * 60 * 1000;
    var birthday = new Date("1996-12-24T00:00:00")
  
    // age in milliseconds
    var ageMs = Date.now() - birthday.getTime();
  
    // age in years
    var age = ageMs / year;
  
    // floored to 1 decimal
    return Math.floor( age * 10 ) / 10;
}