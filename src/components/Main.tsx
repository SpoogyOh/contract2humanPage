import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full text-center bg-white ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-24 flex  items-top">
        <div>
          <h2 className="">Wir sind</h2>
          <br></br>
          <Image
            src="/logo.png"
            alt="/"
            width="700"
            height="200"
            className="py-4 object-center justify-center max-w-[70%] m-auto"
          />
          <br></br>
          <h2 className="py-4">Wir übersetzen juristisch in eine menschliche Sprache.</h2>
          <p className="py-4 text-gray-600 ">
            Unsere KI-basierte Lösung analysiert einen Vertrag und verschafft unseren Kunden einen Überblick über den Inhalt und alle relevanten rechtlichen Risiken, und das in einer leicht verständlichen Sprache. So können unsere Nutzer in ihrem Berufsleben die richtigen Entscheidungen treffen und Verträge gegebenenfalls neu verhandeln.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
