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
];

const InvoicesHomePage = (props) => {
  return <InvoicesList invoices={DUMMY_DATA} />;
};

export default InvoicesHomePage;
