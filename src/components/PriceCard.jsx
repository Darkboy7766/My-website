import React from 'react'
import { Link } from 'react-router-dom'

const PriceCard = () => {
  return (
    <Link to={'/Services'} onClick={()=> scrollTo(0,0)}>
    </Link>
  )
}

export default PriceCard
