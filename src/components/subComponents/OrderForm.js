import React from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

function OrderForm(props) {
    return (
        <React.Fragment>
            <div className="row row-content boxStyle">
                <div className="col-md-10">
                    <h2>Custom Cake Order Form / Consultation Setup</h2>
                    <p><strong>Making Delicious Memories With Every Cake!</strong></p>
                    <Form>
                        
                        <FormGroup className="row">
                            <Label htmlFor="fullName" className="col-md-2 col-form-label"><strong>Full Name</strong></Label>
                            <div className="col">
                                <Input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" />
                            </div>
                            <Label htmlFor="phoneNumber" className="col-md-2 col-form-label"><strong>Phone Number</strong></Label>
                            <div className="col">
                                <Input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                            </div>
                        </FormGroup>

                        <FormGroup className="row">
                            <Label htmlFor="email" className="col-md-2 col-form-label"><strong>E-mail</strong></Label>
                            <div className="col">
                                <Input type="email" className="form-control" id="email" name="email" placeholder="E-mail" />
                            </div>
                            <Label htmlFor="guests" className="col-md-2 col-form-label"><strong>Guests</strong></Label>
                            <div className="col">
                                <Input type="number" className="form-control" id="guests" name="guests" placeholder="Number of Guests" />
                            </div>
                        </FormGroup>   
                        
                        <FormGroup className="row">
                            <Label htmlFor="orderDate" className="col-md-2 col-form-label"><strong>Date</strong></Label>
                            <div className="col-4">
                                <Input type="date" className="form-control" id="orderDate" name="orderDate" />
                            </div>
                            <Label htmlFor="fileUp" className="col-md-1 col-form-label"><strong>Reference Images</strong></Label>
                            <div className="col offset-1">
                                <Input src="#" type="file" id="fileUp" name="fileUp" />
                                <img id="preview" width="250" />
                            </div>
                        </FormGroup>

                        <FormGroup className="row">
                            <Label htmlFor="orderDetails" className="col-md-2 col-form-label"><strong>Other Details</strong></Label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="orderDetails" name="orderDetails" rows="4" placeholder="Please provide any additional details about your cake design here."></textarea>
                            </div>
                        </FormGroup>

                        <FormGroup className="row">
                            <br />
                            <h2 className="col-12">Set Up Consultation</h2>
                            <Label htmlFor="conDate" className="col-md-2 col-form-label"><strong>Date</strong></Label>
                            <div className="col-5 col-md-3">
                                <Input type="date" className="form-control" id="conDate" name="conDate" />
                            </div>
                            <Label htmlFor="conTime" className="col-md-1 col-form-label"><strong>Time</strong></Label>
                            <div className="col-md-3">
                                <Input type="time" className="form-control" id="conTime" name="conTime" />
                            </div>
                        </FormGroup>

                        <FormGroup className="row">
                            <div className="offset-md-2 col-md-10">
                                <Button type="submit" className="btn btn-info">Submit</Button>
                            </div>
                        </FormGroup>

                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OrderForm;