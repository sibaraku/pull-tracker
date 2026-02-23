// MODAL ELEMENTS

const rarityModal = document.getElementById("rarityModal");
const outcomeModal = document.getElementById("outcomeModal");
const listModal = document.getElementById("listModal");

const listContainer = document.getElementById("listContainer");
const listTitle = document.getElementById("listTitle");

// STATE VARIABLES

let selectedRarity = null;
let selectedOutcome = null;

// STATS ELEMENTS

const totalPullsEl = document.getElementById("total-pulls");
const total5StarEl = document.getElementById("total-5star");
const currentCountEl = document.getElementById("current-count");

// OPEN RARITY MODAL

document.getElementById("openModal").addEventListener("click", () => {
  rarityModal.style.display = "flex"; // show rarity selection modal
});

// CLOSE MODAL FUNCTION

function closeModal(id) {
  document.getElementById(id).style.display = "none"; // hide modal by id
}

// OPEN 3★ SELECTION

function open3Star() {
  selectedRarity = 3;
  closeModal("rarityModal"); // close rarity modal

  // Show a list of 3★ weapons (for now, only like this)
  showList("Select 3★ Weapon", ["BLELE", "BLALA", "BLULU"]);
}

// OPEN 4★ SELECTION

function open4Star() {
  selectedRarity = 4;
  closeModal("rarityModal"); // close rarity modal

  // Show list of 4★ characters/weapons (for now, only like this)
  showList("Select 4★ Character/Weapon", [
    "Bennett",
    "Xiangling",
    "Favonius Sword",
    "LALALALA",
  ]);
}

// OPEN 5★ MODAL

function open5Star() {
  selectedRarity = 5;
  closeModal("rarityModal"); // close rarity modal

  // Show outcome modal (50/50)
  outcomeModal.style.display = "flex";
}

// 5★ WIN/LOSS SELECTION

function openWin() {
  selectedOutcome = "win";
  closeModal("outcomeModal"); // close outcome modal

  // Show list of event 5★ characters
  showList("Select Event 5★ Character", ["Raiden", "Furina", "Nahida"]);
}

function openLoss() {
  selectedOutcome = "loss";
  closeModal("outcomeModal"); // close outcome modal

  // Show list of standard 5★ characters
  showList("Select Standard 5★ Character", [
    "Diluc",
    "Jean",
    "Mona",
    "Keqing",
    "Qiqi",
  ]);
}

// LIST MODAL

function showList(title, items) {
  listTitle.textContent = title; // set modal title
  listContainer.innerHTML = ""; // clear previous items

  // Create a div for each selectable character/weapon
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "character-card";
    div.textContent = item;

    // Add click handler: add to history and close modal
    div.onclick = () => {
      addToHistory(item);
      closeModal("listModal");
    };

    listContainer.appendChild(div);
  });

  listModal.style.display = "flex"; // show the list modal
}

// ADD PULL TO HISTORY

function addToHistory(name) {
  const history = document.querySelector(".history-list");

  const div = document.createElement("div");
  div.className = "pull-item";

  // Color coding by rarity
  if (selectedRarity === 5) div.classList.add("gold");
  if (selectedRarity === 4) div.classList.add("purple");
  if (selectedRarity === 3) div.classList.add("blue");

  // Display rarity, name, and win/loss if 5★
  div.textContent = selectedRarity +"★: " + name +
    (selectedRarity === 5 ? " (" + selectedOutcome.toUpperCase() + ")" : "");

  // Prepend to history (newest on top)
  history.prepend(div);

  // Re-number items: 1 - oldest to newest
  Array.from(history.children).forEach((child, index) => {
    child.textContent =
      index + 1 + " - " + child.textContent.replace(/^\d+\s-\s/, "");
  });

  // Update statistics
  updateStats();
}

// UPDATE STATISTICS

function updateStats() {
  const history = document.querySelector(".history-list");

  // Total number of pulls
  const totalPulls = history.children.length;

  // Total number of 5★ pulls
  const total5Star = Array.from(history.children).filter((el) =>
    el.classList.contains("gold")
  ).length;

  // Update HTML elements
  totalPullsEl.textContent = totalPulls;
  total5StarEl.textContent = total5Star;

  // Current pull count (pity since last 5★)
  const last5StarIndex = Array.from(history.children).findIndex((el) =>
    el.classList.contains("gold")
  );
  const currentPull = last5StarIndex === -1 ? totalPulls : last5StarIndex;
  currentCountEl.textContent = currentPull;
}