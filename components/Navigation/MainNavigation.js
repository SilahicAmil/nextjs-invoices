import { FaFileInvoice } from "react-icons/fa";
import Link from "next/link";

const MainNavigation = (props) => {
  return (
    <header className="w-full h-20 flex flex-col justify-between p-4">
      <div className="text-2xl font-bold">
        <Link href="/new-invoice">
          {/* <FaFileInvoice /> */}
          Invoices
        </Link>
      </div>
    </header>
  );
};

export default MainNavigation;
