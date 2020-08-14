import React from 'react';
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
            <div className="col d-flex justify-content-center">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12231.083241592713!2d-75.36253930909427!3d39.968876615788254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ea63b26c5429%3A0xb2ea7a5c8d00aa83!2sBroomall%2C%20PA%2019008!5e0!3m2!1sen!2sus!4v1594585163259!5m2!1sen!2sus"
                    width="1070px"
                    height="300px"
                    id="map"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
        <br />
            <div className="row row-content boxStyle">
                <div className="col-md-10">
                    <h2>Send us your Feedback</h2>
                    <p><strong>All</strong> feedback is appreciated - we are always trying to improve our service.</p>
                    <form>
                        <div className="form-group row">
                            <label for="fullName" className="col-md-2 col-form-label"><strong>Full Name</strong></label>
                            <div className="col">
                                <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="phoneNumber" className="col-md-2 col-form-label"><strong>Phone Number</strong></label>
                            <div className="col">
                                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                            </div>
                            <label for="email" className="col-md-1 col-form-label"><strong>Email</strong></label>
                            <div className="col">
                                <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="feedback" className="col-md-2 col-form-label"><strong>Your Feedback</strong></label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="feedback" name="feedback" rows="4" placeholder="Comments Here Please"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-2 col-md-10">
                                <button type="submit" className="btn btn-info">Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <br />
        </div>
    );
}

export default Contact;