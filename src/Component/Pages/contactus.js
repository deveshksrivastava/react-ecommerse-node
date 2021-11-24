import React from 'react'
import Header from './header'
export default function ContactUs() {
    return (
        <div>
        <Header />

        <div class="ps-contact ps-section pb-80">
        {/* <div id="contact-map" data-address="New York, NY" data-title="Sky Store!" data-zoom="17">
        
        </div> */}
        <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="map-iframe">
                    <iframe
                      //  frameborder="1|0"
                      width="1140"
                      title="map"
                      height="541.25"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                      style={{
                        border: '10',
                        width: '100% ',
                        height: 400,
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
        <div class="ps-container">
          <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  <div class="ps-section__header mb-50">
                    <h2 class="ps-section__title" data-mask="Contact">- Get in touch</h2>
                    <form class="ps-contact__form" action="do_action" method="post">
                      <div class="row">   
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                              <div class="form-group">
                                <label>Name <sub>*</sub></label>
                                <input class="form-control" type="text" placeholder=""/>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                              <div class="form-group">
                                <label>Email <sub>*</sub></label>
                                <input class="form-control" type="email" placeholder=""/>
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                              <div class="form-group mb-25">
                                <label>Your Message <sub>*</sub></label>
                                <textarea class="form-control" rows="6"></textarea>
                              </div>
                              <div class="form-group">
                                <button class="ps-btn">Send Message<i class="ps-icon-next"></i></button>
                              </div>
                            </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  <div class="ps-section__content">
                    <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div class="ps-contact__block" data-mh="contact-block">
                              <header>
                                <h3>USA <span> San Francisco</span></h3>
                              </header>
                              <footer>
                                <p><i class="fa fa-map-marker"></i> 19C Trolley Square  Wilmington, DE 19806</p>
                                <p><i class="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">supportShoes@shoes.net</a></p>
                                <p><i class="fa fa-phone"></i> ( +84 ) 9892 2324  -  9401 123 003</p>
                              </footer>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div class="ps-contact__block" data-mh="contact-block">
                              <header>
                                <h3>Ireland  <span> Dublin</span></h3>
                              </header>
                              <footer>
                                <p><i class="fa fa-map-marker"></i> 19C Trolley Square  Wilmington, DE 19806</p>
                                <p><i class="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">supportShoes@shoes.net</a></p>
                                <p><i class="fa fa-phone"></i> ( +84 ) 9892 2324  -  9401 123 003</p>
                              </footer>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div class="ps-contact__block" data-mh="contact-block">
                              <header>
                                <h3>Brazil <span> São Paulo</span></h3>
                              </header>
                              <footer>
                                <p><i class="fa fa-map-marker"></i> 19C Trolley Square  Wilmington, DE 19806</p>
                                <p><i class="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">supportShoes@shoes.net</a></p>
                                <p><i class="fa fa-phone"></i> ( +84 ) 9892 2324  -  9401 123 003</p>
                              </footer>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div class="ps-contact__block" data-mh="contact-block">
                              <header>
                                <h3>Philippines <span> Quezon City</span></h3>
                              </header>
                              <footer>
                                <p><i class="fa fa-map-marker"></i> 19C Trolley Square  Wilmington, DE 19806</p>
                                <p><i class="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">supportShoes@shoes.net</a></p>
                                <p><i class="fa fa-phone"></i> ( +84 ) 9892 2324  -  9401 123 003</p>
                              </footer>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      </div>
    )
}
