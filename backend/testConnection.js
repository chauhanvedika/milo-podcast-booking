const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://MiloUser:milo1234@ac-3h79ihk-shard-00-00.sxidnth.mongodb.net:27017,ac-3h79ihk-shard-00-01.sxidnth.mongodb.net:27017,ac-3h79ihk-shard-00-02.sxidnth.mongodb.net:27017/?ssl=true&replicaSet=atlas-10w4c5-shard-0&authSource=admin&appName=myAtlasClusterEDU";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("✅ Pinged your deployment. Successfully connected to MongoDB!");

  } finally {
    await client.close();
  }
}

run().catch(console.dir);