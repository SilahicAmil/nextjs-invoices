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

  // if props.status === pending set background
  // class color to pending color
  // if props.status !== closed set background
  // color to paid else set to red
  // might be able to use  a switch statement

  return (
    <>
      <div className="flex w-screen justify-around text-align mb-4 bg-[#1E213B] p-4 rounded-xl items-center">
        <li className=""># {props.ticketId}</li>
        <li>{props.due}</li>
        <li>{props.name}</li>
        <li>$ {props.amount}</li>

        <div className="bg-red-500 p-2 rounded-xl">
          <li>&#111; {props.status}</li>
        </div>
        <li>
          <button onClick={invoiceDetailHandler}>&gt;</button>
        </li>
      </div>
    </>
  );
};

export default InvoiceItem;
