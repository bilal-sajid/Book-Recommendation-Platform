import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'

import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'
import BilalBooks from './BilalBooks'

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      
      <BilalBooks/>

      <FavouriteBooks/>
      
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
    </div>
  )
}

export default Home