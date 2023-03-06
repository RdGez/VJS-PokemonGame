<template>
  <div class="pokemon-container">
    <img
      :src="this.imgSrc"
      class="hidden-pokemon"
      alt="Pokemon" />
    <img
      v-if="showPokemon"
      :src="this.imgSrc"
      class="fade-in"
      alt="Pokemon" />
  </div>
  <!-- <br> -->
</template>

<script>
export default {
  props: {
    pokeId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`;
    },
  },
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}
img {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  height: 200px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>