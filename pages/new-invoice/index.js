import Head from "next/head";
import NewInvoice from "../../components/NewInvoice/NewInvoice";

const NewInvoicePage = () => {
  // useRouter

  // async func addInvoiceHandler to add invoice

  // const res await fetch the api - method POST

  // await res.json

  // router.push("/")
  return (
    <>
      <Head>
        <title>Create A New Invoice</title>
      </Head>
      <h1 className="p-6">New Invoice Page</h1>
      {/* add onAddInvoice prop */}
      <NewInvoice />
    </>
  );
};

export default NewInvoicePage;
