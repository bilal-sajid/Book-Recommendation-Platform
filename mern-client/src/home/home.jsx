import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'

// import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'
import BilalBooks from './book_recommendations/BilalBooks'
import NyleBooks from './book_recommendations/NyleBooks'
// 
function Home() {
  return (
    <div>
      <Banner/>
      {/* <BestSellerBooks/> */}

      {/* All Recommendations */}
      <BilalBooks/>
      <NyleBooks/>
      
      <FavouriteBooks/>
      
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
    </div>
  )
}

export default Home