const api = "https://pokeapi.co/api/v2";

export const getPokemonById = (pokeID) =>
    fetch(`${api}/pokemon/${pokeID}`)
        .then(res => res.json());

export const getAllPokemons = () =>
    fetch(`${api}/pokemon`)
        .then(res => res.json());