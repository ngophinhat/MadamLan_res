const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const { protect, isAdmin } = require("../middleware/authMiddleware"); 

//    Khách hàng tạo đặt bàn mới
router.post("/", async (req, res) => {
  try {
    // Lấy thông tin khách điền vào form, không cần userId
    const { customerName, customerPhone, guestCount, date, time, specialRequest } = req.body;

    // Validate dữ liệu cơ bản
    if (!customerName || !customerPhone || !date || !time) {
        return res.status(400).json({ message: 'Vui lòng điền tên, SĐT, ngày và giờ đặt' });
    }

    const newBooking = new Booking({
      customerName,
      customerPhone,
      guestCount,
      date,
      time,
      specialRequest,
      status: 'pending',
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//   Admin lấy TẤT CẢ danh sách booking

router.get("/", protect, isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ createdAt: -1 }); // Lấy tất cả và xếp theo ngày tạo mới nhất
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Admin hủy một booking

router.delete("/:id", protect, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    
    await booking.deleteOne();
    res.json({ message: "Booking deleted by Admin" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;