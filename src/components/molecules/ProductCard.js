import React from 'react'
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const ProductCard = ({t}) => {
  return (
    <div>
        <Paragraph text={t}/>
        <Button/>
    </div>
  )
}

export default ProductCard