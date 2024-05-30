<template>
  <div>
    <div class="popover">
      <router-link :to="{ path: '/characters/' + character.name }">
        <img :src="require(`@/assets/icons/${character.icon}`)" />
        <h6>{{ character.name }}</h6>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    character: Object,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.popover {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 8px;
  text-transform: uppercase;
  background-color: aqua;
  color: black;
  border: 0px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 1000;
}

.popover:hover {
  background: #006977;
  color: #fff;
}
</style>
