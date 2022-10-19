import { useRef, useState } from "react";

const NewInvoice = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateRef = useRef();
  const amountRef = useRef();
  const statusRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("submited");
    // extract this to a hook later

    const firstNameRefValue = firstNameRef.current.value;
    const lastNameRefValue = lastNameRef.current.value;
    const dateRefValue = dateRef.current.value;
    const amountRefValue = amountRef.current.value;
    const statusRefValue = statusRef.current.value;

    // Redux would be perfect for this
    const inputData = {
      firstName: firstNameRefValue,
      lastName: lastNameRefValue,
      dueDate: new Date(dateRefValue).toLocaleDateString("en-US"),
      amount: amountRefValue,
      status: statusRefValue,
    };

    props.onAddInvoice(inputData);
    console.log(inputData);
    e.target.reset();
  };

  return (
    // find maybe something to install that makes customizable forms
    // mainly because
    // styling would also be a pain
    // maybe try it by hand idk YOLO

    <div className="p-6 bg-[#1E213B] rounded-3xl w-screen  justify-center items-center">
      <form
        action=""
        className="grid   items-center  justify-center  gap-2"
        onSubmit={submitFormHandler}
      >
        <label htmlFor="">First Name</label>
        <input type="text" ref={firstNameRef} />
        <label htmlFor="">Last Name</label>
        <input type="text" ref={lastNameRef} />
        <label htmlFor="">Due Date</label>
        <input type="date" ref={dateRef} />
        <label htmlFor="">Amount</label>
        <input type="number" min="100" max="100000" step="1" ref={amountRef} />
        <label htmlFor="">Status</label>
        <input type="text" defaultValue="Pending" ref={statusRef} />

        <div>
          <button className="p-4 bg-[#3D9588] mt-5 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewInvoice;
