import React from "react";
import p7 from "../../assets/images/p7.PNG";
import p8 from "../../assets/images/p8.PNG";
import p9 from "../../assets/images/p9.PNG";
const Project1 = () => {
  return (
    <div className='mt-3 mb-4'>
      <h2 className='text-3xl font-bold text-orange-600 mb-5 text-center'>Some Screen Sort of Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96">
          <img src={p7} alt="" />
        </div>
        <div className="card w-96">
          <img src={p8} alt="" />
        </div>
        <div className="card w-96">
          <img src={p9} alt="" />
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-title">Project Name: Laptops Resale Market</div>
            <a
              href=" https://laptops-resale-market.web.app"
              className="card-title text-primary"
            >
              Project Link
            </a>
            <a
              href="https://github.com/Sazzad25/laptope-resale-market-client"
              className="card-title text-primary"
            >
              Client Side Code Link
            </a>
            <a
              href="https://github.com/Sazzad25/laptope-resale-market-server"
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
            <p>● Have a dashboard where based on the user & admin role the menu will change.</p>
            <p>● After login or creating an account a user can place an order, manage his orders & post a review.</p>
            <p>● However, an admin can manage all orders, add or remove a product & make a new admin.</p>
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

export default Project1;
