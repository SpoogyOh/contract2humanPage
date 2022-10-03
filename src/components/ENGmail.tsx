import { router } from "@trpc/server";
import { useForm } from "react-hook-form";
import { CreateMailInput } from "../types/mailSchema";
import { trpc } from "../utils/trpc";

const Mail = () => {
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
    <div id="waitlist" className="w-full lg:h-screen text-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="py-4">Do you want to try it out?</h2>
        <p className="text-xl tracking-widest uppercase text-red">
          Join our waiting list.
        </p>
        <div className="">
          <div className=" w-full h-auto rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-center  gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                      <div className="pr-2"></div>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                    </div>
                    <div className="pt-4 " />
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="E-Mail"
                      {...register("email")}
                    />
                    <div className="pt-4 content-center" />
                    <button
                      className="border-2 rounded-lg p-3 flex border-gray-300 justify-center"
                      disabled={isSubmitSuccessful}
                    >
                      {isSubmitSuccessful ? "Thanks for Joining" : "Join"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
