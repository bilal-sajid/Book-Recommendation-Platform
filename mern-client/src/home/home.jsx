import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBooks from './Favouritebooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
    </div>
  )
}

export default Home