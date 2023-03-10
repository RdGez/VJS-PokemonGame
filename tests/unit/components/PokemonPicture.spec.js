import { shallowMount } from '@vue/test-utils'
import PokemonPicture from "@/components/PokemonPicture";

describe('PokemonPicture Component', () => {

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokeId: 1,
                showPokemon: false
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Debe mostrar la imagen oculta y debe aparecer el poquemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokeId: 100,
                showPokemon: false
            }
        })

        const [ img1, img2 ] = wrapper.findAll('img')
        
        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)

        expect( img1.classes('hidden-pokemon') ).toBeTruthy()
        expect( img1.attributes('src') ).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)
    })
    
    test('Debe de mostrar la imagen del pokemon si showPokemon: true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokeId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')
        console.log(wrapper)
        
        expect( img1.exists() ).toBeTruthy()
        expect( img1.classes('hidden-pokemon') ).toBe(true)
        expect( img1.classes('fade-in') ).toBe(false)
    })
    
})
