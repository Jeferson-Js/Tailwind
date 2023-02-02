import React from "react";
import { User } from "phosphor-react";

const Form = () => {
  const mensagem = (event) => {
    preventDefault(event);
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    if (nameInput.value == "") {
      alert("preencha os campos");
    } else if (emailInput.value == "") {
      alert("preencha os campos");
    }else{
      alert("Mensagem enviada")
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-blue-300 rounded flex-col shadow w-96 ">
        <div>
          <input
            className="p-2 mb-3 w-72 rounded outline-none mt-10 flex m-auto"
            type="text"
            placeholder="Input your name: "
            id="name"
            required
          />
          <User size={20} className="-left-28 absolute" />
        </div>
        <div>
          <input
            className="p-2 mb-3 w-72 rounded outline-none flex m-auto"
            type="email"
            placeholder="Input your email: "
            id="email"
            required
          />
        </div>
        <div>
          <textarea
            className="flex m-auto outline-none rounded"
            maxLength={300}
            cols="40"
            rows="10"
            placeholder="Input your mensage"
          ></textarea>
        </div>
        <div>
          <button
            className="w-36 p-2 rounded bg-white flex justify-center m-auto font-bold text-blue-400 mt-3 mb-3 hover:bg-green-400 duration-1000 hover:text-white"
            type="submit"
            onClick={mensagem}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
