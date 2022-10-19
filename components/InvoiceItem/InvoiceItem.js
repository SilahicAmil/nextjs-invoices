import { useRouter } from "next/router";

const InvoiceItem = (props) => {
  const router = useRouter();

  const invoiceDetailHandler = () => {
    router.push("/" + props.ticketId);
    // based off ticketId render page
    // show the ticket form prefilled with the data
    //  + the  ability to change status
    // possibly a drop down menu or something
  };

  // if !== paid set color to pending color
  // else set color to paid color

  return (
    <>
      <div className="flex w-screen justify-around text-align gap-2  mb-4 bg-[#1E213B] p-4 rounded-xl items-center">
        <li className=""># {props.ticketId.substring(0, 7)}</li>

        <li>Due: {props.due}</li>
        <li>{props.name}</li>
        <li>$ {props.amount}</li>

        <div className="bg-[#DF9134] p-2 rounded-lg ">
          <li className="">{props.status}</li>
        </div>
        <li>
          <button onClick={invoiceDetailHandler}>&gt;</button>
        </li>
      </div>
    </>
  );
};

export default InvoiceItem;
