import bannerMain from '../assets/banner-main.png'

const Banner = ({ addCoin }) => {
  return (
    <div className='container xl:w-9/12 mx-auto bg-black rounded-2xl'>
      <div className='w-full banner-bg h-full flex flex-col justify-center items-center text-white gap-4 rounded-2xl py-12'>
        <img src={bannerMain} alt='' />
        <h1 className='text-[2.5rem] font-bold text-center'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='text-white/70 text-2xl font-medium font-inter text-center'>
          Beyond Boundaries Beyond Limits
        </p>
        <div className='inline-block border border-[#E7FE29] rounded-2xl'>
          <button
            onClick={addCoin}
            className='bg-[#E7FE29] px-5 py-3.5 text-[#131313] font-bold m-2 rounded-xl'
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
