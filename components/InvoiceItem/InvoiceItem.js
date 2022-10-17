const InvoiceItem = (props) => {
  return (
    <div className="flex justify-between align-middle m-auto w-11/12 mb-4 bg-[#1E213B] p-6 rounded-xl">
      <li># {props.ticketId}</li>
      <li>{props.due}</li>
      <li>{props.name}</li>
      <li>$ {props.amount}</li>
      <li>&#111; {props.status}</li>
      <div>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default InvoiceItem;
