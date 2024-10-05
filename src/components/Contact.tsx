"use client";
import Swal from "sweetalert2";
import { useState, FormEvent } from "react";
import { MeteorDemo } from "./ui/Meteor";
import "@/app/contact/style.css";

function ContactPage() {
  const api_key = process.env.KEY_EMAIL;

  // State untuk mengontrol nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", `${api_key}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <>
      <MeteorDemo />
      <section className="contact flex justify-center items-center min-h-svh w-full pt-16">
        <form onSubmit={handleSubmit} className="max-w-[600px] w-full bg-zinc-900 p-6 rounded-lg m-3 text-white z-30 backdrop:blur-lg">
          <h2 className="text-2xl text-center">Contact Form</h2>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="field"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="field"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              className="field mess"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="w-full h-12 bg-cyan-700 rounded-md mt-6 hover:bg-cyan-900 transition-all">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
