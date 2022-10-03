import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">We are</h1>
          <br></br>
          <Image
            src="/logo.png"
            alt="/"
            width="700"
            height="200"
            className="py-4 object-center justify-center max-w-[70%] m-auto"
          />
          <br></br>
          <h1 className="py-4">We translate lawyerish</h1>
          <h1 className="py-4">into human language</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Our AI-based solution analyses a contract and gives our customer an
            overview of the content and all relevant legal risks, explained in
            an easy-to-understand language. This allows our customers to make
            the right decisions in their professional life and renegotiate
            contracts if necessary
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
