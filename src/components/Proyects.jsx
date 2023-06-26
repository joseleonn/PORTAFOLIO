import ProyectModal from "./ProyectModal";

const infoProyect = [
  {
    id: 1,
    name: "Ecommerce",
    description: "Ecommerce realizado con React, Vite y Firebase como backend.",
    github: "https://github.com/joseleonn/TPI_LABIII",
    production: "https://tpi-labiii.vercel.app",
    more: " Nuestro proyecto de Ecommerce es una plataforma desarrollada utilizando React.js como frontend y Firebase como backend. Este sitio web ofrece una experiencia de compra en línea, permitiendo a los usuarios registrarse, agregar productos al carrito y realizar pagos seguros a través de Mercado Pago. Una de las características clave de nuestro proyecto es su panel de administrador. Este panel brinda a los administradores la capacidad de gestionar el catálogo de productos de manera eficiente. Pueden agregar nuevos productos, asignarles imágenes, eliminar productos existentes y actualizar su información, como precios y descripciones. Esta funcionalidad garantiza que la tienda en línea esté actualizada y ofrezca una amplia variedad de productos a los clientes. Además de la gestión del catálogo de productos, el panel de administrador también permite la gestión de usuarios y roles. Los administradores pueden agregar nuevos usuarios, otorgarles roles específicos y supervisar sus actividades en el sitio. Esto proporciona un control y una seguridad adicionales, asegurando que solo los usuarios autorizados tengan acceso a determinadas funciones y datos sensibles. En resumen, nuestro proyecto de Ecommerce desarrollado con React.js y Firebase ofrece una experiencia de compra en línea completa. Los usuarios pueden registrarse, explorar y agregar productos al carrito, realizar pagos seguros a través de Mercado Pago, mientras que los administradores pueden gestionar el catálogo de productos, las imágenes, así como administrar usuarios y roles. Este proyecto está diseñado para brindar una solución completa y escalable para la venta de productos en línea.",
  },
  {
    id: 2,
    name: "API CRUD Productos",
    description:
      "API Creada en .ASP NET CORE 6, Permite Crear, Actualizar, Eliminar y Modificar productos.",
    github: "https://github.com/joseleonn/API_PRODUCTS",
    production: "",
    more: "El proyecto que desarrollé en ASP.NET Core 6 es una API CRUD de productos. Esta API se conecta a una base de datos SQL y utiliza el enfoque Database First con Entity Framework. La funcionalidad principal de esta API es permitir la gestión completa de productos, lo que incluye agregar nuevos productos, modificar los existentes, buscar productos específicos y eliminar productos de la base de datos. Para garantizar la integridad de los datos y la eficiencia de las operaciones, se utilizó Entity Framework como ORM (Object-Relational Mapping), lo que facilita la interacción con la base de datos y abstrae gran parte de la lógica de acceso a datos. Mediante la API, los usuarios pueden enviar solicitudes HTTP para realizar diversas operaciones. Por ejemplo, mediante una solicitud POST a la ruta /productos, se puede agregar un nuevo producto proporcionando los datos necesarios en el cuerpo de la solicitud. De manera similar, las solicitudes PUT, GET y DELETE se utilizan para actualizar, obtener y eliminar productos respectivamente. El proyecto está diseñado para ser escalable y mantener un código limpio y estructurado. Se han aplicado las mejores prácticas de desarrollo en ASP.NET Core, como la separación de preocupaciones, el uso de patrones de diseño y la implementación de validaciones de datos para asegurar la consistencia de los datos almacenados. En resumen, esta API CRUD de productos desarrollada en ASP.NET Core 6, utilizando el enfoque Database First con Entity Framework, brinda una solución completa para la gestión de productos, ofreciendo todas las operaciones básicas (agregar, modificar, buscar y eliminar) de manera eficiente y confiable.",
  },
  {
    id: 4,
    name: "API USER JWT",
    description:
      "API Creada en .ASP NET CORE 6, Permite Registrar usuarios, iniciar sesion el cual proporciona un Token de autenticacion para validar permisos, y varios metodos mas.",
    github: "https://github.com/joseleonn/API_USER",
    production: "",
    more: "El proyecto que desarrollé en ASP.NET Core 6 es una API de usuarios con autenticación basada en JWT (JSON Web Tokens). Esta API sigue una arquitectura en capas y utiliza el enfoque Database First con Entity Framework. La API de usuarios permite realizar diversas operaciones relacionadas con la gestión de usuarios de manera segura y eficiente guardando los datos en la base de datos de manera segura (contraseña hasheadas SHA256). Una de las funcionalidades principales es el registro de nuevos usuarios, donde se aplican validaciones exhaustivas para garantizar la integridad de los datos. Estas validaciones pueden incluir verificaciones de formato de correo electrónico, contraseñas seguras y otros criterios específicos según los requisitos del proyecto. Una vez registrados, los usuarios pueden iniciar sesión en la API proporcionando sus credenciales. Al autenticarse exitosamente, se genera un token de autenticación JWT que se devuelve al cliente. Este token se utiliza para autorizar las solicitudes subsiguientes a recursos protegidos de la API. Además, se implementa un sistema de expiración y renovación de tokens para mantener la seguridad de la autenticación. Además del registro y la autenticación, la API también ofrece métodos para buscar usuarios por correo electrónico u otros criterios definidos. Estos métodos utilizan Entity Framework para interactuar con la base de datos y recuperar la información correspondiente. La arquitectura en capas garantiza una separación clara de responsabilidades y facilita el mantenimiento y la extensibilidad del proyecto. Las capas típicas en esta arquitectura incluyen la capa de presentación (API), la capa de lógica de negocio y la capa de acceso a datos. Esto permite una mayor modularidad y facilita las pruebas unitarias y la escalabilidad del proyecto.",
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

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proyect.github}
              >
                <button className="mt-4 text-sm  focus:outline-none w-full">
                  Github
                </button>
              </a>

              {proyect.production && (
                <a
                  className="text-gray-900 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proyect.production}
                >
                  <button className="mt-4 text-sm bg-blue-300 w-full focus:outline-none">
                    Desplegue
                  </button>
                </a>
              )}
              <button className="mt-4 text-sm bg-blue-600 focus:outline-none">
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
