import { Link, useMatch,  } from "react-router-dom";

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
      name: "Portflio",
      to: "",
    },
    {
      name: "Deposit",
      to: "deposit",
    },
    {
      name: "Invest",
      to: "invest",
    },
    {
      name: "Withdraw",
      to: "withdraw",
    }
  ];
  return (
    <div
      className={`${
        toggle ? "left-0 z-30 lg:left-0" : "left-[-100%] lg:left-0"
      }  absolute lg:relative min-w-[240px] max-w-[240px] max-h-screen min-h-screen transition-left  flex flex-col   bg-blue-500 pt-[10px]
   `}
    >
      <div className="pl-[30px] font-[grotesk] font-[800] text-[35px] text-white">
      <Link to='/dashboard/'>  Detfrix</Link>
      </div>
      <div className="mt-[10px] md:mt-[20px] flex flex-col w-full">
        {navArr.map(({ name, to }) => (
          <CustomLink to={to} key={to}>
            <div className="flex items-center font-[grotesk]">
              <div> {name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
