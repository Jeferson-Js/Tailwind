import { useState } from "react";
import {FaUserAlt, FaRegEnvelope} from 'react-icons/fa'



const Inputs = () => {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

  return (
    <div id="inputs-container">
        <FaUserAlt className="absolute text-green-500 top-40 left-3/4"/>
      <div id="input_name">
        <input
          className="input_name"
          type="text"
          placeholder="Digite o seu nome:"
          required
          onChange={(e) => setName(e.target.value)}
          value={name} 
        />
      </div>
      <div id="input_email">
      <FaRegEnvelope className="absolute text-green-500 sm:top-56 left-3/4"/>
        <input
          className="input_email"
          type="email"
          placeholder="Digite o seu email:"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div id="text_area">
        <textarea
          className="text_area"
          cols="41"
          rows="7"
          placeholder="Digite a sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
    </div>
  );
};

export default Inputs;
