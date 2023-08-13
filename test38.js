const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://172.17.0.1:27017?directConnection=true";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


const arr = [
  {
    university : 'USAL',
    name : 'Computer Science',
    level : 'Excellent'
  },
  {
    university : 'USAL',
    name : 'Electronics',
    level : 'Intermediate'
  },
  {
    university : 'USAL',
    name : 'Communication',
    level : 'Excellent'
  }
];

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()
  .then(async (data) => {
    client.connect();
    await client.db("test").collection("courses").insertMany(arr);
  })
  .catch(console.dir);
