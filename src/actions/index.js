import { getAllPokemons, getPokemonById } from '../helpers/PokeAPI';

export const FETCHING_CONTENT = 'FETCHING_CONTENT';
export const POKEMONS_LOADED = 'POKEMONS_LOADED';
export const POKEMON_LOADED = 'POKEMON_LOADED';

export function fetchingContent () {
    return {
        type: FETCHING_CONTENT,
        isLoading: true
    }
}

export function pokemonsLoaded (data) {
    const { results, next } = data;
    
    return {
        type: POKEMONS_LOADED,
        pokemons: results,
        loadMoreUrl: next,
        isLoading: false
    }
}

export function pokemonLoaded (data) {
    return {
        type: POKEMON_LOADED,
        pokemon: data,
        isLoading: false
    }
}

export const loadPokemons = () => dispatch => {
    dispatch(fetchingContent());
    return getAllPokemons().then(data => dispatch(pokemonsLoaded(data)));
};

export const loadPokemon = (id) => dispatch => {
    dispatch(fetchingContent());
    return getPokemonById(id).then(data => dispatch(pokemonLoaded(data)));
};