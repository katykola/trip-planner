const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server 8080!')
})

//Trips routes
app.get('/trips', async (req, res) => {
      const trips = await Trip.find({});
      res.render('trips/index', { trips });
  });

app.listen(8080, () => {
      console.log('server listening on port 8080')
})