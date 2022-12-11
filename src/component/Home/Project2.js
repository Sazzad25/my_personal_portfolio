import React from "react";
import p4 from "../../assets/images/p4.PNG";
import p5 from "../../assets/images/p5.PNG";
import p6 from "../../assets/images/p6.PNG";
const Project2 = () => {
  return (
    <div className='mt-3 mb-4'>
      <h2 className='text-3xl font-bold text-orange-600 mb-5 text-center'>Some Screen Sort of Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96">
          <img src={p4} alt="" />
        </div>
        <div className="card w-96">
          <img src={p5} alt="" />
        </div>
        <div className="card w-96">
          <img src={p6} alt="" />
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-title">Project Name: Glossy Photo Gallery</div>
            <a
              href=" https://laptops-resale-market.web.app"
              className="card-title text-primary"
            >
              Project Link
            </a>
            <a
              href="https://github.com/Sazzad25/photographer-services-client"
              className="card-title text-primary"
            >
              Client Side Code Link
            </a>
            <a
              href="https://github.com/Sazzad25/photographer-services-server"
              className="card-title text-primary"
            >
              Server Side Code Link
            </a>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-actions justify-end">
            </div>
            <h2 className="text-3xl font-bold">Features:</h2>
            <p>● Users can book any service, can update a product status, and delete their own order.</p>
            <p>● After login or creating an account a user can place an order, manage his orders & post a review.</p>
            <p>● Google Firebase Authentication system has been added for user authentication.</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-actions justify-end">
            </div>
            <h2 className="text-3xl font-bold">Technology Used:</h2>
            <p>● React, MongoDB, Node, Express, Firebase, Tailwind CSS, Daisy UI, React Hot Toasts, React Router, React Hook Form etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
