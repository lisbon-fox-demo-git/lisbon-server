const express = require('express');
const app = express();

const PORT = 3000;

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email }
  }).then(user => {
    res.status(200).json({ access_token: email });
  }).catch(err => {
    console.log(err);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});