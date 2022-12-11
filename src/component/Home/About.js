import React from "react";
import sazzad from '../../assets/images/sazzad.png'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row p-5 ml-10 mr-10">
        <img
          src={sazzad} alt=""
          className="max-w-sm rounded-lg shadow-2xl grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        />
        <div className="ml-20 grid gap-6">
            <p>My Name is</p>
          <h1 className="text-5xl font-bold  text-orange-600">SAZZAD HOSEN</h1>
          <h2 className="text-2xl mt-1">I Am React Js Developer</h2>
          <p className="py-6">
          Develop amazing web and app experiences with tips and advice from the experts at Web.Dev. Keep your users engaged with the latest web development capabilities! Website Performance. Website Visibility. Modern Web Techniques. Network Resilience Tips.
          </p>
          <a
          href="https://drive.google.com/file/d/1jugyUQ9y6WLj1Z9A_ymCLq6PI6PWFP8A/view?usp=sharing"
          download="https://drive.google.com/file/d/1jugyUQ9y6WLj1Z9A_ymCLq6PI6PWFP8A/view?usp=sharing"
          >
          <button className="btn btn-primary">DOWNLOAD CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
