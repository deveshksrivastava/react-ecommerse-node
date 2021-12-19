import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
    <div>
      <div className="ps-footer bg--cover" data-background="images/background/p.jpg">
        <div className="ps-footer__content">
          <div className="ps-container">
            <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--info">
                      <header><Link className="ps-logo" to="/"><img src="images/background/logomakr.png" alt=""/></Link>
                        <h3 className="ps-widget__title">Address Office 1</h3>
                      </header>
                      <footer>
                        <p><strong> 17, Bridge Street, Swindon- SN1 1BU</strong></p>
                        <p>Email: <a href='mailto: devesh.srivastava@techbluehost.com'> devesh.srivastava@techbluehost.com</a></p>
                        <p>Phone: +44 7918353342</p>
                        {/* <p>Fax: ++323 32434 5333</p> */}
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--info second">
                      <header>
                        <h3 className="ps-widget__title">Address Office 2</h3>
                      </header>
                      <footer>
                        <p><strong>North East Delhi, Delhi, 110053</strong></p>
                        <p>Email: <a href='mailto:devesh.srivastava@techbluehost.com'>devesh.srivastava@techbluehost.com</a></p>
                        <p>Phone: 9999305585</p>

                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Find Our store</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--link">
                          <li><a href="#">Coupon Code</a></li>
                          <li><a href="#">SignUp For Email</a></li>
                          <li><a href="#">Site Feedback</a></li>
                          <li><a href="#">Careers</a></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Get Help</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--line">
                          <li><a href="#">Order Status</a></li>
                          <li><a href="#">Shipping and Delivery</a></li>
                          <li><a href="#">Returns</a></li>
                          <li><a href="#">Payment Options</a></li>
                          <li><a href="#">Contact Us</a></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                    <aside className="ps-widget--footer ps-widget--link">
                      <header>
                        <h3 className="ps-widget__title">Products</h3>
                      </header>
                      <footer>
                        <ul className="ps-list--line">
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Accessries</a></li>
                          <li><a href="#">Football Boots</a></li>
                        </ul>
                      </footer>
                    </aside>
                  </div>
            </div>
          </div>
        </div>
        <div className="ps-footer__copyright">
          <div className="ps-container">
            <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <p>&copy; <a href="#">TECHBLUEHOST</a>, Inc. All rights Resevered. Design by <a href="#"> Devesh Srivastava</a></p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <ul className="ps-social">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>  
    </div> 
    )
}
