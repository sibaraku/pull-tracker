import './History.css'
import Card from '../UI/card.jsx'


function History() {

    const MOCKDATA = [
        {"pull": 1, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 2, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 3, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 4, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 5, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 6, "rating": 5, "name": "Raiden Shogun", "win": true},
        {"pull": 7, "rating": 5, "name": "Raiden Shogun", "win": true}
    ]

    return (
        <>
            <h3>PULL HISTORY</h3>

            <Card>
                {MOCKDATA.map((item) => (
                    <div key={item.pull}>
                        <p>Pull: {item.pull}</p>
                        <p>Name: {item.name}</p>
                        <p>Rating: {item.rating}★</p>
                        <p>Win: {item.win ? "Yes" : "No"}</p>
                        <hr />
                    </div>
                ))}
            </Card>
        </>
    )
}

export default History