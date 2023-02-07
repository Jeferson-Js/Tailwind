import React from "react";
import Inputs from "./Inputs";
import BtnForm from "./BtnForm";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
    console.log("Preencha todos os campos");
    return;
  }
  alert("funcionando");

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  };

  emailjs
    .send(
      "service_9ki7f8u",
      "template_p3yjq5k",
      templateParams,
      "-vnJQ40NUv6pB2XH3"
    )
    .then(
      (response) => {
        console.log("Email enviado", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        console.log("Error: " + err.message);
      }
    );
};

const FormContent = () => {
  return (
    <form className="form" onSubmit={sendEmail}>
      <Inputs />
      <BtnForm />
    </form>
  );
};

export default FormContent;
