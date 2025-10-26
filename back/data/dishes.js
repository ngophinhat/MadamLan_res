const dishes = [
  {
    name: "Phở xào cải bò",
    description: "Món ăn sáng “quốc dân” phở bò không chỉ có hương vị thơm ngon mà còn bổ sung nhiều năng lượng và chất dinh dưỡng dồi dào cho cơ thể.",
    price: 55000,
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/479/802/products/pho-xao-cai-bo.jpg?v=1707209357200",
    category: "Món chính"
  },
  {
    name: "Phở tái bắp",
    description: "Món ăn sáng “quốc dân” phở bò không chỉ có hương vị thơm ngon mà còn bổ sung nhiều năng lượng và chất dinh dưỡng dồi dào cho cơ thể.",
    price: 45000,
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/479/802/products/z5194037510862-f06388b9d91eaefd53a03d14f8a511b0.jpg?v=1708933990090",
    category: "Món chính"
  },
  {
    name: "Phở bò tái nạm",
    description: "Món ăn sáng “quốc dân” phở bò không chỉ có hương vị thơm ngon mà còn bổ sung nhiều năng lượng và chất dinh dưỡng dồi dào cho cơ thể.",
    price: 60000,
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/479/802/products/phwor-tai-gan.jpg?v=1707213468440",
    category: "Món chính"
  },
  {
    name: "Phở bò bắp gầu",
    description: "Món ăn sáng “quốc dân” phở bò không chỉ có hương vị thơm ngon mà còn bổ sung nhiều năng lượng và chất dinh dưỡng dồi dào cho cơ thể.",
    price: 50000,
    imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/479/802/products/z5194017743277-0a0f111eb8d6c493a7a94ff450c1a827.jpg?v=1708932354703",
    category: "Món chính"
  },
  {
    name: "bún chả hà nội",
    description: "Bún chả Hà Nội gồm thịt nướng (chả) thơm nức, ăn kèm bún tươi, nước chấm pha chua ngọt, kèm rau sống và đôi khi nem rán, tạo hương vị hài hòa, đậm đà.",
    price: "99000",
    imageUrl: "https://vcdn1-giadinh.vnecdn.net/2021/01/08/Anh-2-8146-1610099449.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=sQNPaScgfMKYM7nJJEMJUQ",
    category: "Món chính"
  },
  {
    name: "Cơm gà",
    description: "Cơm gà là món cơm thơm mềm được nấu cùng nước luộc gà, ăn kèm thịt gà xé hoặc gà chiên, thường có rau sống, dưa leo và nước chấm đậm đà.",
    price: "150000",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk_RYeD8EN1e5z06KLUQtanQ0KOoQtyMt2g&s",
    category: "Cơm"
  },
  {
    name: "Cao lầu",
    description: "Cao lầu là món mì đặc sản Hội An với sợi mì vàng sậm, dai, ăn kèm thịt heo quay hoặc xá xíu, rau sống, giá và nước sốt đậm đà, tạo hương vị độc đáo và hấp dẫn.",
    price: "99000",
    imageUrl: "https://i-giadinh.vnecdn.net/2023/03/13/Buoc-7-Thanh-pham-1-7-9577-1678700377.jpg",
    category: "Món chính"
  },
  {
    name: "bún tái",
    description: "Bún bò tái là món bún với nước dùng đậm đà từ xương bò hầm, ăn kèm thịt bò tái mềm, bún tươi, rau thơm và hành phi, thường có chút vị chua nhẹ của chanh hoặc giấm.",
    price: "75000",
    imageUrl: "https://cdn.tgdd.vn/2021/04/CookProduct/bunbotai-1200x676.jpg",
    category: "Món chính"
  },  
  {
    name: "Bún tái bắp bò",
    description: "Bún tái bắp bò là món bún với nước dùng trong, ngọt thanh từ xương hầm, ăn kèm thịt bò tái mềm và bắp bò thơm béo, điểm thêm rau sống, hành lá và đôi khi chút giá hoặc rau thơm, tạo hương vị đậm đà, cân bằng.",
    price: "82000",
    imageUrl: "https://file.hstatic.net/200000700229/article/bun-bap-bo-1_511781a97c664696b17c398e99598579.jpg",
    category: "Món chính"
  },  
  {
    name: "Cơm hải sản",
    description: "Cơm hải sản là món cơm được nấu hoặc chiên kèm các loại hải sản tươi như tôm, mực, sò, ghẹ, thường nêm nếm gia vị đậm đà và điểm thêm rau củ, tạo hương vị thơm ngon, vừa miệng.",
    price: "100000",
    imageUrl: "https://i.ytimg.com/vi/usTj_4CfGrA/maxresdefault.jpg",
    category: "Cơm"
  },  
  {
    name: "Mỳ quảng gà",
    description: "Món mì đặc sản Quảng Nam với sợi mì vàng, ăn kèm thịt gà xé hoặc gà luộc, nước dùng ít nhưng đậm vị, thêm rau sống, đậu phộng rang và bánh tráng nướng giòn, tạo hương vị vừa thanh vừa béo.",
    price: "75000",
    imageUrl: "https://nhuminhplazahotel.com/wp-content/uploads/2023/06/cach-nau-mi-quang-ga-ngon-1.jpg",
    category: "Món chính"
  },  
  {
    name: "Mỳ quảng cá",
    description: " Giống mỳ Quảng gà nhưng thay thịt gà bằng cá tươi, nước dùng thơm nhẹ mùi cá, kèm sợi mì, rau sống, đậu phộng và bánh tráng, giữ nguyên hương vị đặc trưng Quảng Nam.",
    price: "75000",
    imageUrl: "https://www.huongnghiepaau.com/wp-content/uploads/2017/08/cach-nau-mi-quang-ca-loc.jpg",
    category: "Món chính"
  },  
  {
    name: "Mỳ xào hải sản",
    description: "Mỳ xào hải sản là món mì chiên giòn hoặc mềm, xào cùng tôm, mực, cá, sò và rau củ như cà rốt, cải thìa, hành tây, nêm nếm gia vị đậm đà, thơm ngon, hấp dẫn và đầy màu sắc.",
    price: "90000",
    imageUrl: "https://cdn.tgdd.vn/2022/05/CookRecipe/GalleryStep/thanh-pham-17.jpg",
    category: "Món chính"
  },  {
    name: "cơm chiên dương châu",
    description: "Cơm chiên Dương Châu là món cơm chiên với cơm tơi, vàng đều, xào cùng trứng, tôm, lạp xưởng, đậu Hà Lan, cà rốt và hành lá, nêm gia vị vừa miệng, thơm ngon, đầy màu sắc.",
    price: "70000",
    imageUrl: "https://tiki.vn/blog/wp-content/uploads/2023/09/com-chien-duong-chau-7.jpg",
    category: "Cơm"
  },  {
    name: "Gỏi xoài hải sản",
    description: "Món gỏi chua ngọt, gồm xoài xanh bào sợi trộn cùng tôm, mực, sò… thêm rau thơm, đậu phộng rang và nước trộn chua cay, tạo vị tươi mát, giòn ngon.",
    price: "212000",
    imageUrl: "https://file.hstatic.net/200000610729/article/dscf8223_b5004e8fa4214020bff9c3e7280ff384_1024x1024.jpg",
    category: "Khai vị"
  },  
  {
    name: "Gỏi đu đủ tôm thịt",
    description: "Đu đủ xanh bào sợi trộn với tôm luộc và thịt heo, thêm rau thơm, đậu phộng và nước mắm chua ngọt, ăn giòn, thanh và đậm đà.",
    price: "190000",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xzE7vhtLJdt-_66VuTA5M8zlbDWFlpQhIQ&s",
    category: "Khai vị"
  },
   {
    name: "chè khúc bạch",
    description: "Chè khúc bạch là món tráng miệng ngọt mát, gồm những miếng thạch mềm làm từ kem, sữa hoặc gelatin, thường đi kèm hạnh nhân, trái cây tươi và nước đường hoặc siro, tạo vị béo ngậy, thanh mát và dễ chịu.",
    price: "45000",
    imageUrl: "https://dayphache.edu.vn/wp-content/uploads/2020/05/mon-che-khuc-bach-chay.jpg",
    category: "Tráng miệng"
  },  {
    name: "Caramen",
    description: "Caramen là món tráng miệng làm từ trứng, sữa và đường, được nấu thành thạch mềm mịn, có lớp caramel cháy phía trên tạo vị ngọt vừa phải, thơm béo và tan ngay trong miệng.",
    price: "45000",
    imageUrl: "https://chefdzung.com.vn/uploads/images/ngoc-linh/banh-caramen.jpg",
    category: "Tráng miệng"
  },  
  {
    name: "Trà ô long ổi hồng",
    description: "Trà ô long làm base, thơm nồng, hơi chát nhẹ. Kết hợp với hương ổi hồng tươi, tạo vị ngọt thanh, thơm mát",
    price: "75000",
    imageUrl: "https://dayphache.edu.vn/wp-content/uploads/2021/03/tra-oi-hong-dau-tay.jpg",
    category: "Nước giải khát"
  },  
  {
    name: "trà vãi hồng",
    description: "Trà trái cây thanh ngọt, thơm mùi vải, thích hợp uống giải khát.",
    price: "75000",
    imageUrl: "https://reskihotpot.kas.asia/images/media/66a06a9c177b7543d069f49e.png",
    category: "Nước giải khát"
  }, 
  {
    name: "Cà phê sữa kem trứng",
    description: "Cà phê nóng hoặc lạnh, phủ lớp kem trứng béo mịn, thơm, hòa quyện vị ngọt và đắng nhẹ của cà phê.",
    price: "72000",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrfL9-H8nujHiZqukjnixt4ZvrbGDIpPgUg&s",
    category: "Caffe"
  },
  {
    name: "Dragon Fruit",
    description: "Cocktail dragon fruit (thường dùng thanh long, đặc biệt là thanh long đỏ hoặc trắng) là một loại đồ uống tươi mát, nhìn rất bắt mắt nhờ màu sắc rực rỡ và hương vị nhẹ nhàng, ngọt thanh",
    price: "20000",
    imageUrl: "https://thesocialsipper.com/wp-content/uploads/2023/06/SS-Creamy-Dragon-Fruit-Margarita-2.jpg",
    category: "Cocktail"
  },  
  {
    name: "whisky sour",
    description: "Cocktail Whisky Sour là một trong những loại cocktail cổ điển nổi tiếng, nổi bật với sự cân bằng hoàn hảo giữa vị chua và ngọt, đi kèm với hương thơm đặc trưng của whisky. Dưới đây là mô tả chi tiết:",
    price: "180000",
    imageUrl: "https://www.liquor.com/thmb/Oa3KjaP_udh0TYQO9ckm0dPS5PA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-1500x1500-hero-c9df509bb1d141f1a8424051c3d78445.jpg",
    category: "Cocktail"
  },  
];


module.exports = dishes;