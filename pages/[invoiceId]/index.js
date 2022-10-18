import Head from "next/head";

const InvoiceDetails = () => {
  return (
    <>
      <Head>
        {/* make the ticketId dynamic */}
        <title>Invoice Details - #RT7865</title>
      </Head>
      <h1>Invoice Details</h1>
      {/* Add Invoice Details Component */}
    </>
  );
};

// getStaticPaths
// params {
// invoiceId: invoice._id.toString()
// }

// getStaticProps
// fetch the data for a singular invoice
// based off objectId

export default InvoiceDetails;
