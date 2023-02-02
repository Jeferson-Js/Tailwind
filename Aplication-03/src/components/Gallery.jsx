import React from "react";
import Button from "./Button";

const Gallery = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="bg-white m-2 h-96 rounded">
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Card-1"
            className="rounded-full  flex m-auto mb-3 mt-2"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-bold text-center">Titulo-1</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            cupiditate vel dolores dolorum, maiores amet obcaecati excepturi
            culpa doloremque modi sapiente! Laborum magnam facere culpa quod
            dicta expedita delectus a.
          </p>
        </div>
        <Button />
      </div>
      {/* Card 2 */}
      <div className="bg-white m-2 h-96 rounded">
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Card-1"
            className="rounded-full  flex m-auto mb-3 mt-2"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-bold text-center">Titulo-2</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            cupiditate vel dolores dolorum, maiores amet obcaecati excepturi
            culpa doloremque modi sapiente! Laborum magnam facere culpa quod
            dicta expedita delectus a.
          </p>
        </div>
        <Button />
      </div>
      {/* Card 3 */}
      <div className="bg-white m-2 h-96 rounded">
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Card-1"
            className="rounded-full  flex m-auto mb-3 mt-2"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-bold text-center">Titulo-3</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            cupiditate vel dolores dolorum, maiores amet obcaecati excepturi
            culpa doloremque modi sapiente! Laborum magnam facere culpa quod
            dicta expedita delectus a.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Gallery;
