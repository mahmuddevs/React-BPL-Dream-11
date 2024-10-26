import { useState, useEffect } from 'react'
import AllPlayers from './AllPlayers'
import SelectedPlayers from './SelectedPlayers'
import { toast } from 'react-toastify'

const Players = ({ buyPlayer }) => {
  const [availableSec, setActiveSec] = useState(true)
  const [selectedSec, setSelectedSec] = useState(false)
  const [players, setPlayers] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])
  useEffect(() => {
    fetch('/playersData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.log(err))
  }, [])

  const handleActiveSec = sec => {
    if (sec === 'Available') {
      setActiveSec(true)
      setSelectedSec(false)
    }
    if (sec === 'Selected') {
      setSelectedSec(true)
      setActiveSec(false)
    }
  }
  const handleChoosePlayer = selected => {
    const duplicate = selectedPlayers.find(
      player => player.playerId === selected.playerId
    )

    if (duplicate) {
      toast.warn(`You Have Selected ${selected.name} Before!`)
      return
    }
    const updatedSelectedPlayers = [...selectedPlayers, selected]
    if (updatedSelectedPlayers.length > 6) {
      toast.warn("Can't Select More than 6")
      return
    }

    if (!buyPlayer(selected.biddingPrice)) {
      toast.warn("Not Enough Money")
      return
    }

    setSelectedPlayers(updatedSelectedPlayers)
    toast.success(`${selected.name} Is Now In Your Team`)
  }

  const handleRemovePlayer = (player) => {
    const playersSelected = selectedPlayers.filter((existingPlayer) => existingPlayer.playerId !== player.playerId)
    setSelectedPlayers(playersSelected)
    toast.error(`${player.name} Is Being Removed`)
  }
  return (
    <div className='my-24 w-[95%] sm:container xl:w-9/12 mx-auto'>
      <div className='flex flex-col md:flex-row items-center md:justify-between'>
        <h3 className='text-[#131313] text-[1.75rem] font-bold'>
          Available Players
        </h3>
        <div className='border border-[#131313]/10 flex items-center rounded-xl'>
          <button
            onClick={() => {
              handleActiveSec('Available')
            }}
            className={`py-3.5 px-5 ${availableSec
              ? 'bg-[#E7FE29] font-bold'
              : 'font-normal text-[#131313]/60'
              } rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => {
              handleActiveSec('Selected')
            }}
            className={`py-3.5 px-5 ${selectedSec
              ? 'bg-[#E7FE29] font-bold'
              : 'font-normal text-[#131313]/60'
              } rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {availableSec && (
          <AllPlayers players={players} selectPlayers={handleChoosePlayer} />
        )}
        {selectedSec && <SelectedPlayers selectedPlayers={selectedPlayers} addMore={handleActiveSec} removePlayer={handleRemovePlayer} />}
      </div>
    </div>
  )
}

export default Players
