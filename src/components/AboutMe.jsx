import React from "react";

const AboutMe = () => {
  return (
    <div className="relative md:flex space-x-10 mt-40 m-10">
      <div className="flex justify-center">
        <img
          className="h-24 w-24 bg-white rounded-md p-2"
          src="https://img.freepik.com/iconos-gratis/usuario_318-552176.jpg?w=2000"
          alt="imagen de jose leon caceres musso"
        />
      </div>
      <div className="">
        <h1 className="font-semibold ">Jose Leon Caceres Musso</h1>
        <p className="mt-4">
          Desarrollador Web Full Stack | Estudiante de Tecnicatura Universitaria
          en Programacion |
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
