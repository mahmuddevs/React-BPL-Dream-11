import SelectedPlayerCard from "./SelectedPlayerCard";
const SelectedPlayers = ({ selectedPlayers, addMore, removePlayer }) => {
  return (
    <div className="mt-9 space-y-6">
      {selectedPlayers.length > 0 ?
        <>
          {
            selectedPlayers.map((player) => {
              return <SelectedPlayerCard key={player.playerId} player={player} removePlayer={removePlayer} />
            })
          }
        </>
        :
        <>
          <h3 className="text-2xl font-semibold">No Player Selected!</h3>
        </>}
      <div className='inline-block border border-[#131313] rounded-2xl mt-14'>
        <button onClick={() => { addMore('Available') }}
          className='bg-[#E7FE29] px-5 py-3.5 text-[#131313] font-bold m-2 rounded-xl'
        >
          Add More Player
        </button>
      </div>
    </div>
  )
}

export default SelectedPlayers
