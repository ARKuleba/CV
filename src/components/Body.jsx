import React from 'react'
import '../css_modules/Body.css'

function Body() {

  return (
    <div className='body-main'>
      <div className='body-block'>
        <div className='main'>
          <h3>ОПЫТ РАБОТЫ</h3>

          <div className='exp'>
            <h4>Web Developer</h4>
          </div>

          <div className='text'><strong>1. </strong><p className='title'>Отсутствие профессионального опыта, но активное обучение в университете.</p></div>
          <ul className='description'>
            <li>У меня нет коммерческого опыта работы, но во время учебы в университете я изучал основы разработки программного обеспечения и принципы проектирования.</li>
            <li>Я активно участвовал в учебных проектах, где применял теоретические знания на практике.</li>
          </ul>

          <div className='text'><strong>2. </strong><p className='title'>Разработка MVC-проектов на Java.</p></div>
          <ul className='description'>
            <li>В рамках учебных заданий я реализовывал проекты, используя архитектуру MVC на Java. Это включало создание моделей для работы с данными, разработку контроллеров для обработки логики приложения и построение представлений для отображения информации.</li>
            <li>Эти проекты помогли мне понять, как организовать код и делать его масштабируемым и поддерживаемым.</li>
          </ul>

          <div className='text'><strong>3. </strong><p className='title'>Создание приложений с использованием React.</p></div>
          <ul className='description'>
            <li>Я разрабатывал пользовательские интерфейсы с помощью React, создавая интерактивные компоненты и управляя состоянием приложения. Работая с React, я изучил основы работы с компонентами и маршрутизацией. </li>
            <li>Эти навыки позволяют мне эффективно разрабатывать фронтенд-часть веб-приложений.</li>
          </ul>

          <h3 className='projects'>ПРОЕКТЫ</h3>
          <div className='project-box'>
            <a className='project' href='https://github.com/ARKuleba/Notion/tree/main' target='_blank'>
              <h4 className='notion'>Notion</h4>
              <p className='project-desc'>Приложение для ведения заметок</p>
              <div className='tools'>
                <p className='tool'>React JS</p>
                <p className='tool'>Vite</p>
                <p className='tool'>Browser Extension</p>
              </div>
            </a>
            <a className='project' href='https://github.com/ARKuleba/Wedding-Tours/tree/master' target='_blank'>
              <h4 className='notion'>Wedding-Tours</h4>
              <p className='project-desc'>Свадебное турагентство</p>
              <div className='tools'>
                <p className='tool'>Java</p>
                <p className='tool'>JSP</p>
                <p className='tool'>JSTL</p>
              </div>
            </a>
            <a className='project' href='https://github.com/ARKuleba/Online-shop' target='_blank'>
              <h4 className='notion'>Online-shop</h4>
              <p className='project-desc'>Шаблон для магазина одежды</p>
              <div className='tools'>
                <p className='tool'>React JS</p>
                <p className='tool'>Browser Extension</p>
              </div>
            </a>
            <a className='project' href='https://github.com/ARKuleba/Routing' target='_blank'>
              <h4 className='notion'>Routing</h4>
              <p className='project-desc'>Пример маршрутизации на React</p>
              <div className='tools'>
                <p className='tool'>React JS</p>
                <p className='tool'>Browser Extension</p>
              </div>
            </a>
          </div>
        </div>

        <hr className='line' />

        <div className='info'>
          <h3>Образование</h3>
          <h4 className='web'>Web-programming in IT</h4>
          <p className='edu'>БГУ</p>
          <p className='edu'>3 курс</p>
          <p className='edu'>Механико-математический факультет</p>
          <p className='edu'>Веб-программирование и интернет-технологии</p>

          <h3 className='skills'>НАВЫКИ</h3>
          <h4 className='web'>Технические</h4>
          <p className='tech'>HTML5</p>
          <p className='tech'>CSS3</p>
          <p className='tech'>ReactJS</p>
          <p className='tech'>Java</p>

          <h4 className='web'>профессиональные</h4>
          <p className='tech'>Эффективная коммуникация</p>
          <p className='tech'>Отвественность</p>
          <p className='tech'>Хорошее управление временем</p>
          <p className='tech'>Системное мышление</p>

          <h3 className='language'>Языки</h3>
          <div className='lan-box'><p className='lan'>Английский</p><p className='level'> (A2)</p></div>
          <div className='lan-box'><p className='lan'>Русский</p> <p className='level'> (Native)</p></div>

        </div>
      </div>
    </div>

  )
}

export default Body