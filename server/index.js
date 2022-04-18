const mongoose = require('mongoose');
const app = require('./app');
const { customError } = require('./util');
const routers = require('./routers');
require('env2')('.env');

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to MongoDB ${dbUrl}`);


 

    app.use(routers);

    app.listen(app.get('port'), () => {
      console.log(`Server is Running on http://localhost:${app.get('port')}`);
    });
  })
  .catch((err) => {
    throw customError('Database connection error', 500, err);
  });

module.exports = mongoose.connection;
