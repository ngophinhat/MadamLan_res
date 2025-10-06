import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerMenu from'../components/baner/BannerMenu';

export default function MenuPage() {
  const [groupedMenu, setGroupedMenu] = useState({});
  const [loading, setLoading] = useState(true);

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
        <div className="w-full mx-auto py-20 px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#8B1E24] leading-tight">
              Khám Phá Thực Đơn
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Những hương vị tinh túy được chế biến từ nguyên liệu tươi ngon nhất, đang chờ bạn thưởng thức.
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
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
              >
                {groupedMenu[category].map(item => (
                  <div key={item.id || item._id} className="group text-left bg-stone-50 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <div className="w-full h-64 bg-gray-200">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="h-full w-full object-cover object-center" 
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B1E24] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-base font-bold text-[#8B1E24]">
                          {item.price.toLocaleString('vi-VN')}đ
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 font-light">{item.description}</p>
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