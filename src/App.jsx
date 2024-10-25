import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'

function App () {
  const [coins, setCoins] = useState(0)
  const handleAddFreeCredit = () => {
    setCoins(coins + 500000)
  }
  return (
    <div className='font-sora'>
      <Header coins={coins} />
      <Banner addCoin={handleAddFreeCredit} />
    </div>
  )
}

export default App
