const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const SALT_ROUNDS = 10;

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ message: 'Email đã tồn tại'});
        }
        user = new User({ 
            name, 
            email, 
            password, 
            role: role || 'customer'
        });
        await user.save();
        
        res.status(201).json({ message: 'Đăng ký tài khoản thành công!'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


/**
 * Body: { email, password }
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Missing fields' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // Chỉ có một response duy nhất ở đây
    res.json({ message: 'Login successful', token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

});
// API cập nhập thông tin
router.put('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (user) {
            user.name = req.body.name || user.name;
            // Nếu muốn cho đổi mật khẩu thì thêm logic ở đây

            const updatedUser = await user.save();
            res.json({
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * GET /api/auth/me
 * Header: Authorization: Bearer <token>
 * Return current user info
 */
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Cập nhập thông tin 

router.put('/me', protect, async (req, res) => {
    try {
        // req.user.id được lấy từ token sau khi đi qua middleware 'protect'
        const user = await User.findById(req.user.id);

        if (user) {
            user.name = req.body.name || user.name;
            // Nếu muốn cho đổi mật khẩu thì thêm logic ở đây

            const updatedUser = await user.save();
            res.json({
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
