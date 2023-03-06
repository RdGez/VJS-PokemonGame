<template>
  <h1 class="fade-in">Who's That Pokémon?</h1>
  <div v-if="!pokemon">
    <br /><br /><br />
    <SpinnerPage />
  </div>
  <div v-else>
    <h4>{{ message }}</h4>
    <br />
    <PokemonPicture
      class="fade-in"
      :pokeId="pokemon.id"
      :showPokemon="showPokemon" />

    <PokemonOptions
      class="fade-in"
      @selection="checkAnswer($event)"
      :pokemons="arrPokemons"
      v-show="!showAnswer" />

    <button
      class="fade-in"
      @click="newGame"
      v-show="showAnswer">New
      Game</button>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import SpinnerPage from "@/pages/SpinnerPage";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    SpinnerPage,
  },
  data() {
    return {
      message: null,
      pokemon: null,
      arrPokemons: [],
      showAnswer: false,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      const rndInt = Math.floor(Math.random() * 4);

      this.arrPokemons = await getPokemonOptions();
      this.pokemon = this.arrPokemons[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showAnswer = true;
      this.showPokemon = true;

      if (pokemonId == this.pokemon.id) {
        this.message = "Excellent! you guessed it";
      } else {
        this.message = `Oops! that pokemon is ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.message = null;
      this.pokemon = null;
      this.arrPokemons = [];
      this.showAnswer = false;
      this.showPokemon = false;

      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  user-select: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
button {
  background-color: #effbf2;
  border-radius: 2rem;
  border: 2px solid rgba(74, 150, 153, 100);
  cursor: pointer;
  width: 105px;
  margin-top: 40px;
  font-weight: 500;
  padding: 0.65rem 1rem;
  transition: 0.3s ease;
  margin-left: 10px;
}

button:hover {
  transition: 0.3s ease;
  background-color: #ade3cc;
}
</style>