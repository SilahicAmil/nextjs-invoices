import { FaFileInvoice } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { useRouter } from "next/router";

const MainNavigation = (props) => {
  // eventually add context to light/dark mode
  // Mainly applies to the background color
  // possibly set to #ccc

  const router = useRouter();

  const navigationHandler = () => {
    router.replace("/");
  };

  return (
    <header className="">
      <div className="text-3xl font-bold">
        <ul className="flex  justify-between m-4 ">
          <div className="bg-[#8F74FD] text-3xl p-6 rounded-xl">
            <li className="">
              <button onClick={navigationHandler}>
                <FaFileInvoice />
              </button>
            </li>
          </div>
          <li>
            <button className=" m-4 ">
              <MdOutlineDarkMode />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
