import React from "react";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div className='text-center mt-3 mb-4'>
        <p className='text-3xl font-bold text-orange-600 mb-5'>My Projects</p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
      <div className="card w-96 bg-base-100 shadow-xl ml-4">
        <figure>
          <img src="https://www.shutterstock.com/image-photo/laptop-computer-drop-shadow-above-260nw-1669180177.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">Laptops Resale Market</h2>
          <p>This is a laptops selling website. In This website you can purchase world best laptops with best price.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to="/project1">Details</Link></button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1200-80.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-primary">Glossy Photo Gallery</h2>
          <p>A Full Stack responsive website for mobile and desktop with React. All data is loaded by MongoDB.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to="/project2">Details</Link></button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.pixelmattic.com/wp-content/uploads/2016/12/10-elearning-website-features.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">Interactive Learning</h2>
          <p>It is a Learning website. There are 3 ways to register on this website. These are: Email and Password, Google and Github.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to="/project3">Details</Link></button>
          </div>
        </div>
      </div>
      </div> 
    </div>
  );
};

export default Card1;
