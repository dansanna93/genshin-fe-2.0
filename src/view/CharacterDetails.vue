<template>
  <div class="container">
    <a :href="`${character.wiki_url}`">
      <img :src="charSplash.splash" />
      <br />
    </a>
    Name: {{ character.name }} <br />
    Rarity: {{ character.rarity === '4_star' ? '4 Stars' : '5 Stars' }} <br />
    Weapon: {{ character.weapon }} <br />
    Vision: {{ character.vision }} <br />
  </div>
</template>

<script>
import CharService from '@/services/char.service';
export default {
  name: 'CharacterDetails',
  data() {
    return {
      character: Object,
    };
  },
  created() {
    CharService.getCharacterDetails(this.$route.params.id).then((response) => {
      this.character = response.data[0];
      document.title = 'Genshin Impact | ' + this.character.name;
    });
  },
  computed: {
    charSplash() {
      return {
        ...this.character,
        splash:
          this.character.splash &&
          require(`@/assets/splash/${this.character.splash}`),
      };
    },
  },
};
</script>
