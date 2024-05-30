<template>
  <h3>Characters</h3>
  <CharacterList :characters="characters" />
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
    });
  },
};
</script>

<style scoped>
.col-md-12 {
  align-content: center;
}
</style>
