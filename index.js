const express = require('express');
const app = express();

const PORT = 3000;

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({ message: 'success', email });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});