import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm text-center">
                        <h5><strong>Bakery Hours</strong></h5>
                        <p>
                            <strong>Sun:</strong> 8am - 2pm
                            <br /><strong>Mon:</strong> closed
                            <br /><strong>Tues - Fri:</strong> 7:30am - 6pm
                            <br /><strong>Sat:</strong> 8am - 3pm
                        </p>
                    </div>
                    <div className="col-sm mb-3 text-center">
                        <h5><strong>Social</strong></h5>
                        <a className="btn btn-social-icon btn-flickr" href="http://flickr.com/"><i className="fa fa-flickr" /></a>{" "}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{" "}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>{" "}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{" "}
                        <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-sm text-center">
                        <h5><strong>Contact</strong></h5>
                        <a role="button" className="btn btn-link" href="tel:+8675309"><i className="fa fa-phone" /> 867-5309</a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@edibledelights.com"><i className="fa fa-envelope" /> info@edibledelights.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;