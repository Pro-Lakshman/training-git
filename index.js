const express = require('express');

const app = new express();

app.listen(3000, () => {
    console.log(`=================================`);
    console.info(`🚀 App listening on the port ${3000}`);
    console.info(`=================================`);
  });

  app.get('/api', (req, res, next) => {
    res.sendStatus(200);
  })