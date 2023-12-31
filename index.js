require('dotenv').config();

const PORT = process.env.PORT || 3000;
const connectDB = require('./config/dbConnect');
const routes = require('./routes/subscriptionsRoute');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi=require('swagger-ui-express');
const swaggerDocument=require('./swagger/swagger.json');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser());

app.use('/', require('./routes/root'));

app.use('/api', routes);

app.use('/api', require('./routes/userRoute'));

app.use('/api', require('./routes/profileRoute'));

app.use('/api', require('./routes/articleRoute'));

app.use('/api', require('./routes/commentRoute'));

app.use('/api', require('./routes/tagRoute'));

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
})
