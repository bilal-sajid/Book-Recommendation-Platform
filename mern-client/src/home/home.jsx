import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'

// import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

import BilalBooks from './book_recommendations/BilalBooks'
import NyleBooks from './book_recommendations/NyleBooks'
import RimshaBooks from './book_recommendations/RimshaBooks'
import MaryamBooks from './book_recommendations/MaryamBooks'
import NooriyaBooks from './book_recommendations/NooriyaBooks'


function Home() {
  return (
    <div>
      <Banner/>
      {/* <BestSellerBooks/> */}

      {/* All Recommendations */}
      <NyleBooks/>
      <MaryamBooks/>
      <NooriyaBooks/>
      <RimshaBooks/>
      <BilalBooks/>
      
      {/* <FavouriteBooks/> */}
      
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
    </div>
  )
}

export default Home