import pokemonApi from '@/api/pokemonApi'

describe('Pokemon API', () => {
    test('Axios debe estar configurado con el API de Pokemon ', () => {
        expect( pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
