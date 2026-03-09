import './AddPull.css'
import Card from '../UI/Card.jsx'
import RarityModal from '../Modals/RarityModal.jsx'
import OutcomeModal from '../Modals/OutcomeModal.jsx'
import ListModal from '../Modals/ListModal.jsx'
import { useState, useEffect } from 'react'

function AddPull({ activeGame, addPull }) {
  const [chars, setChars] = useState([])
  const [weapons, setWeapons] = useState([])

  // which modal is open: null/rarity/outcome/list
  const [modal, setModal] = useState(null)
  const [rarity, setRarity] = useState(null)
  const [outcome, setOutcome] = useState(null)
  const [listItems, setListItems] = useState([])
  const [listTitle, setListTitle] = useState('')

  const game = activeGame === 'Genshin' ? 'genshin' : 'hsr'

  // load data from the backend when the game changes
  useEffect(() => {
    fetch(`http://localhost:3000/${game}/chars`)
      .then(res => res.json())
      .then(data => setChars(data))

    fetch(`http://localhost:3000/${game}/weapons`)
      .then(res => res.json())
      .then(data => setWeapons(data))
  }, [game])

  function pick3Star() {
    addPull({
      id: Date.now(),
      rating: 3,
      name: 'Weapon',
      img: null,
      win: null
    })
    setModal(null)
  }

  function pick4Star() {
    setRarity(4)
    setListTitle('Select 4★ Character / Weapon')
    setListItems([
      ...chars.filter(c => c.rarity === '4'),
      ...weapons.filter(w => w.rarity === '4')
    ])
    setModal('list')
  }

  function pick5Star() {
    setRarity(5)
    setModal('outcome')
  }

  function pickWin() {
    setOutcome('win')
    setListTitle('Select Event 5★ Character')
    setListItems(chars.filter(c => c.rarity === '5' && c.standard === false))
    setModal('list')
  }

  function pickLoss() {
    setOutcome('loss')
    setListTitle('Select Standard 5★ Character')
    setListItems(chars.filter(c => c.rarity === '5' && c.standard === true))
    setModal('list')
  }

  function selectItem(item) {
    addPull({
      id: Date.now(),
      rating: rarity,
      name: item.name,
      img: item.img,
      win: rarity === 5 ? outcome === 'win' : null
    })
    setModal(null)
  }

  function closeAll() {
    setModal(null)
    setRarity(null)
    setOutcome(null)
  }

  return (
    <>
      <Card className="addPull">
        <div className="add-pull-box" onClick={() => setModal('rarity')}>
          ADD NEW PULL
        </div>
      </Card>

      {modal === 'rarity' && (
        <RarityModal
          onClose={closeAll}
          on3Star={pick3Star}
          on4Star={pick4Star}
          on5Star={pick5Star}
        />
      )}

      {modal === 'outcome' && (
        <OutcomeModal
          onClose={closeAll}
          onWin={pickWin}
          onLoss={pickLoss}
        />
      )}

      {modal === 'list' && (
        <ListModal
          title={listTitle}
          items={listItems}
          onSelect={selectItem}
          onClose={closeAll}
        />
      )}
    </>
  )
}

export default AddPull