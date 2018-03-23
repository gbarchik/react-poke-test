import { getPokeIdFromURL, getPokeImageFromId, toTitleCase } from '../helpers/Utils'
import { FETCHING_CONTENT, POKEMONS_LOADED, POKEMON_LOADED } from '../actions';

const initialState = {
    config: {
        siteTitle: 'Pokemon'
    },
    pokemons: [],
    detailedPokemons: {},
    loadMoreUrl: null,
    isLoading: true
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_CONTENT:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case POKEMONS_LOADED:
            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    ...action.pokemons.map((pokemon) => {
                        const { name, url } = pokemon;
                        const id = getPokeIdFromURL(url);

                        return {
                            name: toTitleCase(name),
                            id,
                            image: getPokeImageFromId(id)
                        }
                    })
                ],
                loadMoreUrl: action.loadMoreUrl,
                isLoading: action.isLoading
            }

        case POKEMON_LOADED:
            return {
                ...state,
                detailedPokemons: {
                    [action.pokemon.id]: {
                        name: toTitleCase(action.pokemon.name),
                        id: action.pokemon.id,
                        sprites: action.pokemon.sprites,
                        height: action.pokemon.height,
                        weight: action.pokemon.weight
                    }
                },
                isLoading: action.isLoading
            }

        default:
            return state;
    }
};

export default reducer;