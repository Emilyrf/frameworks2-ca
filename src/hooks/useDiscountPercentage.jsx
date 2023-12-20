import { useState, useEffect } from 'react'

export default function useDiscountPercentage(discountedPrice, originalPrice) {
  const [discountPercentage, setDiscountPercentage] = useState(null)

  useEffect(() => {
    if (discountedPrice > 0 && discountedPrice < originalPrice) {
      const percentage =
        ((originalPrice - discountedPrice) / originalPrice) * 100

      const formattedPercentage = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(percentage / 100)

      setDiscountPercentage(formattedPercentage)
    } else {
      setDiscountPercentage(null)
    }
  }, [discountedPrice, originalPrice])

  return discountPercentage
}
