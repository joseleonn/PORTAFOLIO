import useScroll from "./hooks/useScroll";

const navLinks = [
  {
    id: 1,
    name: "Incio",
    target: "#inicio",
  },

  {
    id: 2,
    name: "Proyectos",
    target: "#proyectos",
  },

  {
    id: 3,
    name: "Contacto",
    target: "#contacto",
  },
];

const NavBar = () => {
  const { scrolled } = useScroll();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div
        className={`"bg-transparent  mx-auto px-4 transition ease-in-out duration-300" ${
          scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
        } `}
      >
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            <ul className="flex space-x-8 ">
              {navLinks.map((navlink) => (
                <li
                  className=" border-b-2 border-transparent transition  duration-300 ease-in-out hover:border-b-2 hover:border-white"
                  key={navlink.id}
                >
                  <a
                    className="text-white hover:text-white"
                    href={navlink.target}
                  >
                    {navlink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
