import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div class="footer-main">
          <div class="container">
              <div class="row items">
                  <div class="col-xl-3 col-lg-3 col-md-5 col-12 item">
          
                      <div class="footer-company-info">
                          <div class="footer-company-top">
                              <a href="/" class="logo" title="PathSoft">
                                  <img data-src="assets/img/logo.PNG" width="200" height="200" class="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="PathSoft"/>
                              </a>
                              <div class="footer-company-desc">
                                  <p>Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</p>
                              </div>
                          </div>
                          <ul class="footer-social-links">
                              <li>
                                  <a href="#!" title="Facebook">
                                      <svg viewBox="0 0 320 512">
                                         {/*<use xlink:href="assets/img/sprite.svg#facebook-icon"></use>*/}
                                      </svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="#!" title="Instagram">
                                      <svg viewBox="0 0 448 512">
                                         {/*<use xlink:href="assets/img/sprite.svg#instagram-icon"></use>*/}
                                      </svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="#!" title="LinkedIn">
                                      <svg viewBox="0 0 448 512">
                                        {/*	<use xlink:href="assets/img/sprite.svg#linkedin-icon"></use>*/}
                                      </svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="#!" title="Twitter">
                                      <svg viewBox="0 0 512 512">
                                      {/*	<use xlink:href="assets/img/sprite.svg#twitter-icon"></use>*/}
                                      </svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      
                  </div>
                  <div class="col-xl-2 offset-xl-1 col-md-3 col-5 col-lg-2 item">
                      <div class="footer-item">
                          <p class="footer-item-heading">Menu</p>
                          <nav class="footer-nav">
                              <ul class="footer-mnu">
                                  <li><a href="about-us.html" class="hover-link" data-title="About Us"><span>About Us</span></a></li>
                                  <li><a href="services.html" class="hover-link" data-title="Services"><span>Services</span></a></li>
                                  <li><a href="typography.html" data-title="Typography"><span>Typography</span></a></li>
                                  <li><a href="news.html" class="hover-link" data-title="News"><span>News</span></a></li>
                                  <li><a href="contact-us.html" class="hover-link" data-title="Contact Us"><span>Contact Us</span></a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-7 item">
                      <div class="footer-item">
                          <p class="footer-item-heading">What We Offer</p>
                          <nav class="footer-nav">
                              <ul class="footer-mnu">
                                  <li><a href="#!" class="hover-link" data-title="DB Management"><span>DB Management</span></a></li>
                                  <li><a href="#!" class="hover-link" data-title="IOS/MacOS"><span>IOS/MacOS</span></a></li>
                                  <li><a href="#!" class="hover-link" data-title="Android Apps"><span>Android Apps</span></a></li>
                                  <li><a href="#!" class="hover-link" data-title="Windows Apps"><span>Windows Apps</span></a></li>
                                  <li><a href="#!" class="hover-link" data-title="UX & UI"><span>UX & UI</span></a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <div class="col-xs-4 col-lg-4 col-12 item">
                      <div class="footer-item">
                          <p class="footer-item-heading">Nuestros Contactos</p>
                          <ul class="footer-contacts">
                              <li>
                                  <i class="material-icons md-22">location_on</i>
                                  <div class="footer-contact-info">
                                      301 S Irving Blvd Los Angeles, CA 90020
                                  </div>
                              </li>
                              <li>
                                  <i class="material-icons md-22 footer-contact-tel">smartphone</i>
                                  <div class="footer-contact-info">
                                      <a href="#!" class="formingHrefTel">+1 323-913-4688</a>, <a href="#!" class="formingHrefTel">+1 323-888-4554</a>
                                  </div>
                              </li>
                              <li>
                                  <i class="material-icons md-22 footer-contact-email">email</i>
                                  <div class="footer-contact-info">
                                      <a href="mailto:mail@example.com">mail@example.com</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="footer-item">
                          <p class="footer-item-heading">Subscribe</p>
                          <form action="#!" method="post" class="footer-subscribe">
                              <div class="form-field">
                                  <label for="subscribe-email" class="form-field-label">Your email</label>
                                  <input type="email" class="form-field-input" name="Subscribe_email" value="" autocomplete="off" required="required" id="subscribe-email"/>
                              </div>
                              <div class="form-btn">
                                  <button type="submit" class="btn ripple"><span>Subscribe</span></button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom">
          <div class="container">
              <div class="row justify-content-between items">
                  <div class="col-md-auto col-12 item">
                      <nav class="footer-links">
                          <ul>
                              <li><a href="terms-and-conditions.html">Terminos y condiciones</a></li>
                              <li><a href="privacy-policy.html">Políticas de Privacidad</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div class="col-md-auto col-12 item">
                      <div class="copyright">Derechos Reservados de Familisurance.</div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    )
  }
}