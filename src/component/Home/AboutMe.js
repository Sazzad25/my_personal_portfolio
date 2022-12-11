import React from "react";

const AboutMe = () => {
  return (
    <div className="text-center mt-3">
      <p className="text-3xl font-bold text-orange-600">ABOUT ME</p>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-semibold text-primary">PERSONAL INFO</h1>
          <h2 className="card-title">
          Name: Sazzad Hosen
          </h2>
          <h2 className="card-title">
          Email: mdsazzadhosentamim95@gmail.com
          </h2>
          <h2 className="card-title">
          Address: Chattogram, Bangladesh
          </h2>
        </div>
        <div className="card-body">
          <h2 className="card-title mt-11">Skill: FULL STACK</h2>
          <h2 className="card-title">
          Experience: 1 year
          </h2>
          <h2 className="card-title">
          Language: Bangla, English
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
