var hasRolledOnce = false;
var mainButton;

const lists = {
  genre: ['Metroidvania', 'Rogue-lite', 'Management', 'Rougelike', 'Survival', 'Simulation', 'Clicker', 'Visual Novel', 'Sandbox', 'Real-time Strategy', 'First-person Shooter', 'Action-Adventure', 'Party', 'Puzzle', 'Platformer', 'Shooter', 'Beat\'em up', 'Stealth', 'Rhythm', 'Horror'],
  type: ['Multiplayer', 'Singleplayer', 'Co-op', 'Two-player', 'Three-player', 'Four-player', 'Couch-Multiplayer', 'Split-Screen Multiplayer'],
  mechanic: ['Exploration', 'Resource-Management', 'Resource-Generation', 'Automation', 'Branching Story', 'Hacking'],
  plot: ['Hero\'s Journey', 'Rescue', 'Recovery', 'Escape', 'Survival', 'Ancients', 'Horror']
}


document.addEventListener('DOMContentLoaded', ready);

function reloadButton() {
  if (!hasRolledOnce) {
    mainButton.innerText = 'Roll';
  } else {
    mainButton.innerText = 'Re-roll';
  }
}

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function roll() {
  console.log("Rolling...");
  hasRolledOnce = true;
  reloadButton()
  document.getElementById('genre1').innerHTML = getRandomItem(lists.genre);
  document.getElementById('genre2').innerHTML = getRandomItem(lists.genre);
  document.getElementById('type').innerHTML = getRandomItem(lists.type);
  document.getElementById('mechanic').innerHTML = getRandomItem(lists.mechanic);
  document.getElementById('plot1').innerHTML = getRandomItem(lists.plot);
  document.getElementById('plot2').innerHTML = getRandomItem(lists.plot);
}

function ready() {
  mainButton = document.getElementById('rerollbutton');
  reloadButton();
  console.log("Loaded!");
  mainButton.addEventListener('click', roll);
}
