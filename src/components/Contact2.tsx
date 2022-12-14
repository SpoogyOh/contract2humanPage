import { useForm } from "react-hook-form";
import { CreateMailInput } from "../types/mailSchema";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const Contact2 = () => {
  const {
    formState: {},
  } = useForm<CreateMailInput>();

  const {} = trpc.useMutation(["mail.createMail"], {});

  return (
    <div id="contact" className="flex flex-row justify-center gap-8 mt-8 mx-6">
      <div className="">
        <div className="">
          <p className="text-xl tracking-widest uppercase text-red">Kontakt.</p>
          <h2 className="">So erreichst du uns.</h2>
        </div>
      </div>

      <div>
        <div className="">
          <div className="">
            <div className="">
              <div className="text-end md:text-start ">
                <p className="py-2 mr-2 text-gray-600 ">E-Mail</p>
                <p className="">contract2human@gmail.com</p>
                <p className="py-2 mr-2 text-gray-600">Telefonnumer</p>
                <p className="mr-2">+43 699 19003301</p>
                <p className="py-2 mr-2 text-gray-600 ">LinkedIn</p>
                <div className="md:flex md:justify-start mb-6 mr-2 ">
                  <Link
                    href="https://www.linkedin.com/company/contract2human/"
                    className=" "
                  >
                    <button>
                      <FaLinkedinIn />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
