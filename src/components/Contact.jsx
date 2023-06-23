const Contact = () => {
  return (
    <div id="contacto" className="h-full p-10 relative ">
      <h2 className="font-bold text-2xl">Contacto</h2>
      <ul className="list-disc mt-10 ml-4">
        <li className="p-2">josecaceresmusso@gmail.com</li>
        <li className="p-2">+5493492634564</li>
        <li className="p-2">
          <a
            className="bg-green-800 text-white p-2 rounded-md hover:text-gray-400"
            href="https://wa.me/543492634564"
          >
            Chat a WhatsApp
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
