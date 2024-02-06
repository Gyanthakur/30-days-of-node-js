const express = require('express');

const app = express();

function greetHandler(req, res) {
  const name = req.query.name || 'Guest'; 
  const greeting = `Hello, ${name}!`; 

  res.send(greeting); 
}


app.get('/greet', greetHandler);

// Start the server
const port = 3000; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
