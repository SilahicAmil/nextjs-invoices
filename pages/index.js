import Head from "next/head";
import InvoicesList from "../components/InvoicesList/InvoicesList";

const date = new Date().toLocaleDateString("en-US");

const DUMMY_DATA = [
  {
    id: "RT7865",
    due: date,
    name: "John Roberts",
    amount: 4200,
    status: "Paid",
  },
  {
    id: "RT3452",
    due: date,
    name: "John Simmons",
    amount: 200,
    status: "Pending",
  },
  {
    id: "RT5632",
    due: date,
    name: "John Simmons",
    amount: 2500,
    status: "Pending",
  },
  {
    id: "RT0981",
    due: date,
    name: "John Stossel",
    amount: 40000,
    status: "Pending",
  },
  {
    id: "RT8759",
    due: date,
    name: "John John",
    amount: 2000,
    status: "Paid",
  },
];

const InvoicesHomePage = (props) => {
  return (
    <>
      <Head>
        <title>Invoices - Home</title>
      </Head>
      <InvoicesList invoices={DUMMY_DATA} />
    </>
  );
};

// get static props for invoice data GET Request
// use mongoDB client
// ^ need to find the docs for this

export default InvoicesHomePage;
