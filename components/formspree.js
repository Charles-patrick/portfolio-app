'use client'
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function FormSpreeForm() {
  const [state, handleSubmit] = useForm("xyzpprzg");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className="grid gap-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-2">
        <label
          className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
          htmlFor="name">
          Your Name
        </label>
        <input
          className="h-12 appearance-none rounded-full border-0 px-4 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
          htmlFor="email">
          Email
        </label>
        <input
          className="h-12 appearance-none rounded-full border-0 px-4 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
          id="email"
          name="email"
          required
        />
        <p className="block leading-5 text-[--color-text-muted]">
          This will help me respond to your query via an email.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
          htmlFor="message">
          Message
        </label>
        <textarea
          className="resize-y appearance-none rounded-xl border-0 px-3 py-2 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
          id="message"
          name="message"
          required
        />
        <p className="block leading-5 text-[--color-text-muted]">
          What would you like to discuss?
        </p>
      </div>
      <div class="flex flex-row-reverse gap-x-6">
        <button
          className="cursor-pointer rounded-full bg-[--color-primary] px-8 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[--color-highlight]"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
