const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// user Class
class user {
  constructor(id, playername, typo) {
    // Progession 1: Create member variables and assign values
    this.id = id;
    this.playername = playername;
    this.image = 'images/super-' + (id + 1) + '.png';
    this.strength = this.getRandomStrength();
    this.typo = typo;
    this.selected = false;


    
    this.wins = 0;
  }

  // Get random strength
  getRandomStrength = () => {





    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    let player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('data-id', this.id);



    if (this.selected == true) player.classList.add('selected');
    let image = document.createElement('img');
    image.setAttribute('src', this.image);
    let playername = document.createElement('div');
    playername.textContent = this.playername;
    let strength = document.createElement('div');
    strength.textContent = this.strength;









    strength.className = 'strength';
    player.append(image, playername, strength);
    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player, i) => {
      let typo = i % 2 == 0 ? 'hero' : 'villain';









      return new user(i, player, typo);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };







  // Build players fragment
  buildPlayers = (typo) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.typo == typo)
      .forEach((player) => fragment.append(player.view()));
    return fragment;










  };
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
