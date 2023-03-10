import Image from "next/image";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* p-padding py- padding in y-axis  */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mr-2">
          {/* sm:flex-grow-0: whenever the div gets passed the mobile view then it shouldn't grow*/}
          <img
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
            alt="amazon-logo"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex item-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus: outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-3 " />
        </div>
        {/* Right Side */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            {/* link: Custom utility class: check globals.css */}
            <p>Hello Sujal</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className=" relative link flex items-center">
            {/*Making parent relative */}
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personel Care</p>
      </div>
    </header>
  );
}

export default Header;
