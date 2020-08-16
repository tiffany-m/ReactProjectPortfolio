import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

function ContactForm(props) {
    return (
        <React.Fragment>
            <div className="row row-content boxStyle">
                <div className="col-md-10">
                    <h2>Send us your Feedback</h2>
                    <p><strong>All</strong> feedback is appreciated - we are always trying to improve our service.</p>
                <Form>

                    <FormGroup className="row">
                        <Label for="fullName" className="col-md-2 col-form-label"><strong>Full Name</strong></Label>
                        <div className="col">
                            <Input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" />
                        </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label for="phoneNumber" className="col-md-2 col-form-label"><strong>Phone Number</strong></Label>
                        <div className="col">
                            <Input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                        </div>
                        <Label for="email" className="col-md-1 col-form-label"><strong>Email</strong></Label>
                        <div className="col">
                            <Input type="email" className="form-control" id="email" name="email" placeholder="E-mail" />
                        </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label for="feedback" className="col-md-2 col-form-label"><strong>Your Feedback</strong></Label>
                        <div className="col-md-10">
                            <textarea className="form-control" id="feedback" name="feedback" rows="4" placeholder="Comments Here Please"></textarea>
                        </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <div className="offset-md-2 col-md-10">
                            <Button type="submit" className="btn btn-info">Send Feedback</Button>
                        </div>
                    </FormGroup>

                </Form>
            </div>
        </div>
    </React.Fragment>
    );
}

export default ContactForm;