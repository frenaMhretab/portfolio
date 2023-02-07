import React, { Component } from 'react';
import axios from 'axios';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';


const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });
    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });
    return isValid;
};

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            phone: '',
            subject: '',
            message: '',
            isError: {
                email: '',
                name: '',
                phone: '',
                subject: '',
                message: ''
            }
        }
    }

    onSubmit = e => {
        const data = {};
        data.subject = this.state.subject;
        data.email = this.state.email;
        data.phone = this.state.phone;
        data.message = this.state.message;
        data.name = this.state.name;
        e.preventDefault();
        if (formValid(this.state)) {
             
            axios.post( 'https://fetqh6zovc.execute-api.us-east-1.amazonaws.com/v1/contact', data);
            toastr.success('Message send successfully', 'Title', { displayDuration: 3000 });
            e.target.reset();
            // .then(
            //     (response) => {
            //         //console.log("Response: " + JSON.stringify(response));
            //         toastr.success('Message send successfully', 'Title', { displayDuration: 3000 })
            //         // this.setState({
            //         //     email: '',
            //         //     name: '',
            //         //     phone: '',
            //         //     subject: '',
            //         //     message: '',
            //         // })
            //         e.target.reset();
            //     })
            // .catch((error) => {
            //         //toastr.error('Error Message', 'Title')
            //         console.log("Error " + error);
            //     })
            

            // console.log("---------",this.state)

        } else {
            toastr.error('Error Message', 'Please review your input fields ...');
            console.log("Form is invalid!");

        }
        
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;

            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;

            case "phone":
                isError.phone =
                    value.length < 10 ? "Atleast 10 number is required" : "";
                break;
            case "subject":
                isError.subject =
                    value.length < 3 ? "Title is required" : "";
                break;
            case "message":
                isError.message =
                    value.length < 3 ? "Message is required" : "";
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })
    };
    render() {
        const { isError } = this.state;
        return (

            <>
                <form onSubmit={this.onSubmit} noValidate>

                    <div className="form-group" id="contactForm">
                        <label>Email</label>
                        <input
                            type="email"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="email"
                            onChange={this.formValChange}
                        />
                        {isError.email.length > 0 && (
                            <span className="invalid-feedback" style={{ color: "red" }}>{isError.email}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="name"
                            onChange={this.formValChange}
                        />
                        {isError.name.length > 0 && (
                            <span className="invalid-feedback" style={{ color: "red" }}>{isError.name}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>phone</label>
                        <input
                            type="text"
                            className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="phone"
                            onChange={this.formValChange}
                        />
                        {isError.phone.length > 0 && (
                            <span className="invalid-feedback" style={{ color: "red" }}>{isError.phone}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Topic</label>
                        <input
                            type="text"
                            className={isError.subject.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="subject"
                            onChange={this.formValChange}
                        />
                        {isError.subject.length > 0 && (
                            <span className="invalid-feedback" style={{ color: "red" }}>{isError.subject}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea

                            type="text"
                            className={isError.message.length > 0 ? "is-invalid form-control" : "form-control"}
                            name="message"
                            onChange={this.formValChange}
                        ></textarea>
                        {isError.message.length > 0 && (
                            <span className="invalid-feedback" style={{ color: "red" }}>{isError.message}</span>
                        )}
                    </div>

                    <button type="submit" className="btn btn-block btn-danger">Send Message</button>
                </form>
            </>
        );
    }
}