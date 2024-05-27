<template>
  <div>
    <CharacterDetails>
      <template #header>
        <div class="popover">
          <img :src="require(`@/assets/icons/${character.icon}`)" />
          <h3>{{ character.name }}</h3>
        </div>
      </template>
      <template #content>
        <div class="popover-content">
          <a :href="`${character.wiki_url}`">
            <img :src="require(`@/assets/splash/${character.splash}`)" />
            <br />
          </a>
          Name: {{ character.name }} <br />
          Rarity: {{ character.rarity === '4_star' ? '4 Stars' : '5 Stars' }}
          <br />
          Weapon: {{ character.weapon }} <br />
          Vision: {{ character.vision }} <br />
        </div>
      </template>
    </CharacterDetails>
  </div>
</template>

<script>
import CharacterDetails from './CharacterDetails.vue';
export default {
  name: 'Character',
  props: {
    character: Object,
  },
  components: {
    CharacterDetails,
  },
};
</script>

<style>
.popover {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  background-color: aqua;
  color: fff;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.popover:hover {
  background: #006977;
  color: #fff;
}

.popover-content {
  margin: auto;
  position: center;
  background-color: #64edff;
  border-radius: 6px;
  margin-top: 4px;
  padding: 16px;
  color: #333;
  min-width: 200px;
  text-align: center;
}
</style>
