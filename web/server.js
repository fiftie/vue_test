const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

// app.use((req, res) => {
//   res.sendStatus(404);
// });

app.listen(8080, () => console.log('vue_test 8080'))

const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
app.get("/getWaitingTime", (req, response) => {
  const url = 'https://dwait.net/index.php/tdswait';
  https.get(url, res => {
    let html = '';
    res.on('data', line => html += line);
    res.on('end', () => {
      const dom = new JSDOM(html);
      // AAA, BBB, CCCの3つがあり、AAAが待つ時間が長く、CCCは短い
      const longWaitEle = dom.window.document.getElementsByClassName("AAA");
      response.send(longWaitEle[0].textContent);
    });
  });
})