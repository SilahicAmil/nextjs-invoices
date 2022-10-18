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
      <div className="flex justify-between w-screen m-auto">
        <h1 className=" p-4 h-auto text-lg justify-items-center">
          Current Number of Invoices: {props.invoices.length}
        </h1>
        {/* Add Filtering  */}
        {/* Should filter by Status or Amount */}
        <button
          className="bg-[#7D5EF7] p-2 rounded-xl"
          onClick={newInvoiceHandler}
        >
          &#43; New Invoice
        </button>
      </div>

      <ul className="h-full p-6 text-xl font-mono gap-4 w-screen">
        {props.invoices.map((invoice) => {
          return (
            <InvoiceItem
              key={invoice.id}
              ticketId={invoice.id}
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
