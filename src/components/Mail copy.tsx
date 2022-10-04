import { useForm } from "react-hook-form";
import { CreateMailInput } from "../types/mailSchema";
import { trpc } from "../utils/trpc";

const Mail = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
  } = useForm<CreateMailInput>();

  const { mutate } = trpc.useMutation(["mail.createMail"], {});

  function onSubmit(values: CreateMailInput) {
    mutate(values);
  }

  return (
    <div id="waitlist" className="w-full text-center bg-white">
      <div className="max-w-[1240px] mt-20 py-16 w-full ">
        <h2 className="py-4">Möchtest du es ausprobieren?</h2>
        <p className="text-xl tracking-widest uppercase text-red">
          Trag dich in die Warteliste ein!
        </p>
        <div className="">
          <div className=" w-full h-auto rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-center gap-4">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <input
                        className="border-2 rounded-lg flex md:p-3 border-gray-300"
                        type="text"
                        placeholder="Vorname"
                        {...register("firstName")}
                      />
                      <div className="pr-2"></div>
                      <input
                        className="border-2 rounded-lg md:p-3 flex border-gray-300"
                        type="text"
                        placeholder="Nachname"
                        {...register("lastName")}
                      />
                    </div>
                    <div className="pt-4 " />
                    <input
                      className="border-2 rounded-lg md:p-3 flex border-gray-300"
                      type="text"
                      placeholder="E-Mail"
                      {...register("email")}
                    />
                    <div className="pt-4 content-center" />
                    <button
                      className="border-2 rounded-lg flex md:p-3 border-gray-300 justify-center"
                      disabled={isSubmitSuccessful}
                    >
                      {isSubmitSuccessful ? "Danke!" : "Trag dich ein."}
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
