import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Players from './components/Players'

function App () {
  const [coins, setCoins] = useState(0)
  const handleAddFreeCredit = () => {
    setCoins(coins + 500000)
  }
  return (
    <div className='font-sora'>
      <Header coins={coins} />
      <Banner addCoin={handleAddFreeCredit} />
      <Players />
    </div>
  )
}

export default App
