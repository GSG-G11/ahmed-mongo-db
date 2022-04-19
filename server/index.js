require('env2')('.env');
const mongoose = require('mongoose');
const app = require('./app');
// const { customError } = require('./util');

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(app.get('port'), () => {
  console.log(`Server is Running on http://localhost:${app.get('port')}`);
});

