import './Modals.css'
import { useState } from 'react'

function ListModal({ title, items, onSelect, onClose }) {
  const [search, setSearch] = useState('')

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>{title}</h2>
        <input
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}/>      
        <div className="character-grid">
          {filtered.map(item => (
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