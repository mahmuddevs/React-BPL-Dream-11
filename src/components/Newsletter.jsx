import React from 'react'

const Newsletter = () => {
    return (
        <div className='rounded-2xl w-[95%] sm:container xl:w-9/12 mx-auto bg-white/15 border-2 border-white relative z-40 p-4 -mb-36 md:-mb-48 drop-shadow-sm'>
            <div className='news-bg py-8 md:py-24 rounded-2xl text-center space-y-4'>
                <h2 className='text-[#131313] font-bold text-[32px]'>Subscribe to our Newsletter</h2>
                <p className='text-[#131313]/70 font-medium text-[20px]'>Get the latest updates and news right in your inbox!</p>
                <form className='flex gap-4 justify-center px-4'>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full text-[#131313]/40 
                    max-w-[28rem]" />
                    <button className='btn newsletter-btn'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter