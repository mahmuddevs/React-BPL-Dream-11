import PlayerCard from './PlayerCard'

const AllPlayers = ({ players, selectPlayers }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      {players.map(player => {
        return (
          <PlayerCard
            key={player.playerId}
            player={player}
            selectPlayers={selectPlayers}
          />
        )
      })}
    </div>
  )
}

export default AllPlayers
