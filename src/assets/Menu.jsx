import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <NavLink to="/">
        <div className="close w-[94%] text-right ">
          <span class="material-symbols-outlined p-6">close</span>
        </div>
      </NavLink>

      <div className="links w-full flex flex-col items-center text-xl font-semibold mt-7 md:hidden  ">
        <NavLink to ="/vehicle" className="w-[90%]">
          <div className=" p-6 flex justify-between">
          <span>Vehicle</span>
          <span class="material-symbols-outlined ">chevron_right</span>
        </div>
        </NavLink>
        <div className="w-[90%] p-6 flex justify-between">
          <span>Energy</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="w-[90%] p-6 flex justify-between">
          <span>Charging</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="w-[90%] p-6 flex justify-between">
          <span>Discover</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="w-[90%] p-6 flex justify-between">
          <span>Shop</span>
        </div>
        <NavLink to="/help" className="w-[90%]">
          <div className=" p-6 flex justify-between">
            <span>Support</span>
          </div>
        </NavLink>
        <div className="w-[90%] p-6 flex justify-between">
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">language</span>
            <span>Language</span>
          </div>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="w-[90%] p-6 flex justify-between">
          <div className="flex items-center gap-2">
            <span class="material-symbols-outlined">account_circle</span>
            <span>Account</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
