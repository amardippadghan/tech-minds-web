import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://codequotient.com/blog/wp-content/uploads/2020/12/Are-All-Online-Coding-Classes-The-Same.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to techMinds</h1>
          <p className="mb-5 text-xl ">
            At techMinds, we empower aspiring developers and professionals with
            top-tier courses in the most sought-after technologies—MERN Stack
            and Salesforce. Whether you're looking to build dynamic web
            applications with the MERN stack or streamline your CRM with
            Salesforce, our expert-led courses are designed to help you master
            these in-demand skills.
          </p>
          <button className="btn btn-primary mb-5">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
