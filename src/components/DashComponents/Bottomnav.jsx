import { Link, useMatch,  } from "react-router-dom";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { RiLuggageDepositFill, RiExchangeDollarFill } from "react-icons/ri";

const Bottomnav = ({ toggle, isToggled }) => {
  const handleToggle = () => {
    isToggled(!toggle);
  };
  function CustomLink({ children, to, ...props }) {
    let match = useMatch(to !== "" ? `/dashboard/` + to : "/dashboard");
    return (
      <Link
        className={`item ${
          match ? "text-blue-800" : ""
        } text-[20px] font-[700]   w-full my-[20px] flex justify-center`}
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
      icon: <FaWallet className=" w-12 h-9" />,
      to: " ",
    },
    {
      name: "Deposit",
      icon: <RiLuggageDepositFill className=" w-12 h-9" />,
      to: "deposit",
    },
    {
      name: "Invest",
      icon: <RiExchangeDollarFill className=" w-12 h-9" />,
      to: "invest",
    },
    {
      name: "Withdraw",
      icon: <RiExchangeDollarFill className=" w-12 h-9 ml-2 text-center" />,
      to: "withdraw",
    }
  ];
  return (
    <div className="lg:hidden visible fixed bottom-0 w-full shadow bg-white border-t-2 border-solid border-gray-200 rounded-t-2xl">

      <div className="flex w-full text-center justify-center">
        {navArr.map(({ icon, name, to }) => (
          <CustomLink to={to} key={to}>
            <div className="flex text-[15px] items-center font-[roboto]">
              <div className="text-sm">
                {icon}
                {name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default Bottomnav;
