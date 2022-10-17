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
];

const InvoicesHomePage = (props) => {
  return <InvoicesList data={DUMMY_DATA} />;
};

export default InvoicesHomePage;
