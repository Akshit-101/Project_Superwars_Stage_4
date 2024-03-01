const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];

class Player {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.strength = this.getRandomStrength();
    this.image = 'images/super-' + (id + 1) + '.png';
    this.type = type;
  }

  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  view = () => {
    let playerElement = document.createElement('div');
    playerElement.classList.add('player');
    playerElement.setAttribute('data-id', this.id);

    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', this.image);

    let nameElement = document.createElement('div');
    nameElement.textContent = this.name;

    let strengthElement = document.createElement('div');
    strengthElement.textContent = this.strength;
    strengthElement.classList.add('strength');

    playerElement.append(imageElement, nameElement, strengthElement);
    return playerElement;
  };
}

class Superwar {
  constructor(players) {
    this.players = players.map((name, id) => {
      let type = id % 2 == 0 ? 'hero' : 'villain';
      return new Player(id, name, type);
    });
  }

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

  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
