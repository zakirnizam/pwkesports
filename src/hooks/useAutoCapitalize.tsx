import { useCallback } from 'react';

export const useAutoCapitalize = () => {
  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: (value: string) => void
  ) => {
    const value = e.target.value;
    if (value.length === 1) {
      // Capitalize the first character
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      onChange(capitalizedValue);
    } else {
      onChange(value);
    }
  }, []);

  return { handleInputChange };
};