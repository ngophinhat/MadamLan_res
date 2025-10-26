import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BookingHistoryPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMyBookings = async () => {
            try {
                const token = localStorage.getItem('customerToken');
                if (!token) {
                    setError("Bạn cần đăng nhập để xem lịch sử đặt bàn.");
                    setLoading(false);
                    return;
                }

                const config = { headers: { Authorization: `Bearer ${token}` } };
                const { data } = await axios.get('http://localhost:5000/api/bookings/my-bookings', config);
                setBookings(data);

            } catch (err) {
                setError("Không thể tải lịch sử đặt bàn hoặc bạn chưa có đơn đặt nào.");
            } finally {
                setLoading(false);
            }
        };
        fetchMyBookings();
    }, []);

    return (
        <>
            <Header />
            <main className="bg-stone-50 py-20 px-4 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10 font-serif text-[#8B1E24]">
                        Lịch sử Đặt Bàn
                    </h1>

                    {loading && <p className="text-center text-gray-600">Đang tải...</p>}
                    {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

                    {!loading && !error && (
                        <div className="space-y-6">
                            {bookings.length > 0 ? (
                                bookings.map(booking => (
                                    <div key={booking._id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#8B1E24]">
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-lg text-gray-800">
                                                Ngày: {new Date(booking.date).toLocaleDateString('vi-VN')}
                                            </p>
                                        </div>
                                        <div className="mt-4 border-t pt-4 text-gray-600 space-y-1">
                                            <p><strong>Giờ:</strong> {booking.time}</p>
                                            <p><strong>Số khách:</strong> {booking.guestCount}</p>
                                            {booking.specialRequest && (
                                                <p><strong>Ghi chú:</strong> <em>{booking.specialRequest}</em></p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-gray-500">Bạn chưa có đơn đặt bàn nào trong lịch sử.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}