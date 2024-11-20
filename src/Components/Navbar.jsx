import "../App.css";
import Icon from "../assets/logo-white.svg";

const Navbar = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <a href="#" className="text-white text-xl font-bold">
              <img src={Icon} alt="" />
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-400">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Product
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Careers
            </a>
          </div>
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-800 rounded-full baseline hover:bg-red-500"
          >
            Get started
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
