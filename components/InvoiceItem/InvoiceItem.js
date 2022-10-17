const InvoiceItem = (props) => {
  return (
    <>
      <li># {props.ticketId}</li>
      <li>Due: {props.due}</li>
      <li>{props.name}</li>
      <li>$ {props.amount}</li>
      <li>&#111; {props.status}</li>
    </>
  );
};

export default InvoiceItem;
