import './Stats.css'
import Card from '../UI/Card.jsx'

function Stats({ pulls }) {
  const totalPulls = pulls.length
  const total5Star = pulls.filter(p => p.rating === 5).length

  let pity = 0
  for (let i = pulls.length - 1; i >= 0; i--) {
    if (pulls[i].rating === 5) break
    pity++
  }
  if (pulls.length === 0) pity = 0

  return (
    <Card className="stats-card">
      <ul>
        <li>Total pulls: <strong>{totalPulls}</strong></li>
        <li>Total 5★: <strong>{total5Star}</strong></li>
        <li>Current pity: <strong>{pity}</strong></li>
      </ul>
    </Card>
  )
}

export default Stats