var hasRolledOnce = false;
var mainButton;
var diceTypeArea;
var diceType = 'game';

const lists = {
  gameDice: {
    genre: ['Metroidvania', 'Rogue-lite', 'Management', 'Rougelike', 'Survival', 'Simulation', 'Clicker', 'Visual Novel', 'Sandbox', 'Real-time Strategy', 'First-person Shooter', 'Action-Adventure', 'Party', 'Puzzle', 'Platformer', 'Shooter', 'Beat\'em up', 'Stealth', 'Rhythm', 'Horror'],
    type: ['Multiplayer', 'Singleplayer', 'Co-op', 'Two-player', 'Three-player', 'Four-player', 'Couch-Multiplayer', 'Split-Screen Multiplayer'],
    mechanic: ['Exploration', 'Resource-Management', 'Resource-Generation', 'Automation', 'Branching Story', 'Hacking'],
    plot: ['Hero\'s Journey', 'Rescue', 'Recovery', 'Escape', 'Survival', 'Ancients', 'Horror']
  },
  storyDice: {
    genre: ['Romance', 'Sci-fi', 'Horror', 'Thriller', 'Comedy', 'Mystery', 'Fantasy', 'Realistic Fiction', 'Satire', 'Poem', 'Epic', 'Fable', 'Fairy Tale'],
    plotType: ['Hero\'s Journey', 'Betrayal', 'Coming of Age', 'Murder Mystery', 'Political Struggle', 'Escape', 'Spy Story'],
    settingType: ['Post-Apocalyptic', 'Modernist Dystopia', 'Religious Dystopia', 'Corporate Dystopia', 'Dystopia', 'Future', 'Alien Planet', 'Current Earth', 'Medieval Earth'],
    length: ['Short-Story', 'Long...', '1000 Words', 'Novella', 'Pamphlet-sized', '2 Sentences.', 'Paragraph', 'As you wish', 'As you like it.']
  }
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
  if (diceType == 'game') {
    document.getElementById('genre1').innerHTML = getRandomItem(lists.gameDice.genre);
    document.getElementById('genre2').innerHTML = getRandomItem(lists.gameDice.genre);
    document.getElementById('type').innerHTML = getRandomItem(lists.gameDice.type);
    document.getElementById('mechanic').innerHTML = getRandomItem(lists.gameDice.mechanic);
    document.getElementById('plot1').innerHTML = getRandomItem(lists.gameDice.plot);
    document.getElementById('plot2').innerHTML = getRandomItem(lists.gameDice.plot);
  } else if (diceType == 'story') {
    document.getElementById('genre1').innerHTML = getRandomItem(lists.storyDice.genre);
    document.getElementById('genre2').innerHTML = getRandomItem(lists.storyDice.genre);
    document.getElementById('type').innerHTML = getRandomItem(lists.storyDice.length);
    document.getElementById('mechanic').innerHTML = getRandomItem(lists.storyDice.settingType);
    document.getElementById('plot1').innerHTML = getRandomItem(lists.storyDice.plotType);
    document.getElementById('plot2').innerHTML = getRandomItem(lists.storyDice.plotType);
  }
}

function purgeRolls() {
  document.getElementById('genre1').innerHTML = 'N/A';
  document.getElementById('genre2').innerHTML = 'N/A';
  document.getElementById('type').innerHTML = 'N/A';
  document.getElementById('mechanic').innerHTML = 'N/A';
  document.getElementById('plot1').innerHTML = 'N/A';
  document.getElementById('plot2').innerHTML = 'N/A';
}

function switchDiceType(event) {
  var headings = document.getElementsByClassName('diceHeader');
  console.debug(headings);
  if (event.target.id.toString() == 'typeSwitcher') {
    return null;
  }
  document.getElementsByClassName('buttonActive')[0].className = document.getElementsByClassName('buttonActive')[0].className.replace(' buttonActive', '');
  event.target.className += ' buttonActive';
  console.log(event.target.id);
  if (event.target.id.toString() === 'typeGame') {
    diceType = 'game';
    headings[0].innerText = 'Genre 1';
    headings[1].innerText = 'Genre 2';
    headings[2].innerText = 'Type';
    headings[3].innerText = 'Mechanic';
    headings[4].innerText = 'Plot Point 1';
    headings[5].innerText = 'Plot Point 2';
    purgeRolls();
  } else if (event.target.id.toString() === 'typeStory') {
    diceType = 'story';
    headings[0].innerText = 'Genre 1';
    headings[1].innerText = 'Genre 2';
    headings[2].innerText = 'Length';
    headings[3].innerText = 'Main Setting';
    headings[4].innerText = 'Plot Point 1';
    headings[5].innerText = 'Plot Point 2';
    purgeRolls();
  }
}

function ready() {
  mainButton = document.getElementById('rerollbutton');
  reloadButton();
  console.log("Loaded!");
  mainButton.addEventListener('click', roll);

  diceTypeArea = document.getElementById('typeSwitcher');
  diceTypeArea.addEventListener('click', switchDiceType);
}
