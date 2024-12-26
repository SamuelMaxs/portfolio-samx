import React, { useState, useEffect} from "react";

function Navbar() {
   const [isActive, setIsActive] = useState(false);

  // Function to toggle menu visibility
  const toggle = () => {
    setIsActive(!isActive);
  };

  // Scroll event for fixed navbar
  useEffect(() => {
    const handleScroll = () => {
        const header = document.querySelector("header");
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
        };
        window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header class="bg-slate-300 absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex justify-between items-center relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-lg text-primary block py-6">
                        Samuel
                    </a>
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button"
                    class={`block absolute right-4 lg:hidden ${
                            isActive ? "hamburger-active" : ""
                            }`} onClick={toggle}>
                        <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    <nav id="nav-menu" class={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none
                    ${isActive ? "" : "hidden"}`}>
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="scroll-smooth text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="scroll-smooth text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a>
                            </li>
                            <li class="group">
                                <a href="#projects" class="scroll-smooth text-base text-dark py-2 mx-8 flex group-hover:text-primary">Projects</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="scroll-smooth text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Navbar;

