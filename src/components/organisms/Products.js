import React from 'react'
import ProductCard from '../molecules/ProductCard'

const Products = () => {
  const items = ["Buty adidas","Bute nike","Buty letnie"];
  return (
    <div>
       {items.map(item => <ProductCard t={item}/>)}
        
    </div>
  )
}

export default Products