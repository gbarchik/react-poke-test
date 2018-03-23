const mediaURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites';

export const getPokeIdFromURL = (url) => {
    const urlSplit = url.match(/pokemon\/([0-9]+)\/?/);
    return urlSplit ? urlSplit[1] : null;
}

export const getPokeImageFromId = (id) => id ? `${mediaURL}/pokemon/${id}.png` : '';

export const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());