import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const SuccessNotification = ({ message, isVisible, onClose }: SuccessNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
        <CheckCircle className="h-6 w-6" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default SuccessNotification;
