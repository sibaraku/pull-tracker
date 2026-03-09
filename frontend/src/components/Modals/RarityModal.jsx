import './Modals.css'

function RarityModal({ onClose, on3Star, on4Star, on5Star }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content center" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Select Rarity</h2>
        <div className="rarity-grid">
          <button className="rarity-btn blue"   onClick={on3Star}>3★</button>
          <button className="rarity-btn purple" onClick={on4Star}>4★</button>
          <button className="rarity-btn gold"   onClick={on5Star}>5★</button>
        </div>
      </div>
    </div>
  )
}

export default RarityModal