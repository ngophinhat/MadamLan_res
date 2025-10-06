const dishes = [
  {
    name: "Phở Bò Tái Nạm",
    description: "Nước dùng xương hầm đậm đà, bánh phở mềm mại cùng thịt bò tươi ngon.",
    price: 55000,
    imageUrl: "https://i.imgur.com/UaDI73p.jpeg",
    category: "Món Nước"
  },
  {
    name: "Bún Chả Hà Nội",
    description: "Thịt nướng than hoa thơm lừng, ăn kèm bún tươi, rau sống và nước chấm chua ngọt.",
    price: 45000,
    imageUrl: "https://i.imgur.com/tHw6a0f.jpeg",
    category: "Món Khô & Nướng"
  },
  {
    name: "Gỏi Cuốn Tôm Thịt",
    description: "Sự kết hợp tươi mát giữa tôm, thịt, bún và rau thơm, cuốn trong bánh tráng mỏng.",
    price: 35000,
    imageUrl: "https://i.imgur.com/GzB0wJk.jpeg",
    category: "Khai Vị"
  },
  {
    name: "Bánh Xèo Miền Tây",
    description: "Vỏ bánh giòn rụm, nhân tôm thịt giá đỗ nóng hổi, ăn kèm rau sống và nước mắm.",
    price: 60000,
    imageUrl: "https://i.imgur.com/k2gY1vS.jpeg",
    category: "Món Chiên"
  },
  {
    name: "Nem Lụi Huế",
    description: "Thịt heo băm nhuyễn nướng trên sả cây, thơm nồng đặc trưng của ẩm thực cố đô.",
    price: 50000,
    imageUrl: "https://i.imgur.com/v8tT3cR.jpeg",
    category: "Món Khô & Nướng"
  },
  {
    name: "Chè Khúc Bạch",
    description: "Thạch phô mai mềm mịn, tan trong miệng cùng nước long nhãn thanh mát và hạnh nhân.",
    price: 30000,
    imageUrl: "https://i.imgur.com/O4e2v1S.jpeg",
    category: "Tráng Miệng"
  },
  {
    name: "Cơm Tấm Sườn Bì Chả",
    description: "Một đĩa cơm tấm nóng hổi với sườn nướng mật ong, bì, chả trứng và đồ chua.",
    price: 50000,
    imageUrl: "https://i.imgur.com/rL7n3xW.jpeg",
    category: "Món Cơm"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },  
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
  {
    name: "Cà Phê Sữa Đá",
    description: "Hương vị cà phê Robusta đậm đà hòa quyện cùng vị ngọt béo của sữa đặc.",
    price: 25000,
    imageUrl: "https://i.imgur.com/J3y5q1l.jpeg",
    category: "Đồ Uống"
  },
];

module.exports = dishes;