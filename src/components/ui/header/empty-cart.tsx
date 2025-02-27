import { Frown } from 'lucide-react'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 text-center px-4'>
      <Frown size={32} />
      <span>Your cart is empty. Add some products</span>
    </div>
  )
}
