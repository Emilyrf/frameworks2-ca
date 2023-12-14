import { useState, useEffect } from 'react';

const useDiscountPercentage = (discountedPrice, originalPrice) => {
    const [discountPercentage, setDiscountPercentage] = useState(null);
  
    useEffect(() => {
      if (discountedPrice < originalPrice) {
        const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
        setDiscountPercentage(`${discount.toFixed(2).replace(/\.?0+$/, '')}%`);
      } else {
        setDiscountPercentage(null);
      }
    }, [discountedPrice, originalPrice]);
  
    return discountPercentage;
  };
  
  export default useDiscountPercentage;