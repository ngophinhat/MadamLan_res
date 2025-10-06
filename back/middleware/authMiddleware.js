const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  // Lấy token từ header
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied, no token" });
  }

  try {
    // Giải mã token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Gán thông tin đã giải mã (bao gồm id và role) vào request
    req.user = decoded;
    next(); // Cho phép đi tiếp
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};


const isAdmin = (req, res, next) => {
  // Function này chạy SAU 'protect', nên nó sẽ có req.user
  if (req.user && req.user.role === 'admin') {
    next(); // Nếu đúng là admin, cho đi tiếp
  } else {
    res.status(403).json({ message: "Not authorized as an admin" }); // Báo lỗi cấm truy cập
  }
};


module.exports = { protect, isAdmin };