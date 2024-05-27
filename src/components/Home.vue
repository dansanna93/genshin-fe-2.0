<template>
  <div class="myContainer">
    <h3>Character List</h3>
    <CharacterList :characters="characters" />
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue';
import CharService from '@/services/char.service';
export default {
  name: 'Home',
  components: {
    CharacterList,
  },
  data() {
    return {
      characters: [],
    };
  },
  created() {
    CharService.getCharactersList().then((response) => {
      this.characters = response.data;
      console.log(this.characters);
    });
  },
};
</script>

<style scoped>
.myContainer {
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 30px auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
}
</style>
