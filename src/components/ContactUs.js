import React from 'react';
import ContactForm from './subComponents/ContactForm';
import Iframe from 'react-iframe';

function Contact(props) {
    return (
        <div className="container">
        <br />
            <div className="row boxStyle border-bottom-0">
                <div className="col">
                    <h2 className="text-center pt-3">Contact Us</h2><hr />
                </div>
            </div>
            <div className="row px-4 border-top-0 boxStyle">
                <br /><br />
                <div className="col-sm-3">
                    <h4><strong>Our Address</strong></h4>
                    <address>
                        123 Candywood Lane<br />
                        Sweetall, PA 19008<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col-sm">
                    <h4><strong>We do our best to respond in 24 hours.</strong></h4>
                    <a role="button" className="btn btn-link" href="tel:+8675309"><i className="fa fa-phone" /> 867-5309</a><br />
                    <a role="button" className="btn btn-link" href="mailto:info@edibledelights.com"><i className="fa fa-envelope-o" /> info@edibledelights.com</a>
                </div>
                <div className="col-sm-3 mt-2 m-sm-auto">
                    <h4><strong>Bakery Hours</strong></h4>
                    <p>
                        <strong>Sun:</strong> 8am - 2pm
                        <br /><strong>Mon:</strong> closed
                        <br /><strong>Tues - Fri:</strong> 7:30am - 6pm
                        <br /><strong>Sat:</strong> 8am - 3pm
                    </p>
                </div>
            </div>
        <br />
            <div className="row boxStyle border-bottom-0">
                <div className="col">
                    <h2 className="text-center pt-3">Directions</h2><hr />
                </div>
            </div>
            <div className="row d-flex justify-content-center border-top-0 boxStyle pb-3">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12231.083241592713!2d-75.36253930909427!3d39.968876615788254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ea63b26c5429%3A0xb2ea7a5c8d00aa83!2sBroomall%2C%20PA%2019008!5e0!3m2!1sen!2sus!4v1594585163259!5m2!1sen!2sus"
                    width="1000px"
                    height="250px"
                    id="map"
                    display="initial"
                    position="relative" />
            </div>
        <br />
            <ContactForm />
        <br />
        </div>
    );
}

export default Contact;