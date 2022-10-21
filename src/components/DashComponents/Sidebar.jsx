import { Link, useMatch, } from "react-router-dom";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

import { RiLuggageDepositFill, RiExchangeDollarFill } from "react-icons/ri";

const Sidebar = ({ toggle, isToggled }) => {
  const handleToggle = () => {
    isToggled(!toggle);
  };
  function CustomLink({ children, to, ...props }) {
    let match = useMatch(to !== "" ? `/dashboard/` + to : "/dashboard");
    return (
      <Link
        className={`item ${match ? "bg-blue-600 rounded-md" : ""
          } text-[20px] font-[700] text-white  w-full my-[10px] p-3`}
        to={to}
        {...props}
        onClick={handleToggle}
      >
        {children}
      </Link>
    );
  }

  const navArr = [
    {
      name: "Portfolio",
      icon: <FaWallet className="w-12 h-6" />,
      to: " ",
    },
    {
      name: "Deposit",
      icon: <RiLuggageDepositFill className="w-12 h-6" />,
      to: "deposit",
    },
    {
      name: "Invest",
      icon: <RiExchangeDollarFill className="w-12 h-6" />,
      to: "invest",
    },
    {
      name: "Withdraw",
      icon: <RiExchangeDollarFill className="w-12 h-6 ml-2" />,
      to: "withdraw",
    }
  ];
  return (
    <div
      className={`${toggle ? "right-0 z-30 lg:left-0" : "left-[-100%] lg:left-0"
        }  absolute lg:relative min-w-[120px] max-w-[240px] max-h-screen min-h-screen lg:h-4 transition-left  flex flex-col bg-gradient-to-b from-blue-800 via-blue-800 to-blue-500 pt-[10px]
   `}
    >
      <div className="text-center font-[roboto] font-[800] text-[25px] text-white">
        <ul className="flex lg:justify-center justify-between items-center px-2">
          <li>
            <Link to='/dashboard/'>Detfrix</Link>
          </li>
          <li className="lg:hidden">
            <FaXbox onClick={() => isToggled(!toggle)} />
          </li>
        </ul>
      </div>
      <div className="mt-[10px] md:mt-[20px] flex flex-col w-full px-5">
        {navArr.map(({ icon, name, to }) => (
          <CustomLink to={to} key={to}>
            <div className="flex text-[15px] justify-center text-center items-center font-[roboto]">
              <div>
                {icon}
                {name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
