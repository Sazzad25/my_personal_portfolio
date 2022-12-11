import React from "react";
import p1 from "../../assets/images/p1.PNG";
import p2 from "../../assets/images/p2.PNG";
import p3 from "../../assets/images/p3.PNG";
const Project3 = () => {
  return (
    <div className='mt-3 mb-4'>
      <h2 className='text-3xl font-bold text-orange-600 mb-5 text-center'>Some Screen Sort of Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96">
          <img src={p1} alt="" />
        </div>
        <div className="card w-96">
          <img src={p2} alt="" />
        </div>
        <div className="card w-96">
          <img src={p3} alt="" />
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-title">Project Name: Interactive Learning</div>
            <a
              href="https://practice-auth-1de62.web.app/"
              className="card-title text-primary"
            >
              Project Link
            </a>
            <a
              href="https://github.com/Sazzad25/Interactive_Learning_Client"
              className="card-title text-primary"
            >
              Client Side Code Link
            </a>
            <a
              href="https://github.com/Sazzad25/Interactive_Learning_Server"
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
            <p>● There are 3 ways to register on this website. These are: Email and Password, Google and Github.</p>
            <p>● This site uses React Bootstrap framework and css.</p>
            <p>● A simple React app built with React, React Router Dom and Firebase.</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <div className="card-actions justify-end">
            </div>
            <h2 className="text-3xl font-bold">Technology Used:</h2>
            <p>● React, Node, Express, Firebase, Bootstrap, React Hot Toasts, React Router, React Hook Form etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
