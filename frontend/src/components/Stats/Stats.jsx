import './Stats.css'
import Card from '../UI/Card.jsx'

function Stats(props) {

    let genshinStats = {   pulls: 122,
                            fiveStars: 5,
                            pullCount: 6}

    let hsrStats = {   pulls: 67,
                        fiveStars: 2,
                        pullCount: 4}

    
    localStorage.setItem('GenshinStats', JSON.stringify(genshinStats))
    localStorage.setItem('HSRStats', JSON.stringify(hsrStats))

    let ActiveStats = props.activeGame === "Genshin" ? JSON.parse(localStorage.getItem('GenshinStats')) : JSON.parse(localStorage.getItem('HSRStats'))

    return (
        <>
        <h3>Statistics</h3>
        <Card className="Statistics">
        <ul>
            <li>Total pulls: {ActiveStats.pulls}</li>
            <li>Total 5★: {ActiveStats.fiveStars}</li>
            <li>Current pull count: {ActiveStats.pullCount}</li>
        </ul>
        </Card>
        </>
        )
}

export default Stats