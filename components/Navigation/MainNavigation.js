import { FaFileInvoiceDollar } from "react-icons";
import Link from "next/link";

const MainNavigation = (props) => {
  return (
    <header className="w-full h-20 flex flex-col justify-between p-4">
      <div className="text-2xl font-bold">
        <Link href="/">Invoices</Link>
      </div>
      <nav>
        <ul className="flex align-baseline">
          <li className="ml-3"></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
