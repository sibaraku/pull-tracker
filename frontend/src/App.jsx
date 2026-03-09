import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import './App.css'

function App() {
  const [activeGame, setActiveGame] = useState('Genshin')
  const [genshinPulls, setGenshinPulls] = useState([])
  const [hsrPulls, setHsrPulls] = useState([])

  const pulls = activeGame === 'Genshin' ? genshinPulls : hsrPulls

  function addPull(pull) {
    if (activeGame === 'Genshin') {
      setGenshinPulls([...genshinPulls, pull])
    } else {
      setHsrPulls([...hsrPulls, pull])
    }
  }

  return (
    <div className="container">
      <Header activeGame={activeGame} setActiveGame={setActiveGame} />
      <Dashboard activeGame={activeGame} pulls={pulls} addPull={addPull} />
    </div>
  )
}

export default App