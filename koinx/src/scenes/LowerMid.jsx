

const LowerMid = () => {
    const navLinks=["Overview","Fundamentals","News Insights","Sentiments","Team","Technicals","Tokenomics"];

  return (
    <div className=' w-[881px]'>
      <div className='flex gap-6 mt-3'>
    {navLinks.map((item,index)=>(
    <span className={`${index===0}? text-blue-600 :text-black`} key={index}>{item}</span>
    ))}
      </div>
      <div className=' bg-white mt-3 rounded-md p-3'>
      <h2 className='text-2xl font-bold'>Performance</h2>
        <div></div>
        <div></div>
        <h5 className='text-lg font-semibold'>Fundamentals</h5>
        
      </div>
    </div>
  )
}

export default LowerMid
