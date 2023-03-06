import { shallowMount } from "@vue/test-utils"
import PokemonScreen from "@/pages/PokemonScreen"

import { pokemons } from '../mocks/pokemons.mock';

describe("PokemonScreen Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonScreen)
  })

  test("Debe hacer match con el snapshot", () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Debe de llamar el mixPokemonArray() al montar', () => {
    const mixPokemonArrSpy = jest.spyOn( PokemonScreen.methods, 'mixPokemonArray' )
    shallowMount(PokemonScreen)
    expect( mixPokemonArrSpy ).toHaveBeenCalled()
  })

  test('Debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonScreen,{
      data() {
        return {
          arrPokemons: pokemons,
          message: null,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
        }
      }
    })

    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonScreen,{
      data() {
        return {
          arrPokemons: pokemons,
          message: null,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
        }
      }
    })
    
    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    expect( picture.exists()).toBeTruthy()
    expect( options.exists()).toBeTruthy()
    expect( picture.attributes('pokeid')).toBe('1')
    expect( options.attributes('pokemons')).toBeTruthy()
  })  

  test('Pruebas con Checkanswer', async () => {
    const wrapper = shallowMount(PokemonScreen,{
      data() {
        return {
          arrPokemons: pokemons,
          message: null,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
        }
      }
    })

    await wrapper.vm.checkAnswer(2)
    expect( wrapper.find('h4').exists() ).toBeTruthy()
    expect( wrapper.vm.showPokemon ).toBeTruthy()
  })
  
})
