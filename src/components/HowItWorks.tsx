import React from "react";
import Image from "next/future/image";

const HowItWorks = () => {
  return (
    <div id="howitworks" className="text-center flex justify-center pb-6">
      <div className="max-w-[1240px]">
        <div id="Obertext" className="py-2">
          <h2>Wie funktoniert Contract to Human?</h2>
          <p className="py-2 text-xl tracking-widest uppercase text-red">
            IN development.
          </p>
        </div>
        <div>
          <div className=" flex flex-row items-center justify-center border-b-2 border-dashed">
            <div className="basis-1/2">
              <Image src="/Monitor1v1.png" alt="/" width="500" height="50" />
            </div>
            <div className="basis-1/2">
              <h3>Schick uns deinen Vertrag</h3>
              <p>Du kannst ihn uploaden.</p>
              <p>Oder auch einfach mit dem Smartphone scannen.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center border-b-2 border-dashed">
            <div className="basis-1/2">
              <h3>Unsere KI analysiert den Vertrag</h3>
              <p>Natural Language Processing Technologie.</p>
              <p>Versteht komplexe Satzstrukturen.</p>
            </div>
            <div className="basis-1/2 ">
              <Image src="/Monitor2v1.png" alt="/" width="500" height="50" />
            </div>
          </div>
          <div className=" flex flex-row items-center justify-center border-b-2 border-dashed ">
            <div className="basis-1/2">
              <Image src="/Monitor3v1.png" alt="/" width="500" height="50" />
            </div>
            <div className="basis-1/2">
              <h3>Ein Vertrag den jeder verstehen kann.</h3>
              <p>Erläuterungen zu allen Klauseln und Begriffen.</p>
              <p>Fragwürdige Klauseln werden markiert.</p>
              <p>
                Unser Algorithmus teilt dir mit wie sicher er sich bezüglich
                jeder Klausel ist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
