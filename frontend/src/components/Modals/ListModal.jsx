import './Modals.css'

function ListModal({ title, items, onSelect, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>{title}</h2>
        <div className="character-grid">
          {items.map(item => (
            <div key={item.slug} className="character-card" onClick={() => onSelect(item)}>
              {item.img && <img src={item.img} alt={item.name} />}
              <p>{item.name}</p>
              {item.type && <small>{item.type}</small>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListModal