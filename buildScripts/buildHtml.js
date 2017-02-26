'use strict';

/*eslint-disable no-console */

import chalk from 'chalk';
import cheerio from 'cheerio';
import fs from 'fs';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', err => {
    if (err) {
      return console.log(err);
    }
    console.log(chalk.green('index.html written to /dist'));
  });
});
