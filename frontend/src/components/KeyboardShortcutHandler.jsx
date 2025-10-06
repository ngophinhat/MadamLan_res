import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KeyboardShortcutHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Bấm tổ hợp phím Ctrl + Alt + L
      if (event.ctrlKey && event.altKey && event.key === 'l') {
        console.log('Phím tắt Admin đã được kích hoạt!');
        navigate('/admin/login');
      }
    };

    // Thêm "tai nghe" sự kiện bàn phím
    window.addEventListener('keydown', handleKeyDown);

    // Dọn dẹp "tai nghe" khi không cần nữa
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null; // Component này vô hình, không hiển thị gì cả
};

export default KeyboardShortcutHandler;