import { Link, useRouter } from "next/router";

import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoicesList = (props) => {
  const router = useRouter();

  const newInvoiceHandler = () => {
    router.push("/new-invoice");
    // route to new invoice form
  };

  return (
    <>
      <div className="flex justify-between w-screen m-auto font-mono">
        <h1 className=" p-4 h-auto text-lg justify-items-center m-4">
          {/* Current Number of Invoices: {props.invoices.length} */}
        </h1>
        {/* Add Filtering  */}
        {/* Should filter by Status or Amount */}
        <button
          className="bg-[#7D5EF7] m-4 p-4 rounded-lg "
          onClick={newInvoiceHandler}
        >
          &#43; New Invoice
        </button>
      </div>

      <ul className="h-auto p-6 font-mono text-sm gap-4 w-screen ">
        {props.invoices.map((invoice) => {
          return (
            <InvoiceItem
              key={invoice.id}
              invoiceId={invoice.id}
              due={invoice.due}
              name={invoice.name}
              amount={invoice.amount}
              status={invoice.status}
            />
          );
        })}
      </ul>
    </>
  );
};

export default InvoicesList;
