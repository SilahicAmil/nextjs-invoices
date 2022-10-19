const InvoiceDetail = (props) => {
  const paidStatusHandler = () => {
    // eventually change status to paid
    // use router to navigate to a paid api?
    console.log("paid");
  };

  const deleteInvoiceHandler = () => {
    // probably use router to navigate to a /delete-invoice api?
  };

  return (
    <>
      <div className="bg-[#1E213B] h-full w-screen">
        <div className=" m-4 py-4">
          <div className="mb-4 flex flex-row-reverse px-4 gap-4">
            <button className="p-4 rounded-md bg-[#77292A]">Delete</button>
            <button
              className="p-4 rounded-md bg-[#3D9588]"
              onClick={paidStatusHandler}
            >
              Paid
            </button>
          </div>
        </div>
        <div className="items-center justify-center p-4 text-xl">
          <h1 className=" ">Ticket Id: {props.invoiceId.substring(0, 7)} </h1>
        </div>

        <div className="mt-10 py-4">
          <div className="grid text-xl ">
            <h1 className=" p-4 ">Name: {props.name} </h1>
            <span className="p-4 ">Due Date: {props.due}</span>
            <p className="p-4 ">Amount: {props.amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
