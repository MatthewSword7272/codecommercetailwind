import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="container m-auto ">
        <div className="absolute top-[40%] w-full max-w-[600px] flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ad explicabo eaque sit, ullam saepe repellat tempore tempora commodi
            optio ducimus, aspernatur nihil blanditiis autem sint eius?
            Repudiandae, impedit soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
