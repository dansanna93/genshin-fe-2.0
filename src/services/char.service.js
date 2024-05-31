import axios from 'axios';

const API_URL = 'http://localhost:8080/api/characters/';

class CharService {
  async getCharactersList() {
    const characters = await axios.get(API_URL);
    return characters;
  }

  async getCharacterDetails(name) {
    const character = await axios.get(API_URL + '?name=' + name);
    return character;
  }

  async searchChar(char) {
    const characters = await axios.get(
      API_URL +
        '?rarity=' +
        char.rarity +
        '&weapon=' +
        char.weapon +
        '&vision=' +
        char.vision
    );
    return characters;
  }
}

export default new CharService();
