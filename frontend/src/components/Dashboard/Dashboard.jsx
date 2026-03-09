import './Dashboard.css'
import Stats from '../Stats/Stats.jsx'
import History from '../History/History.jsx'
import AddPull from '../AddPull/AddPull.jsx'

function Dashboard({ activeGame, pulls, addPull }) {
  return (
    <main className="dashboard">
      <Stats pulls={pulls} />
      <History pulls={pulls} />
      <AddPull activeGame={activeGame} addPull={addPull} />
    </main>
  )
}

export default Dashboard