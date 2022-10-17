import InvoiceItem from "../InvoiceItem/InvoiceItem";
import { useRouter } from "next/router";

const InvoicesList = (props) => {
  const router = useRouter();

  const newInvoiceHandler = () => {
    router.push("/new-invoice");
  };

  return (
    <>
      <div className="flex justify-between w-10/12 m-auto">
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

      <ul className=" p-6 text-xl font-mono gap-4">
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
