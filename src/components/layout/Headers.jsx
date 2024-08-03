import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  const menuitems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="bg-slate-600 grid grid-cols-4 py-2">
        <div className="banner col-span-1 text-center text-2xl font-bold text-white uppercase">
          <Link to={"/"}>Store</Link>
        </div>
        <div className="search col-span-2 flex px-5 py-1">
          <input type="search" className="w-full outline-0 px-4 rounded-s-md" />
          <button className="bg-yellow-500 px-4 py-1 rounded-r-md hover:bg-yellow-300 active:bg-yellow-700 active:text-white">
            Search
          </button>
        </div>
        <div className="icons col-span-1 text-white text-2xl  flex justify-evenly">
          <Link to="/login">
            <i className=" bi bi-box-arrow-in-left"></i>
          </Link>
          <Link to="/register">
            <i className=" bi bi-person-plus"></i>
          </Link>
          <Link to="/cart">
            <i className=" bi bi-cart"></i>
          </Link>
        </div>
      </div>

      <ul className="flex justify-evenly w-full bg-slate-500  text-yellow-300 text-2xl text-center">
        {menuitems.map((item, i) => {
          return (
            <li className="w-full hover:text-yellow-600 hover:bg-slate-300 px">
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}

        {/* <li className='w-full hover:text-yellow-600 hover:bg-slate-300 px'>
     <Link to={'/admin/SecondComponent'}>Products</Link>
     </li>
     <li className='w-full hover:text-yellow-600 hover:bg-slate-300 px'>
     <Link to={'/admin/ThirdCompoenent'}>Services</Link>
     </li>
     <li className='w-full hover:text-yellow-600 hover:bg-slate-300 px'>
     <Link to={'/FourthCompoenent'}>Contact</Link>
     </li> */}
      </ul>
    </>
  );
};

export default Headers;
