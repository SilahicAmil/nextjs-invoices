import { useRouter } from "next/router";

const InvoiceItem = (props) => {
  const router = useRouter();

  const invoiceDetailHandler = () => {
    router.push("/invoiceId");
  };

  return (
    <div className="flex justify-between text-align mb-4 bg-[#1E213B] p-4 rounded-xl items-center">
      <li className=""># {props.ticketId}</li>
      <li>{props.due}</li>
      <li>{props.name}</li>
      <li>$ {props.amount}</li>
      <li>&#111; {props.status}</li>
      <li>
        <button onClick={invoiceDetailHandler}>&gt;</button>
      </li>
    </div>
  );
};

export default InvoiceItem;
