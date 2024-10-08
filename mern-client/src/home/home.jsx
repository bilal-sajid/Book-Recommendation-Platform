import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBooks from './Favouritebooks'
import PromoBanner from './PromoBanner'

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBooks/>
      <PromoBanner/>
    </div>
  )
}

export default Home