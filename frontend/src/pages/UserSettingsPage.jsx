import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserSettingsPage() {
    return (
        <>
            <Header />
            <main className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Cài đặt thông tin</h1>
                    <p>Form cập nhật thông tin sẽ nằm ở đây...</p>
                </div>
            </main>
            <Footer />
        </>
    );
}