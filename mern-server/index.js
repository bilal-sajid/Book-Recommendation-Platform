const express = require('express')
const app = express()
const port = 3000;

const cors = require ('cors')

//MiddleWare - Connection to the front-end site
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => {
  res.send('Hello World!')
})



//  ------------ MONGODB Configuration --------------- //

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://MERN-Book-Store:MV12DwPENB4Ev4Im@cluster0.au9jlsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    // --- Create a Collection for the Database
    const bookCollections = client.db("BookInventory").collection("books");

    // --- Inserting a Single Book to the DB using POST Method
    app.post("/upload-book", async(req,res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data)
      res.send(result);
    })

    // -- Get a Single Book Data
    app.get("/book/:id", async(req,res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await bookCollections.findOne(filter);
      res.send(result)
    })

    // Search for a Specific Book by title
    app.get("/search", async (req, res) => {
      const searchQuery = req.query.q;  // Get the search query from the request
    
      // Use a case-insensitive regex to search for books with matching titles
      const filter = { title: { $regex: searchQuery, $options: "i" } };
    
      const result = await bookCollections.find(filter).toArray();
      res.send(result);
    });

    // --- Get all books from the database using GET Method
    // app.get("/all-books", async(req,res) => {
    //   const books = bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })

    // --- Find Books by Category
    app.get("/all-books", async(req,res) => {
      let query = {};
      if (req.query?.category){
        query = {category: req.query.category}
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result)
    })

    // --- Update Book Data using UPDATE method - uses the id
    app.patch("/book/:id", async(req,res) => {
      const id = req.params.id
      const updateBookData = req.body;
      // const filter = {_id: id };
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};

      const updateBook = {
        $set:{
          ...updateBookData
        }
      }

      //Update - Just need to give which data to change/update
      const result = await bookCollections.updateOne(filter, updateBook, options)
      res.send(result)
    })

    // --- Delete A Book using the ID
    app.delete("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};

      // Perform the delete operation
      const result = await bookCollections.deleteOne(filter);

      // Check if a document was deleted
      if (result.deletedCount === 1) {
        // If successful, fetch the updated list of all books
        const updatedBooks = await bookCollections.find({}).toArray();
        res.send(updatedBooks); // Send the updated books array
      } else {
        // If no book was deleted, send an error
        res.status(404).send({ message: "Book not found" });
      }
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
    // await client.close(); // Commenting this line otherwise datbase will close when code stops

  }
}
run().catch(console.dir);

//  ------------------------------------------------------ //

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})