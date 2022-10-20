import { MongoClient } from "mongodb";

const handleDel = async (res, req) => {
  if (req.method === "DELETE") {
    data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://designate:Scabby123@cluster0.9k5bg1j.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const invoicesCollection = db.collection("invoices");

    const deleteSelectedInvoice = await invoicesCollection.deleteOne({
      _id: data,
    });

    client.close();
  }
};
