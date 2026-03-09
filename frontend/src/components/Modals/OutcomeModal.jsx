import './Modals.css'

function OutcomeModal({ onClose, onWin, onLoss }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content center" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Did you win 50/50?</h2>
        <div className="rarity-grid">
          <button className="rarity-btn gold" onClick={onWin}>WIN</button>
          <button className="rarity-btn gold" onClick={onLoss}>LOSS</button>
        </div>
      </div>
    </div>
  )
}

export default OutcomeModal