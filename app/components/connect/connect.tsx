"use client";

import { useState } from "react";

export const Connect = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message, name }),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Error sending message.");
    }
  };
  return (
    <div className="container mt-[240px]">
      <h2 className="text-[64px] font-bold text-center">
        <span className="bg-[linear-gradient(97.68deg,#636FDF_1.29%,#A647CC_26.09%,#E14D8F_50.89%,#EF9D5D_75.69%,#EED282_100.49%)] bg-clip-text text-transparent">
          Let’s Connect
        </span>
      </h2>

      <form
        className="flex items-center flex-col mt-8 max-w-[540px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5 items-center mb-6 w-full">
          <input
            type="text"
            placeholder="Name"
            className="rounded-full h-[52px] px-6 focus:outline-none focus:border-white transition py-5 bg-transparent border border-white/30 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="rounded-full h-[52px] px-6 focus:outline-none focus:border-white transition py-5 bg-transparent border border-white/30 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          name="message"
          id="message"
          className="rounded-2xl bg-transparent border border-white/30 h-[202px] w-full focus:outline-none focus:border-white transition py-5 px-6"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full h-[52px] rounded-full border border-solid border-white/10 flex items-center justify-center transition-all hover:bg-white group relative"
        >
          Send
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  );
};
