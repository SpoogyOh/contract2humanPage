import { router } from "@trpc/server";
import { useForm } from "react-hook-form";
import { CreateMailInput } from "../types/mailSchema";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const Contact2 = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<CreateMailInput>();

  const { mutate } = trpc.useMutation(["mail.createMail"], {
    onSuccess: () => {},
  });

  function onSubmit(values: CreateMailInput) {
    mutate(values);
  }

  return (
    <div id="contact" className="w-full flex flex-row justify-center gap-8">
      <div className="">
        <div className="max-w-[1240px] m-auto px-2 py-6 w-full ">
          <p className="text-xl tracking-widest uppercase text-red">Kontakt.</p>
          <h2 className="py-4">So erreichst du uns.</h2>
        </div>
      </div>

      <div>
        <div className="">
          <div className=" w-full h-auto rounded-xl lg:p-4">
            <div className="">
              <div className="">
                <p className="py-2 text-gray-600">E-Mail</p>
                <p>contract2human@gmail.com</p>
                <p className="py-2 text-gray-600">Telefonnumer</p>
                <p>+43 699 19003301</p>
                <p className="py-2 text-gray-600">LinkedIn</p>
                <div className="md:flex md:justify-start mb-6">
                  <Link
                    href="https://www.linkedin.com/company/contract2human/"
                    className=" "
                  >
                    <FaLinkedinIn />
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
