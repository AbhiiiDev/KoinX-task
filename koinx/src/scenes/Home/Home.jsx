import React from 'react'
import Header from '../../Components/Header/Header'
import UpperMid from './UpperMid'
import LowerMid from '../LowerMid'
import Sentiment from '../../Components/Sentiment'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <UpperMid/>
      <LowerMid/>
      <Sentiment/>
    </div>
  )
}

export default Home
