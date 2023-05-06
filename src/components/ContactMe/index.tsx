import React from "react";
import { motion } from "framer-motion";
import {
  BsTelephone,
  BsFillEnvelopeFill,
  BsFillPinMapFill,
} from "react-icons/bs";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import ErrorMessage from "./ErrorMessage";

type FormData = {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData, e: any) => {
    await emailjs.sendForm(
      "service_pogyxbu",
      "template_h3oufl4",
      e.target,
      "-7_YoDL4FAkTLqxh8"
    );
    toast.success("I got your message, Thanks!");
  };

  // console.log("errors", errors);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="section-title">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <BsTelephone className="text-[#f7ab0a] animate-pulse" />
            <p>+201063233623</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BsFillEnvelopeFill className="text-[#f7ab0a] animate-pulse" />
            <p>k.sarhan311@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BsFillPinMapFill className="text-[#f7ab0a] animate-pulse" />
            <p>Mansoura - Egypt</p>
          </div>
        </div>
        <form
          className="flex flex-col w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <div>
              <input
                placeholder="Name"
                type="text"
                className="contactInput"
                {...register("Name", {
                  required: "This is required message",
                })}
              />
              <ErrorMessage message={errors?.Name?.message} />
            </div>
            <div>
              <input
                placeholder="Email"
                type="text"
                className="contactInput"
                {...register("Email")}
              />
              <ErrorMessage message={errors?.Email?.message} />
            </div>
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="contactInput"
            {...register("Subject")}
          />
          <ErrorMessage message={errors?.Subject?.message} />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("Message")}
          />
          <ErrorMessage message={errors?.Message?.message} />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
