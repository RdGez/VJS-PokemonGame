<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id )">
        {{ pokemon.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {

  }
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}

li {
  background-color: #effbf2;
  border-radius: 2rem;
  border: 2px solid rgba(74, 150, 153, 100);
  cursor: pointer;
  margin-bottom: 10px;
  width: 270px;
  font-weight: 500;
  padding: 0.65rem 1rem;
  transition: 0.3s ease;
}

li:hover {
  transition: 0.3s ease;
  background-color: #ade3cc;
}

.options-container {
  display: flex;
  justify-content: center;
  margin-right: 30px;
  margin-top: 15px;
}
</style>