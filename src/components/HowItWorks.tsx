import React from "react";
import Image from "next/future/image";

const HowItWorks = () => {
  return (
    <div
      id="howitworks"
      className="w-full lg:h-screen text-center "
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className="0">
          <h2 className="py-4 text-lego">
            Wie funktioniert Contract to Human?
          </h2>
          <p className="text-xl tracking-widest uppercase text-red ">
            IN development.
          </p>

          <div className="gap-8 columns-2 border-b-2 border-dashed ">
            <div>
              <Image
                src="/Monitor1v1.png"
                alt="/"
                width="500"
                height="50"
                className=""
              />
            </div>
            <div className="py-40 place-content-center ">
              <h3 className=" text-blue ">Schick uns deinen Vertrag.</h3>
              <p>Du kannst ihn uploaden.</p>
              <p>Oder auch einfach mit dem Smartphone scannen.</p>
            </div>
          </div>

          <div className="gap-8 columns-2 border-b-2 border-dashed">
            <div className="py-40 place-content-center  ">
              <h3 className=" text-blue ">Unsere KI analysiert den Vertrag</h3>
              <p>Natural Language Processing Technologie.</p>
              <p>Versteht komplexe Satzstrukturen.</p>
            </div>
            <div>
              <Image
                src="/Monitor2.png"
                alt="/a"
                width="500"
                height="50"
                className=""
              />
            </div>
          </div>

          <div className="gap-8 columns-2 border-b-2 border-dashed">
            <div>
              <Image
                src="/Monitor3.png"
                alt="/"
                width="500"
                height="50"
                className=""
              />
            </div>
            <div className="py-40 place-content-center ">
              <h3>Ein Vertrag den jeder verstehen kann.</h3>
              <p className=" text-blue ">
                Erläuterungen zu allen Klauseln und Begriffen.
              </p>
              <p>Fragwürdige Klauseln werden markiert.</p>
              <p>
                Unser Algorithmus teilt dir mit wie sicher er sich bezüglich
                jeder Klausel ist.
              </p>
            </div>
          </div>

          <p className="py-8"></p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
