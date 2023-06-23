import ProyectModal from "./ProyectModal";

const infoProyect = [
  {
    id: 1,
    name: "Ecommerce",
    description: "Ecommerce realizado con React, Vite y Firebase como backend.",
    github: "https://github.com/joseleonn/TPI_LABIII",
    production: "https://tpi-labiii.vercel.app",
    more: "sdsds",
  },
  {
    id: 2,
    name: "API CRUD Productos",
    description:
      "API Creada en .ASP NET CORE 6, Permite Crear, Actualizar, Eliminar y Modificar productos.",
    github: "https://github.com/joseleonn/API_PRODUCTS",
    production: "",
    more: "morem2",
  },
  {
    id: 4,
    name: "API USER JWT",
    description:
      "API Creada en .ASP NET CORE 6, Permite Registrar usuarios, iniciar sesion el cual proporciona un Token de autenticacion para validar permisos, y varios metodos mas.",
    github: "https://github.com/joseleonn/API_USER",
    production: "",
    more: "lorem",
  },
];

const Proyects = () => {
  return (
    <div id="proyectos" className="relative p-10  ">
      <h2 className="font-bold text-2xl">Proyectos</h2>

      <ul className="md:flex  -m-10">
        {infoProyect.map((proyect) => (
          <li key={proyect.id} className="w-full p-8 mt-12  flex items-stretch">
            <div
              className="block w-full rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8  flex flex-col w-full h-full"
              href=""
            >
              <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                {proyect.name}
              </h3>

              <p className="mt-4 text-sm text-gray-300 flex-grow">
                {proyect.description}
              </p>

              <button className="mt-4 text-sm text-gray-300">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proyect.github}
                >
                  Github
                </a>
              </button>

              {proyect.production && (
                <button className="mt-4 text-sm bg-blue-300">
                  <a
                    className="text-gray-900 "
                    target="_blank"
                    rel="noopener noreferrer"
                    href={proyect.production}
                  >
                    Desplegue
                  </a>
                </button>
              )}
              <button className="mt-4 text-sm bg-blue-600">
                <div className="text-white ">
                  <ProyectModal title={proyect.name} more={proyect.more} />
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proyects;
