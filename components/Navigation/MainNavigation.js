import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

const MainNavigation = (props) => {
  // eventually add context to light/dark mode
  // Mainly applies to the background color
  // possibly set to #ccc

  return (
    <header className="justify-between p-4">
      <div className="text-2xl font-bold">
        <ul className="flex justify-between m-4">
          <li>
            {" "}
            <Link href="/">
              {/* <FaFileInvoice /> */}
              Invoices
            </Link>
          </li>
          <li>
            <button>
              <MdOutlineDarkMode />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
