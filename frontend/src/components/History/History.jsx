import './History.css'
import Card from '../UI/Card.jsx'

function History({ pulls }) {
  function getColor(rating) {
    if (rating === 5) return 'pull-item gold'
    if (rating === 4) return 'pull-item purple'
    return 'pull-item blue'
  }

  return (
    <Card className="history-card">
      <div className="history-list">
        {pulls.length === 0 && <p>No pulls yet!</p>}
        {[...pulls].reverse().map((pull, index) => (
          <div key={pull.id} className={getColor(pull.rating)}>
            {pulls.length - index} - {pull.rating}★: {pull.name}
            {pull.rating === 5 && pull.win  && ' (WIN)'}
            {pull.rating === 5 && !pull.win && ' (LOSS)'}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default History