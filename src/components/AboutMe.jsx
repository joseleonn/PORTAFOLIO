import { MapPinIcon } from "@heroicons/react/24/outline";

const AboutMe = () => {
  return (
    <div className="relative">
      <div className="relative md:flex space-x-10 mt-40 m-10">
        <div className="flex justify-center mb-12">
          <img
            className="h-24 w-24 bg-white rounded-full p-2"
            src="https://img.freepik.com/iconos-gratis/usuario_318-552176.jpg?w=2000"
            alt="imagen de jose leon caceres musso"
          />
        </div>
        <div className="">
          <h1 className="font-semibold  ">Jose Leon Caceres Musso</h1>
          <p className="mt-4">
            Desarrollador Web Full Stack | Estudiante de Tecnicatura
            Universitaria en Programacion |
          </p>
          <p className="flex mt-4">
            <MapPinIcon className="h-6 w-6 text-white" /> Rosario, Santa Fe,
            Argentina
          </p>
        </div>
      </div>
      <hr className=" mx-auto  w-4/5 border-b-2 border-gray-300 my-20" />
    </div>
  );
};

export default AboutMe;
