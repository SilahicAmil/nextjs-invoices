import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoicesList = (props) => {
  return (
    <>
      <div>
        <section className="h-auto w-auto">
          <ul className="flex p-6 justify-between rounded-xl bg-[#1E213B] mx-auto text-xl font-mono gap-4">
            {props.data.map((item) => {
              return (
                <InvoiceItem
                  key={item.id}
                  ticketId={item.id}
                  due={item.due}
                  name={item.name}
                  amount={item.amount}
                  status={item.status}
                />
              );
            })}
            <div>
              <button>&gt;</button>
            </div>
          </ul>
        </section>
      </div>
    </>
  );
};

export default InvoicesList;
