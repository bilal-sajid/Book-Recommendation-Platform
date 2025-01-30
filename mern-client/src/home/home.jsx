import React from 'react'
import Banner from '../components/Homepage/Banner'
import FavouriteBooks from './FavouriteBooks'

// import BestSellerBooks from './BestSellerBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

// import BilalBooks from '../components/Homepage/Book-Recommendation-Components/BilalBooks'
import NyleBooks from '../components/Homepage/Book-Recommendation-Components/NyleBooks'
import RimshaBooks from '../components/Homepage/Book-Recommendation-Components/RimshaBooks'
import MaryamBooks from '../components/Homepage/Book-Recommendation-Components/MaryamBooks'
import NooriyaBooks from '../components/Homepage/Book-Recommendation-Components/NooriyaBooks'


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
      {/* <BilalBooks/> */}
      
      {/* <FavouriteBooks/> */}
      
      <PromoBanner/>
      <OtherBooks/>
      {/* <Reviews/> */}
    </div>
  )
}

export default Home