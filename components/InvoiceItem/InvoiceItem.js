import { useRouter } from "next/router";

const InvoiceItem = (props) => {
  const router = useRouter();

  const invoiceDetailHandler = () => {
    router.push("/invoiceId");
    // based off ticketId render page
    // show the ticket form prefilled with the data
    //  + the  ability to change status
    // possibly a drop down menu or something
  };

  // if props.status === pending set class color to pending color
  // if props.status !== closed set color to paid else set to red
  // might be able to use  a switch statement

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
