const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/scaler"; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB database");

    const database = client.db("scaler"); 

    await database.collection("products").insertOne({ name: "Widget", price: 10 });

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

connectToDatabase();
