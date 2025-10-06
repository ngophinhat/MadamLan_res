require('dotenv').config();
const mongoose = require('mongoose');
const dishes = require('./data/dishes');
const users = require('./data/users');
const Dish = require('./models/Dish');
const User = require('./models/User');

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurantdb';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const importData = async () => {
  try {
    // Xóa dữ liệu cũ
    await Dish.deleteMany();
    await User.deleteMany();

    // Thêm dữ liệu mới
    await User.create(users); 
    await Dish.insertMany(dishes);

    console.log('Data (Dishes & Users) Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Dish.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}