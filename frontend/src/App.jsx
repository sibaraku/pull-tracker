import Stats from './components/Stats/Stats.jsx'
import AddPull from './components/AddPull/AddPull.jsx'
import History from './components/History/History.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  const [activeGame, setActiveGame] = useState("Genshin")

  return (
    <div className='container'>
    <Header activeGame={activeGame} setActiveGame={setActiveGame} />
    <Stats activeGame={activeGame}/>
    <AddPull activeGame={activeGame}/>
    <History activeGame={activeGame}/>
    </div>
    )
}
  
export default App