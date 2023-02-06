import React from 'react'
import { useParams } from 'react-router-dom'
import MainTemplate from '../templates/MainTemplate'

const DetailsPage = () => {

  const params = useParams();
  
  console.log(params);

  return (
    <MainTemplate>
        <h1>{params.title} - {params.category}</h1>
    </MainTemplate>
  )
}

export default DetailsPage