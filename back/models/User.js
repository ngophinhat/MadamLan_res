const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
}, { timestamps: true });


  // mã hoá mật khẩu
  userSchema.pre('save', async function (next) {
  // Chỉ hash mật khẩu nếu nó được thay đổi (hoặc là user mới)
  if (!this.isModified('password')) {
    return next();
  }
  

  // mã hoá mật khẩu với độ phức tạp là 10
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


module.exports = mongoose.model('User', userSchema);