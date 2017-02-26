'use strict';

/*eslint-disable no-console */

import compression from 'compression';
import express from 'express';
import open from 'open';
import path from 'path';

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
