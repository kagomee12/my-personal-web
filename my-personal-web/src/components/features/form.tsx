"use client";

import { useContact } from "@/hooks/contact-hook";
import React from "react";
import { Controller } from "react-hook-form";

const Form = () => {
  const { control, errors, handleSubmit, onError, onSubmit } = useContact();
  return (
    <div className="flex justify-center w-full py-8 flex-col m-auto gap-y-10">
      <span className="flex justify-center">
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </span>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col gap-4 w-[80%] m-auto"
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <>
              <input
                type="text"
                {...field}
                value={field.value}
                placeholder="Name"
                autoFocus
                className="h-14 bg-primary p-2 rounded-xl"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <>
              <input
                type="text"
                {...field}
                placeholder="Phone number"
                className="h-14 bg-primary p-2 rounded-xl"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <>
              <input
                type="text"
                {...field}
                value={field.value}
                placeholder="Your email"
                className="h-14 bg-primary p-2 rounded-xl"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <>
              <textarea
                {...field}
                placeholder="Message"
                style={{ resize: "none" }}
                className="h-32 bg-primary p-2 rounded-xl"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </>
          )}
        />
        <button
          type="submit"
          className="bg-secondary text-white font-bold px-6 py-2 rounded-lg hover:opacity-80 active:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
