import { MongoClient } from "mongodb";

// add HTTP POST function for new-invoice
async function handler(req, res) {
  if (req.method === "POST") {
    // fetch the req body data
    const data = req.body;

    // connext to mongodb cluster
    const client = await MongoClient.connect(
      "mongodb+srv://designate:Scabby123@cluster0.9k5bg1j.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const invoicesCollection = db.collection("invoices");

    const result = await invoicesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "invoice inserted!" });
  }
}

export default handler;

//  add a file with remove handler
// add a file with update status handler similiar to this
// reference docs
