import './Stats.css'
import Card from '../UI/card.jsx'

function Stats() {

    // PLACEHOLDER DATA OK OK OK, in future probably take from localstorage, also need to implement a way to get game specific stats (genshin or hsr)
    let pulls = 122
    let fiveStars = 5
    let pullCount = 6

    return (
        <>
        <h3>Statistics</h3>
        <Card className="Statistics">
        <ul>
            <li>Total pulls: {pulls}</li>
            <li>Total 5★: {fiveStars}</li>
            <li>Current pull count: {pullCount}</li>
        </ul>
        </Card>
        </>
        )
}

export default Stats