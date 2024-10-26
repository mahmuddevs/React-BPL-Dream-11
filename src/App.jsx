import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Players from './components/Players'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {
  const [coins, setCoins] = useState(0)
  const handleAddFreeCredit = () => {
    setCoins(coins + 60000)
  }
  const handleBuyingPlayer = price => {
    if (coins <= 0) {
      return false
    }
    if (coins < price) {
      return false
    }
    setCoins(coins - price)
    return true
  }
  return (
    <div className='font-sora'>
      <Header coins={coins} />
      <Banner addCoin={handleAddFreeCredit} />
      <Players coins={coins} buyPlayer={handleBuyingPlayer} />
      <Newsletter />
      <Footer />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition:Bounce
      />
    </div>
  )
}

export default App
