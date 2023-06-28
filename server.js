const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'minimumAbsDifferenceDB';

// Connect to MongoDB
MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Specify the database
  const db = client.db(dbName);

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

  