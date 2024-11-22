const Footer = () => {
  return (
    <div className="flex justify-between items-center mx-8 flex-col md:flex-row">
      <div className="text-center py-4">
        © 2024 Divine Digits — Created with 🧠, 💡, and ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/kumawatrakesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Rakesh Kumawat
        </a>
      </div>

      <div>
        <div className="flex mb-4 md:mb-0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/rakeshkumawat"
          className="inline-flex items-center text-white bg-yellow-300 rounded-md border border-transparent px-2 py-1 text-2xl leading-relaxed shadow-sm transition duration-300 hover:opacity-85 hover:shadow-md focus:outline-none"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
            className="h-4 w-4 mb-0 shadow-none border-none align-middle bg-transparent"
          />
          <span className="ml-2 text-base align-middle bg-transparent text-black font-bold">
            Buy me a coffee
          </span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
