import logoFooter from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] text-white'>
            <div className='pt-48 pb-20 w-[95%] sm:container xl:w-9/12 mx-auto'>
                <img src={logoFooter} alt="" className='mx-auto mt-8' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-y-6'>
                    <div className='space-y-4 mx-auto text-center sm:text-left'>
                        <h3 className='font-semibold text-lg'>About Us</h3>
                        <p className='text-white/60 w-[80%] mx-auto sm:mx-0'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-4 sm:place-self-center mx-auto text-center sm:text-left'>
                        <h3 className='font-semibold text-lg'>Quick Links</h3>
                        <ul className='list-disc ms-4 flex sm:block gap-8'>
                            <li className='text-white/60 hover:text-white'><a href="">Home</a></li>
                            <li className='text-white/60 hover:text-white'><a href="">Services</a></li>
                            <li className='text-white/60 hover:text-white'><a href="">About</a></li>
                            <li className='text-white/60 hover:text-white'><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='sm:col-span-2 lg:col-span-1 space-y-4 sm:place-self-center lg:text-left lg:place-self-start text-center'>
                        <h3 className='font-semibold text-lg'>
                            Subscribe
                        </h3>
                        <p className='text-white/60 w-[80%] mx-auto lg:mx-0'>Subscribe to our newsletter for the latest updates.</p>
                        <form className='flex justify-center md:justify-start'>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full text-[#131313]/40 
                            max-w-[28rem] rounded-r-none" />
                            <button className='btn footer-btn rounded-l-none'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='py-8 text-center border-t border-white/15 text-white/60'>@2024 Your Company All Rights Reserved.</p>
        </div>
    )
}

export default Footer