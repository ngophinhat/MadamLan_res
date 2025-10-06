const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


//   Đăng nhập User (Admin)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Tìm user trong database bằng email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 2. DÒNG QUAN TRỌNG: Dùng bcrypt.compare để so sánh mật khẩu người dùng gửi lên
    // với mật khẩu đã được mã hóa trong database.
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. Nếu mật khẩu khớp, tạo JWT token
    const payload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Token có hiệu lực trong 1 ngày
    );

    // 4. Trả token và thông tin user về cho client
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;