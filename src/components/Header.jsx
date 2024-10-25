import logo from '../assets/logo.png'
import coin from '../assets/coin.png'
const Header = ({ coins }) => {
  return (
    <div className='py-6'>
      <div className='navbar bg-base-100 w-[95%] sm:container xl:w-9/12 mx-auto flex justify-between items-center'>
        <div className='dropdown lg:hidden'>
          <div tabIndex={0} role='button' className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <a className='text-xl'>
          <img src={logo} alt='' />
        </a>
        <div>
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 text-base text-[#131313]/70 font-normal'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className='flex gap-2 items-center text-base py-3 px-4 border border-[#131313]/10 rounded-xl'>
            <div className='text-[#131313] font-semibold'>
              {coins} {coins ? 'Coins' : 'Coin'}
            </div>
            <img src={coin} alt='' width={20} className='mt-0.5' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
