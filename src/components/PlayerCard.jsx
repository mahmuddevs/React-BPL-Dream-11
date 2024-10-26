import { FaUser } from 'react-icons/fa'
import { IoFlag } from 'react-icons/io5'
const PlayerCard = ({ player, selectPlayers }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player
  return (
    <div className='card bg-base-100 drop-shadow p-6 rounded-xl'>
      <figure className='rounded-xl mb-6'>
        <img src={image} alt={name} className='h-64 rounded-xl w-full' />
      </figure>
      <div>
        <div className='flex items-center gap-4 mb-2'>
          <FaUser className='h-6 w-6 rounded-[50%]' />
          <h2 className='card-title text-[#131313] text-2xl font-semibold'>
            {name}
          </h2>
        </div>
        <div className='flex justify-between pb-4 border-b'>
          <div className='flex items-center gap-2'>
            <IoFlag className='h-6 w-6 text-[#131313]/30' />
            <div className='text-[#131313]/70 font-normal'>{country}</div>
          </div>
          <div className='px-4 py-2 border border-[#131313]/5 rounded-lg bg-[#131313]/5'>
            {role}
          </div>
        </div>
        <div className='mt-4 space-y-4'>
          <h4 className='font-bold text-[#131313] text-base'>Rating</h4>
          <div className='flex justify-between items-center'>
            <h4 className='font-semibold text-[#131313] text-base'>
              {battingType}
            </h4>
            <p className='text-[#131313]/70'>{bowlingType}</p>
          </div>
          <div className='flex justify-between items-center'>
            <h4 className='font-semibold text-[#131313] text-base'>
              Price: ${biddingPrice}
            </h4>
            <a
              onClick={() => {
                selectPlayers(player)
              }}
              className='px-4 py-2 border border-[#131313]/5 rounded-lg cursor-pointer'
            >
              Choose Player
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
