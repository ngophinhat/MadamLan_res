import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerMenu from '../components/baner/BannerMenu';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

export default function MenuPage() {
  const [groupedMenu, setGroupedMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  // Thêm hàm handleAddToCart vào đây
  const handleAddToCart = (item) => {
    addToCart(item);
    showNotification(`Đã thêm món "${item.name}"`);
  };

  useEffect(() => {
    const fetchAndGroupMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dishes');
        const allItems = response.data;

        const grouped = allItems.reduce((acc, item) => {
          const category = item.category || 'Chưa phân loại';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {});

        setGroupedMenu(grouped);
      } catch (error) {
        console.error("Lỗi khi tải thực đơn:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndGroupMenu();
  }, []);

  if (loading) {
    return <div className="text-center py-40 font-serif text-2xl">Đang tải thực đơn...</div>;
  }

  return (
    <>
      <Header />
      <BannerMenu />
      <main className="bg-white w-full">
        <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#8B1E24] leading-tight">
              Khám Phá Thực Đơn
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Những hương vị tinh túy được chế biến từ nguyên liệu tươi ngon nhất.
            </p>
          </div>

          {Object.keys(groupedMenu).map(category => (
            <div key={category} className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-800">
                  {category}
                </h2>
                <div className="mt-2 h-1 w-20 bg-[#8B1E24] mx-auto"></div>
              </div>
              
              <div 
                className="grid gap-6"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
              >
                {groupedMenu[category].map(item => (
                  <div key={item._id} className="group text-left bg-stone-50 rounded-lg shadow-sm overflow-hidden flex flex-col">
                    <div className="w-full h-72 bg-gray-200">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B1E24] transition-colors pr-2">
                          {item.name}
                        </h3>
                        <p className="text-base font-bold text-[#8B1E24] whitespace-nowrap">
                          {item.price.toLocaleString('vi-VN')}đ
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 font-light flex-grow">{item.description}</p>
                      
                      <div className="mt-4">
                        <button 
                            onClick={() => handleAddToCart(item)}
                            className="w-full bg-[#8B1E24] text-white text-sm py-2 rounded-md hover:bg-[#7f1d1d] transition"
                        >
                            Chọn món này
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}