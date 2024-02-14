app.get('/data', (req, res) => {
    // Generate your response data here
    const data = { message: 'This is some data' };
    res.send(data);
  });
  