import React from 'react'
import Header from '../../Components/Header/Header'
import UpperMid from './UpperMid'
import LowerMid from '../LowerMid'

import AboutBtc from '../../Components/AboutBtc'
import Tokenomics from '../../Components/Tokenomics'
import Team from '../../Components/Team'
import YouLike from '../../Components/YouLike'
import SideComponent from '../../Components/SideComponent'


const Home = () => {
  return (
    <>
    <Header/>
    <div className='max-w-screen-xl mx-auto font-inter overflow-hidden'>
      <UpperMid/>
      <LowerMid/>
      <AboutBtc/>
      <Tokenomics/>
      <Team/>

    </div>
    <div className='hidden md:block'>
    <YouLike/>
    </div>
    <div className='block md:hidden'>
<SideComponent/>
    </div>

    </>
  )
}

export default Home
