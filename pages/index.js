import Head from "next/head";
import InvoicesList from "../components/InvoicesList/InvoicesList";
import { MongoClient } from "mongodb";

// const date = new Date().toLocaleDateString("en-US");

// const DUMMY_DATA = [
//   {
//     id: "RT7865",
//     due: date,
//     name: "John Roberts",
//     amount: 4200,
//     status: "Paid",
//   },
//   {
//     id: "RT3452",
//     due: date,
//     name: "John Simmons",
//     amount: 200,
//     status: "Pending",
//   },
//   {
//     id: "RT5632",
//     due: date,
//     name: "John Simmons",
//     amount: 2500,
//     status: "Pending",
//   },
//   {
//     id: "RT0981",
//     due: date,
//     name: "John Stossel",
//     amount: 40000,
//     status: "Pending",
//   },
//   {
//     id: "RT8759",
//     due: date,
//     name: "John John",
//     amount: 2000,
//     status: "Paid",
//   },
// ];

const InvoicesHomePage = (props) => {
  return (
    <>
      <Head>
        <title>Invoices - Home</title>
      </Head>
      <InvoicesList invoices={props.invoices} />
    </>
  );
};

// get static props for invoice data GET Request
// use mongoDB client
// ^ need to find the docs for this

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://designate:Scabby123@cluster0.9k5bg1j.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const invoicesCollection = db.collection("invoices");

  const invoices = await invoicesCollection.find().toArray();

  client.close();

  return {
    props: {
      invoices: invoices.map((invoice) => ({
        id: invoice._id.toString(),
        due: invoice.dueDate,
        name: invoice.firstName + " " + invoice.lastName,
        amount: invoice.amount,
        status: "Paid",
      })),
    },
    revalidate: 10,
  };
}

export default InvoicesHomePage;
