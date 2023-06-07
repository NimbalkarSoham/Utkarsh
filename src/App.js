import './App.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


function App() {
  const form = useRef();

  const sendMail=(e)=> {
    e.preventDefault();
    debugger;

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_o02ylaz";
    const templateID = "template_hdlsy2d";
    const publicKey = "Z9tfj-jQEXvOz7op0";

    emailjs.send(serviceID, templateID, params,publicKey)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("age").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")

      })
      .catch(err=>console.log(err));
  }; 

  return (
    <>
      <div className=" container border mt-3 bg-light rounded">
        <div className="row">
          <div className="col-md-6 p-5 text-white" id='img-div'>
            <h1>Let's Connect</h1>
            <h4>
              Enter your details for connecting
            </h4>
          </div>
          <div className="col-md-6 border-left py-3">
            <h1>Contact form</h1>
            <form ref={form} onSubmit={sendMail}>
              <div className="form-group">
                <h5 htmlFor="name">Name</h5>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='name'
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <h5 htmlFor="email">Email</h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name='email'
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <h5 htmlFor="age">Age</h5>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name='age'
                  placeholder="Enter age"
                />
              </div>
              <div className="form-group">
                <h5 htmlFor="message">Message</h5>
                <textarea className="form-control" name='message' id="message" placeholder="Your message to us" rows="3"></textarea>
              </div>
              <button className="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
