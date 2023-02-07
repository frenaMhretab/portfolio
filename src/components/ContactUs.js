import React, { Component } from 'react';
import 'reactjs-toastr/lib/toast.css';
import ContactForm from './ContactForm'



export default class ContactUs extends Component {


  render() {
   
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2 className="lead">
              Contact me
              </h2>
            </div>
          </div>
          <div className="row">
          <aside className="twelve columns footer-widgets">
            <div className="widget" style={{ }}>         
              <ContactForm/>
            </div>
          </aside>    
          </div>
        </section>
        );
  }
}