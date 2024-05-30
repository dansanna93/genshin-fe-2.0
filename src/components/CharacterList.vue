<template>
  <div v-for="(row, rowIndex) in gridRows" :key="rowIndex" class="row">
    <div v-for="(item, colIndex) in row" :key="colIndex" class="col stategrid">
      <Character :character="item" />
    </div>
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
  computed: {
    gridRows() {
      const columnsPerRow = 5;
      let rows = [];
      console.log(`lunghezza characters:${this.characters.length}`);
      for (let i = 0; i < this.characters.length; i += columnsPerRow) {
        rows.push(this.characters.slice(i, i + columnsPerRow));
      }
      console.log(this.characters);
      console.log(`rows:${rows}`);
      return rows;
    },
  },
};
</script>

<style scoped>
.col {
  max-width: 230px;
}
.stategrid {
  min-height: 230px;
  text-align: center;
  margin: 1px;
}
</style>
