# 🍽️ Hướng dẫn Cài đặt và Chạy Dự án Nhà hàng Madame Lân

## 🧩 Yêu cầu Môi trường
Trước khi bắt đầu, bạn cần cài đặt:
1. [Node.js](https://nodejs.org/) (phiên bản LTS)
2. [MongoDB Community Server](https://www.mongodb.com/try/download/community)
3. [Git](https://git-scm.com/)

---

## ⚙️ Các bước Cài đặt

1. **Clone dự án về máy:**
    ```bash
    git clone <link-repo-của-bạn>
    cd madame-lan
    ```

2. **Cài đặt thư viện cho Backend:**
    ```bash
    cd back
    npm install
    ```

3. **Cài đặt thư viện cho Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Tạo file Môi trường (`.env`):**
    Trong thư mục `/back`, tạo file `.env` với nội dung sau:
    ```env
    MONGO_URI=mongodb://localhost:27017/restaurantdb
    JWT_SECRET=bi-mat-cua-ban
    PORT=5000
    ```

5. **(Tùy chọn) Nạp dữ liệu mẫu vào MongoDB:**
    ```bash
    cd back
    npm run data:import
    ```
    > Nếu muốn xóa dữ liệu mẫu:  
    > `npm run data:destroy`

---

## 🚀 Cách Chạy Dự án

Bạn cần mở **2 cửa sổ terminal** riêng biệt.

**1. Chạy Backend:**
```bash
cd back
npm run dev
**2. Chạy Frontend:**
cd frontend
npm run dev
**3. Vào trang Admin
Bấm tổ hợp phím ctrl+alt+l
tk: admin1@madamelan.com
mk: adminpassword1

tk: admin2@madamelan.com
mk: adminpassword2