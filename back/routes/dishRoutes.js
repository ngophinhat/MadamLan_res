const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

const { protect, isAdmin } = require('../middleware/authMiddleware');

// GET /api/dishes
// Lấy tất cả món ăn

router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find({}).sort({ createdAt: -1 }); // Sắp xếp theo ngày tạo, mới nhất lên đầu
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Admin thêm món ăn mới
router.post('/', protect, isAdmin, async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    const newDish = new Dish({ name, description, price, imageUrl, category });
    await newDish.save(); //LỆNH LƯU VÀO DATABASE
    res.status(201).json(newDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//   Admin xóa một món ăn
router.delete('/:id', protect, isAdmin, async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);

        if (dish) {
            await dish.deleteOne();
            res.json({ message: 'Món ăn đã được xóa' });
        } else {
            res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Admin sửa xoá món ăn
router.put('/:id', protect, isAdmin, async (req, res) => {
    try {
        const { name, description, price, imageUrl, category, discount } = req.body;

        const dish = await Dish.findById(req.params.id);

        if (dish) {
            dish.name = name || dish.name;
            dish.description = description || dish.description;
            dish.price = price || dish.price;
            dish.imageUrl = imageUrl || dish.imageUrl;
            dish.category = category || dish.category;
            dish.discount = discount !== undefined ? discount : dish.discount;

            const updatedDish = await dish.save();
            res.json(updatedDish);
        } else {
            res.status(404).json({ message: 'Không tìm thấy món ăn' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;