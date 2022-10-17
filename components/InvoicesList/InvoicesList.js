const InvoicesList = (props) => {
  return (
    <>
      <div>
        <section className="h-2/3 w-2/3">
          <ul className="flex p-6 justify-between rounded-xl bg-[#1E213B] mx-auto text-xl font-mono">
            {/* Since these li's inherit the styling 
            i'll just map over them and not create a seperate compnents */}
            <li>#RT3764</li>
            <li>Due: Dec, 19, 2022</li>
            <li>Vasili Mitrokhin</li>
            <li>$1,800.69</li>
            <li>&#111; Pending</li>
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
