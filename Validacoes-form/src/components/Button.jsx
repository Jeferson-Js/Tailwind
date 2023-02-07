import React from "react";
import { FlowerLotus } from "phosphor-react";
const Button = () => {
  return (
    <div>
      <button className="bg-blue-500 flex m-auto w-56 gap-3 items-center justify-center py-2 rounded-full text-white shadow mt-5">
        Submit <FlowerLotus size={20} />
      </button>
    </div>
  );
};

export default Button;
