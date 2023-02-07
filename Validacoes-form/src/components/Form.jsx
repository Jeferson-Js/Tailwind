import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex justify-center flex-col items-center min-h-screen">
      <label htmlFor="name" className="text-white">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome: "
        required className="py-2 w-60 rounded outline-none"
      />
      <label htmlFor="email" className="text-white">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email: "
        required className="py-2 w-60 rounded outline-none"
      />
      <label htmlFor="job" className="text-white">
        Situação de trabalho ?:
      </label>
      <select name="job" id="job" className="outline-none rounded py-2 w-60 rounded outline-none">
        <option value="" >Está buscando emprego?</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>
      <label htmlFor="mensagem" className="text-white">
        Mensagem:
      </label>
      <textarea
        className=" rounded"
        name="mensagem"
        id="mensagem"
        cols="30"
        rows="5"
        placeholder="Digite sua mensagem aqui..."
      ></textarea>
      <Button />
    </form>
  );
};

export default Form;
