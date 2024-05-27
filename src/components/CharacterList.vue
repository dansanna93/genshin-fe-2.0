<template>
  <div :key="character.id" v-for="character in characters">
    <Character :character="character" />
  </div>
</template>

<script>
import Character from './Character.vue';
export default {
  name: 'CharacterList',
  props: {
    characters: Object,
  },
  components: {
    Character,
  },
  methods: {},
};
</script>
