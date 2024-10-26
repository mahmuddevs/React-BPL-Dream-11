import { GoTrash } from "react-icons/go";
const SelectedPlayerCard = ({ player, removePlayer }) => {
    const { name, image, battingType } = player
    return (
        <div className="flex items-center gap-6 border broder-[#131313]/10 rounded-2xl p-6">
            <img src={image} alt={name} className="w-20 h-20 rounded-2xl" />
            <div className="space-y-2">
                <h3 className="text-[#131313] font-semibold text-2xl">{name}</h3>
                <p className="text-[#131313]/60 font-normal text-base">{battingType}</p>
            </div>
            <GoTrash onClick={() => { removePlayer(player) }} className="text-[#F14749] ms-auto w-4 h-5 cursor-pointer" />
        </div>
    )
}

export default SelectedPlayerCard