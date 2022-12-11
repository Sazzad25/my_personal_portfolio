
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3kz2x5f', 'template_yr3hhbf', form.current, 'vC63YrlJMoo_Y9dOM')
        .then((result) => {
            console.log(result.text);
            alert("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    
    <div className="text-center mb-4 bg-base-200 mt-4">
      <form ref={form} onSubmit={sendEmail}>
    <p className="text-3xl font-bold text-orange-600">CONTACT ME</p>
   <div className="card-body">
   <div className="form-control">
    <label className="label">
    <span className="label-text">Name</span>
    </label>
    <input className="input input-bordered" type="text" name="user_name" />
    </div>
    <div className="form-control">
    <label className="label">
    <span className="label-text">Email</span>
    </label>
    <input className="input input-bordered" type="email" name="user_email" />
    </div>
    <div className="form-control">
    <label className="label">
    <span className="label-text">Message</span>
    </label>
    <textarea className="input input-bordered" name="message" />
    </div>
    <br/>
    <input className="btn btn-primary" type="submit" value="Send Message" />
   </div>
  </form>
    </div>
    // <div className="text-center mb-4 bg-base-200 mt-4">
    //   <p className="text-3xl font-bold text-orange-600">CONTACT ME</p>
    //   <div className="hero min-h-screen">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //         <div className="card-body">
    //         <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="text"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="email"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Message</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="text"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control mt-6">
    //             <button className="btn btn-primary">SEND MESSAGE</button>
    //           </div>
    //         </div>
    //       </div>  
    //       <div className="text-center lg:text-left">
    //         <h1 className="text-5xl font-bold">GET IN TOUCH</h1>
    //         <p className="py-6">
    //         Hello! This is Sazzad Hosen and I am a Junior Full Stack Web Developer. You can contact me with this information Hello! This is Rasal Ahmad and I am a Junior Full Stack Web Developer. You can contact me with this information.
    //         </p>
    //         <div>
    //             <h1 className="text-2xl font-semibold">Address</h1>
    //             <p>Cahttogram, Bangladesh</p>
    //         </div>
    //         <div className="mt-2 mb-2">
    //             <h1 className="text-3xl font-semibold">Email</h1>
    //             <p>mdsazzadhosentamim95@gmail.com</p>
    //         </div>
    //         <div>
    //             <h1 className="text-3xl font-semibold">Phone</h1>
    //             <p>01612131862</p>
    //         </div>
    //       </div>
          
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
// service_53w49mr
