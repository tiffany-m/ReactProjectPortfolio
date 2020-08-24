import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            feedback: '',
            touched: {
                fullName: false,
                phoneNumber: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(fullName, phoneNumber, email) {
        const errors = {
            fullName: '',
            phoneNumber: '',
            email: ''
        };

        if (this.state.touched.fullName) {
            if (fullName.length < 2) {
                errors.fullName = 'First name must be at least 2 characters.';
            } else if (fullName.length > 30) {
                errors.fullName = 'First name must be 30 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNumber && !reg.test(phoneNumber)) {
            errors.phoneNumber = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.fullName, this.state.phoneNumber, this.state.email);

    return (
        <React.Fragment>
            <div className="row row-content boxStyle">
                <div className="col-md-10">
                    <h2>Send us your Feedback</h2>
                    <p><strong>All</strong> feedback is appreciated - we are always trying to improve our service.</p>
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup className="row">
                        <Label htmlFor="fullName" className="col-md-2 col-form-label"><strong>Full Name</strong></Label>
                        <div className="col">
                            <Input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name"
                                value={this.state.fullName}
                                invalid={errors.fullName}
                                onBlur={this.handleBlur("fullName")}
                                onChange={this.handleInputChange} />
                                <FormFeedback>{errors.fullName}</FormFeedback>
                        </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="phoneNumber" className="col-md-2 col-form-label"><strong>Phone Number</strong></Label>
                        <div className="col">
                            <Input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" 
                                value={this.state.phoneNumber}
                                invalid={errors.phoneNumber}
                                onBlur={this.handleBlur("phoneNumber")}
                                onChange={this.handleInputChange} />
                                <FormFeedback>{errors.phoneNumber}</FormFeedback>
                        </div>
                        <Label htmlFor="email" className="col-md-1 col-form-label"><strong>Email</strong></Label>
                        <div className="col">
                            <Input type="email" className="form-control" id="email" name="email" placeholder="E-mail" 
                                value={this.state.email}
                                invalid={errors.email}
                                onBlur={this.handleBlur("email")}
                                onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback> 
                        </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label htmlFor="feedback" className="col-md-2 col-form-label"><strong>Your Feedback</strong></Label>
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
}

export default ContactForm;