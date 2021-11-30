import React from 'react'

export default function HomeContact() {
    return (
        <div className="ps-home-contact">
            
        <div id="contact-map" data-address="New York, NY" data-title="BAKERY LOCATION!" data-zoom="17">
        <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="map-iframe">
                    <iframe                      
                      title="map"
                      height="541.25"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                      style={{
                        border: 0,
                        width: '100% ',
                        height: 500,
                    
                        float:'right'
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>    
        </div>  
        <div className="ps-home-contact__form">
        <header>
            <h3>Contact Us</h3>
            <p>Learn about our company profile, communityimpact, sustainable motivation, and more.</p>
        </header>
        <footer>
            <form action="product-listing.html" method="post">
            <div className="form-group">
                <label>Name<span>*</span></label>
                <input className="form-control" type="text"/>
            </div>
            <div className="form-group">
                <label>Email<span>*</span></label>
                <input className="form-control" type="email"/>
            </div>
            <div className="form-group">
                <label>Your message<span>*</span></label>
                <textarea className="form-control" rows="4"></textarea>
            </div>
            <div className="form-group text-center">
                <button className="ps-btn">Send Message<i className="fa fa-angle-right"></i></button>
            </div>
            </form>
        </footer>
        </div>
    </div>
    )
}
