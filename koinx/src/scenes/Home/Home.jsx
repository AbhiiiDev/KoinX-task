import React from 'react'
import Header from '../../Components/Header/Header'
import UpperMid from './UpperMid'
import LowerMid from '../LowerMid'
import Sentiment from '../../Components/Sentiment'
import AboutBtc from '../../Components/AboutBtc'
import Tokenomics from '../../Components/Tokenomics'
import Team from '../../Components/Team'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='max-w-screen-xl mx-auto '>
      <UpperMid/>
      <LowerMid/>
      <Sentiment/>
      <AboutBtc/>
      <Tokenomics/>
      <Team/>
    </div>
    </>
  )
}

export default Home
