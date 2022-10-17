import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

const MainNavigation = (props) => {
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
            <MdOutlineDarkMode />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
