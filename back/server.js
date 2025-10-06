require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import router 
const authRouter = require('./routes/auth');
const bookingRoutes = require("./routes/bookingRoutes");
const dishRoutes = require('./routes/dishRoutes');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurantdb';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/auth', authRouter);
app.use("/api/bookings", bookingRoutes);
app.use('/api/dishes', dishRoutes); 

app.get('/', (req, res) => res.send('Server is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
