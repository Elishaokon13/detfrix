import { Link, useMatch,  } from "react-router-dom";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { RiLuggageDepositFill, RiExchangeDollarFill } from "react-icons/ri";

const Sidebar = ({ toggle, isToggled }) => {
  const handleToggle = () => {
    isToggled(!toggle);
  };
  function CustomLink({ children, to, ...props }) {
    let match = useMatch(to !== "" ? `/dashboard/` + to : "/dashboard");
    return (
      <Link
        className={`item ${
          match ? "border-l-[5px] border-[#FAFAFA] text-white" : ""
        } text-[20px] font-[700]   w-full my-[20px] pl-[10px] md:pl-[20px] `}
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
      icon: <FaWallet />,
      to: "",
    },
    {
      name: "Deposit",
      icon: <RiLuggageDepositFill />,
      to: "deposit",
    },
    {
      name: "Invest",
      icon: <RiExchangeDollarFill />,
      to: "invest",
    },
    {
      name: "Withdraw",
      icon: <RiExchangeDollarFill />,
      to: "withdraw",
    }
  ];
  return (
    <div
      className={`${
        toggle ? "left-0 z-30 lg:left-0" : "left-[-100%] lg:left-0"
      }  absolute lg:relative min-w-[120px] max-w-[240px] max-h-screen min-h-screen transition-left  flex flex-col   bg-blue-500 pt-[10px]
   `}
    >
      <div className="pl-[20px] font-[roboto] font-[800] text-[25px] text-white">
      <Link to='/dashboard/'>Detfrix</Link>
      </div>
      <div className="mt-[10px] md:mt-[20px] flex flex-col w-full">
        {navArr.map(({ icon, name, to }) => (
          <CustomLink to={to} key={to}>
            <div className="flex text-[15px] items-center font-[roboto]">
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
