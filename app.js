const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const keys = require('./config/keys');
require('./models/User');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongo connected'))
  .catch(e => console.log(e));


  app.use(passport.initialize());
  require('./middleware/passport')(passport); 
// routes
const authRoutes = require('./routes/auth.js');
const orderRoutes = require('./routes/order.js');
const analyticsRoutes = require('./routes/analytics.js');
const categoryRoutes = require('./routes/category.js');
const positionsRoutes = require('./routes/positions.js');

app.use(require('morgan')('dev')); // Логирует в консоль все заходы
app.use('/uploads/', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')()); //для кроссбраузерных запросов


app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/positions', positionsRoutes);




module.exports = app;