import Image from "next/image";
const Footer = () => {
  return (
    <div className="text-center mt-20 mx-6 ">
      <p className="">Unterstützt von:</p>
      <div className="flex flex-row gap-6 place-content-center">
        <div className="">
          <Image
            src="/UniWien.png"
            alt="/"
            width="400"
            height="200"
            className=""
          />
        </div>
 
        <div className="py-6">
          <Image
            src="/inits.png"
            alt="/"
            width="250"
            height="119"
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
