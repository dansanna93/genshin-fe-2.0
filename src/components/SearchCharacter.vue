<template>
  <h3>Search Character</h3>
  <div class="col-md-12">
    <div class="card card-container rounded">
      <img
        id="profile-img"
        src="@/assets/detective-paimon.png"
        class="profile-img-card"
      />
      <Form @submit="onSubmit">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            v-model="name"
            placeholder="Character Name..."
          />
        </div>
        <div class="form-group">
          <label>Rarity</label>
          <select name="rarity" id="rarity" v-model="rarity">
            <option value="" disabled selected>Choose Rarity...</option>
            <option value="4_star">4*</option>
            <option value="5_star">5*</option>
          </select>
        </div>
        <div class="form-group">
          <label>Weapon</label>
          <select name="weapon" id="weapon" v-model="weapon">
            <option value="" disabled selected>Choose Weapon...</option>
            <option value="Bow">Bow</option>
            <option value="Catalyst">Catalyst</option>
            <option value="Claymore">Claymore</option>
            <option value="Polearm">Polearm</option>
            <option value="Sword">Sword</option>
          </select>
        </div>
        <div class="form-group">
          <label>Vision</label>
          <select name="vision" id="vision" v-model="vision">
            <option value="" disabled selected>Choose Vision...</option>
            <option value="Anemo">Anemo</option>
            <option value="Cryo">Cryo</option>
            <option value="Electro">Electro</option>
            <option value="Geo">Geo</option>
            <option value="Hydro">Hydro</option>
            <option value="Pyro">Pyro</option>
          </select>
        </div>
        <input type="submit" value="Search" class="btn btn-primary btn-block" />
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCharacter',
  data() {
    return {
      name: '',
      rarity: '',
      weapon: '',
      vision: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const charAttributes = {
        name: this.name,
        rarity: this.rarity,
        weapon: this.weapon,
        vision: this.vision,
      };

      this.$emit('search-character', charAttributes);

      this.name = '';
      this.rarity = '';
      this.weapon = '';
      this.vision = '';
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.form-group input {
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-group select {
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
