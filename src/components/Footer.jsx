import React from 'react'
import '../css_modules/Footer.css'
import git from '../img/git.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'

function Footer() {
    return (
        <div className='footer'>
            <hr />
            <div className="social-footer">
                <ul className='social-list-footer'>
                    <li>
                        <img src={git} alt="" />
                        <a href="https://github.com/ARKuleba" target="_blank">@ARKuleba</a>
                    </li>
                    <li>
                        <img src={linkedin} alt="" />
                        <a href="https://www.linkedin.com/in/yuriy-kulesh-13115424b/" target="_blank">@ARKuleba</a>
                    </li>
                    <li>
                        <img src={twitter} alt="" />
                        <a href="https://twitter.com/ARKuleba_" target="_blank">@ARKuleba</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer