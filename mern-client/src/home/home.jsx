import React from 'react'
import Banner from '../components/Homepage/Banner'

// import BestSellerBooks from './BestSellerBooks'
import PromoBanner from '../components/Homepage/PromoBanner'
import OtherBooks from '../components/Homepage/OtherBooks'


// import BilalBooks from '../components/Homepage/Book-Recommendation-Components/BilalBooks'
import NyleBooks from '../components/Homepage/Book-Recommendation-Components/NyleBooks'
import RimshaBooks from '../components/Homepage/Book-Recommendation-Components/RimshaBooks'
import MaryamBooks from '../components/Homepage/Book-Recommendation-Components/MaryamBooks'
import NooriyaBooks from '../components/Homepage/Book-Recommendation-Components/NooriyaBooks'


function Home() {
  return (
    <div>
      <Banner/>

      {/* All Recommendations */}
      <NyleBooks/>
      <MaryamBooks/>
      <NooriyaBooks/>
      <RimshaBooks/>
      {/* <BilalBooks/> */}
      
      <OtherBooks/>

      {/* Call to Action */}
      <PromoBanner/>
      

    </div>
  )
}

export default Home