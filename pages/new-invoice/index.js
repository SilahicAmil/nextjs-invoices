import Head from "next/head";
import NewInvoice from "../../components/NewInvoice/NewInvoice";
import { useRouter } from "next/router";

const NewInvoicePage = () => {
  // useRouter
  const router = useRouter();

  // async func addInvoiceHandler to add invoice
  async function addInvoiceHandler(enteredInvoiceData) {
    // const res await fetch the api - method POST
    const response = await fetch("/api/new-invoice", {
      method: "POST",
      body: JSON.stringify(enteredInvoiceData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // TODO: Handler Errors
    // await res.json
    const data = await response.json();
    console.log(data);
    // router.push("/")
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Create A New Invoice</title>
      </Head>
      <h1 className="p-6">New Invoice Page</h1>
      {/* add onAddInvoice prop */}
      <NewInvoice onAddInvoice={addInvoiceHandler} />
    </>
  );
};

export default NewInvoicePage;
