import logoFooter from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] -mt-40 text-white'>
            <div className='py-48 w-[95%] sm:container xl:w-9/12 mx-auto'>
                <img src={logoFooter} alt="" className='mx-auto' />
                <div className='flex justify-between mt-16'>
                    <div>
                        <h3>About Us</h3>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            Subscribe
                        </h3>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <form className='flex gap-4 justify-center'>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <button className='btn'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='py-8 text-center border-t border-white/15 text-white/60'>@2024 Your Company All Rights Reserved.</p>
        </div>
    )
}

export default Footer