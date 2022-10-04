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
    <div id="waitlist" className="text-center bg-white pb-8 ">
      <div className="">
        <h2>Möchtest du es ausprobieren?</h2>
        <p className="md:text-xl widest uppercase text-red py-2">
          Trag dich in die Warteliste ein!
        </p>
      </div>
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row justify-center">
                <div className="flex flex-col  ">
                  <div className="flex gap-2 flex-row my-2 ">
                    <input
                      className="border-2 rounded-lg  border-gray-300 md:p-3 text-center"
                      type="text"
                      placeholder="Vorname"
                      {...register("firstName")}
                    />
                    <input
                      className=" border-2 rounded-lg md:p-3 flex border-gray-300 text-center"
                      type="text"
                      placeholder="Nachname"
                      {...register("lastName")}
                    />
                  </div>
                  <input
                    className="border-2 rounded-lg my-2 md:p-3 flex border-gray-300 text-center"
                    type="text"
                    placeholder="E-Mail"
                    {...register("email")}
                  />
                  <button
                    className="border-2 rounded-lg flex my-2 md:p-3 border-gray-300 justify-center"
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
  );
};

export default Mail;
