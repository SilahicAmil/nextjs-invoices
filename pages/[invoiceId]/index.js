import Head from "next/head";
import InvoiceDetail from "../../components/InvoiceDetail/InvoiceDetail";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const InvoiceDetails = (props) => {
  // add isloading state

  return (
    <>
      <Head>
        {/* make the ticketId dynamic */}
        <title>Invoice Details - {props.invoiceData.id.substring(0, 6)}</title>
      </Head>
      <h1 className="m-4">Invoice Details</h1>
      {/* Add Invoice Details Component */}
      <InvoiceDetail
        invoiceId={props.invoiceData.id}
        name={props.invoiceData.name}
        due={props.invoiceData.due}
        amount={props.invoiceData.amount}
        status={props.invoiceData.status}
      />
    </>
  );
};

// getStaticPaths
// params {
// invoiceId: invoice._id.toString()
// }

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://designate:Scabby123@cluster0.9k5bg1j.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const invoicesCollection = db.collection("invoices");

  const invoices = await invoicesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: invoices.map((invoice) => ({
      params: {
        invoiceId: invoice._id.toString(),
      },
    })),
  };
}

// getStaticProps
// fetch the data for a singular invoice
// based off objectId

export async function getStaticProps(context) {
  const invoiceId = context.params.invoiceId;

  const client = await MongoClient.connect(
    "mongodb+srv://designate:Scabby123@cluster0.9k5bg1j.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const invoicesCollection = db.collection("invoices");

  const selectedInvoice = await invoicesCollection.findOne({
    _id: ObjectId(invoiceId),
  });

  client.close();

  return {
    props: {
      invoiceData: {
        id: selectedInvoice._id.toString(),
        name: selectedInvoice.firstName + " " + selectedInvoice.lastName,
        due: selectedInvoice.dueDate,
        amount: selectedInvoice.amount,
        status: selectedInvoice.status,
      },
    },
  };
}

export default InvoiceDetails;
