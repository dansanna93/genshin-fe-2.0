import axios from 'axios';

const API_URL = 'http://localhost:8080/api/characters';

class CharService {
  async getCharactersList() {
    const characters = await axios.get(API_URL);
    /* console.log(characters.data); */
    return characters;
  }
}

export default new CharService();
