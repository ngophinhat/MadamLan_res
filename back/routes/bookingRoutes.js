const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Booking = require("../models/Booking");
const User = require("../models/User");
const { protect, isAdmin } = require("../middleware/authMiddleware");

console.log("✅ bookingRoutes loaded successfully");
// ✅ Middleware tùy chọn cho người dùng không đăng nhập
const optionalProtect = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    }
  } catch (error) {}
  next();
};

// API đặt bàn cho user đã đăng nhập
router.post("/user", protect, async (req, res) => {
  try {
    const { customerName, customerPhone, guestCount, date, time, specialRequest, orderedItems } = req.body;
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const newBooking = new Booking({
      customerName: user.name || customerName,
      customerPhone,
      guestCount,
      date,
      time,
      specialRequest,
      orderedItems: orderedItems || [],
      userId: user._id,
      status: "pending",
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/my-bookings", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ API đặt bàn cho khách vãng lai (không đăng nhập)
router.post("/guest", async (req, res) => {
  try {
    const { customerName, customerPhone, guestCount, date, time, specialRequest, orderedItems } = req.body;

    const newBooking = new Booking({
      customerName,
      customerPhone,
      guestCount,
      date,
      time,
      specialRequest,
      orderedItems: orderedItems || [],
      status: "pending",
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Lấy danh sách booking của user đăng nhập
router.get("/my-bookings", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Admin lấy tất cả booking
router.get("/", protect, isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Admin xóa booking
router.delete("/:id", protect, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    await booking.deleteOne();
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
