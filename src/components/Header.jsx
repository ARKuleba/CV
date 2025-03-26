import React from 'react'
import '../css_modules/Header.css'
import gmail from '../img/gmail.svg'
import gps from '../img/gps.svg'
import telegram from '../img/telegram.svg'
import web from '../img/web.svg'
import CVPhoto from '../img/CVPhoto.jpg'



function Header() {
    return (
        <header>
            <div className='name-block'>
                <div className="intro">
                    <h1 className='name'>ЮРИЙ КУЛЕШ</h1>
                    <h2 className='special'>Web Developer</h2>
                </div>
                <hr />
                <div className="social">
                    <ul className='social-list'>
                        <li>
                            <img src={telegram} alt="" />
                            <a href="https://t.me/ARKuleba" target="_blank">@ARKuleba</a>
                        </li>
                        <li>
                            <img src={gmail} alt="" />
                            <a href="mailto:arkuleba@gmail.com" target="_blank">arkuleba@gmail.com</a>
                        </li>
                        <li>
                            <img src={web} alt="" />
                            <a href="#" target="_blank">arkuleba.com</a>
                        </li>
                        <li>
                            <img src={gps} alt="" />
                            <p>Беларусь / Минск</p>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className='horizontal' />

            <div className='photo-block'>
                <img className='photo-cv' src={CVPhoto} alt="" />
                <p>Я начинающий разработчик веб-приложений, сосредоточенный на JavaScript и его фреймворках, включая React. Мне нравится решать сложные задачи и постоянно учиться чему-то новому. Я открыт к обучению и ценю возможность общения с опытными коллегами. </p>
            </div>

            <hr className='horizontal' />
        </header>
    )
}

export default Header