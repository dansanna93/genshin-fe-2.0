<template>
  <SearchCharacter @search-character="searchCharacter" />
  <CharacterList :characters="characters" />
</template>

<script>
import SearchCharacter from '@/components/SearchCharacter.vue';
import CharacterList from '@/components/CharacterList.vue';
import CharService from '@/services/char.service';
export default {
  props: {
    charAttributes: Object,
  },
  data() {
    return {
      characters: [],
    };
  },
  components: {
    SearchCharacter,
    CharacterList,
  },
  methods: {
    searchCharacter(charAttributes) {
      if (charAttributes.name) {
        CharService.getCharacterDetails(
          charAttributes.name.charAt(0).toUpperCase() +
            charAttributes.name.slice(1)
        ).then((response) => {
          this.characters = response.data;
        });
      } else {
        CharService.searchChar(charAttributes).then((response) => {
          this.characters = response.data;
        });
        if (!this.characters) {
          alert('No Characters Found!');
        }
      }
    },
  },
};
</script>
