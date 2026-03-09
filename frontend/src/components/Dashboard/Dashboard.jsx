import './Dashboard.css'
import Stats from '../Stats/Stats.jsx'
import History from '../History/History.jsx'
import AddPull from '../AddPull/AddPull.jsx'

function Dashboard({ activeGame, pulls, addPull }) {
  return (
    <main className="dashboard">

      {/* STATISTICS label above, cards below */}
      <div className="section-block">
        <p className="section-label">STATISTICS</p>
        <div className="stats-and-action">
          <Stats pulls={pulls} />
          <AddPull activeGame={activeGame} addPull={addPull} />
        </div>
      </div>

      {/* PULL HISTORY label above, full-width history below */}
      <div className="section-block">
        <p className="section-label">PULL HISTORY</p>
        <History pulls={pulls} />
      </div>

    </main>
  )
}

export default Dashboard