import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
      <nav className="header-fixed">
        <div className="container">
          <div className="row flex-nowrap align-items-center justify-content-between">
            <div className="col-auto d-block d-lg-none header-fixed-col">
              <div className="main-mnu-btn">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <span className="bar bar-4"></span>
              </div>
            </div>
            <div className="col-auto header-fixed-col">

              <a href="/" className="logo" title="PathSoft">
                <img src={require('../../img/logo.PNG')} width="100" height="300" alt="PathSoft" />
              </a>
            </div>
            <div className="col-auto header-fixed-col d-none d-lg-block col-static">

              <nav className="main-mnu">
                <ul className="main-mnu-list">
                  <li><a href="index.html" data-title="Inicio"><span>Inicio</span></a></li>
                  <li><a href="about-us.html" data-title="Sobre nosotros"><span>Sobre nosotros</span></a></li>
                  <li><a href="services.html" data-title="Servicios"><span>Servicios</span></a></li>
                  <li><a href="tabs-and-accordions.html" data-title="Ahorro e Inversión"><span>Ahorro e Inversión</span></a></li>
                  <li><a href="contact-us.html" data-title="Contactanos"><span>Contactanos</span></a></li>

                </ul>
              </nav>
            </div>
            <div className="col-auto header-fixed-col col-static">

              <nav className="main-mnu">
                <ul className="">
                  <li><a href="index.html" class="btn btn-primary btn-lg active"  aria-pressed="true" role="button" data-title="Acceso clientes"><span>Acceso a clientes</span></a></li>
                </ul>
              </nav>

            </div>

            <li className="d-block d-lg-none">
              <div className="header-navbar">
                <div className="header-navbar-btn">
                  <i className="material-icons md-24">more_vert</i>
                </div>
                <ul className="header-navbar-content">
                  <li>
                    <a href="mailto:mail@example.com">
                      <i className="material-icons md-20">mail_outline</i>
                      <span>mail@example.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mail@example.com" className="formingHrefTel">
                      <i className="material-icons md-20">support_agent</i>
                      <span>1-888-777-1234</span>
                    </a>
                  </li>
                  <li>

                    <ul className="social-links">
                      <li>
                        <a href="#!" title="Facebook">
                          {/*<svg viewBox="0 0 320 512"><use xlink:href="assets/img/sprite.svg#facebook-icon"></use></svg>*/}
                        </a>
                      </li>
                      <li>
                        <a href="#!" title="Instagram">
                          {/*<svg viewBox="0 0 448 512"><use xlink:href="assets/img/sprite.svg#instagram-icon"></use></svg>*/}
                        </a>
                      </li>
                      <li>
                        <a href="#!" title="LinkedIn">
                          {/*<svg viewBox="0 0 448 512"><use xlink:href="assets/img/sprite.svg#linkedin-icon"></use></svg>*/}
                        </a>
                      </li>
                      <li>
                        <a href="#!" title="Twitter">
                          {/*<svg viewBox="0 0 512 512"><use xlink:href="assets/img/sprite.svg#twitter-icon"></use></svg>*/}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </header>
    
    )
  }
}


