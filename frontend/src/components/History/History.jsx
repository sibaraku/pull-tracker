import './History.css'
import Card from '../UI/Card.jsx'


function History(props) {


    const MOCKDATA_Genshin = [
        {"pull": 1, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 2, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 3, "rating": 4, "name": "Raiden Shogun", "win": true},
        {"pull": 4, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 5, "rating": 3, "name": "Raiden Shogun", "win": true},
        {"pull": 6, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 7, "rating": 5, "name": "Raiden Shogun", "win": true}
    ]
        const MOCKDATA_HSR = [
        {"pull": 1, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 2, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 3, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 4, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 5, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 6, "rating": 5, "name": "Acheron", "win": true},
        {"pull": 7, "rating": 5, "name": "Acheron", "win": true}
    ]

    localStorage.setItem('GenshinData', JSON.stringify(MOCKDATA_Genshin))
    localStorage.setItem('HSRData', JSON.stringify(MOCKDATA_HSR))

    console.log(props.activeGame)
    let ActiveMOCKDATA = props.activeGame === "Genshin" ? JSON.parse(localStorage.getItem('GenshinData')) : JSON.parse(localStorage.getItem('HSRData'))

    const getRarityClass = (rating) => {
        if (rating === 5) return 'pull-item gold'
        if (rating === 4) return 'pull-item purple'
        return 'pull-item blue'
    }

    const getLabel = (item) => {
        let label = `${item.pull} - ${item.rating}★: ${item.name}`
        if (item.rating === 5 && item.win) label += ' (WIN)'
        return label
    }


    
   return (
        <div className="history-section">
            <h3>PULL HISTORY</h3>
            <Card className="history-card">
                <div className="history-list">
                    {ActiveMOCKDATA.map((item) => (
                        <div key={item.pull} className={getRarityClass(item.rating)}>
                            <span>{getLabel(item)}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default History