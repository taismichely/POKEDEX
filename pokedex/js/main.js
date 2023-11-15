
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Codigo com html
function convertTypeToLi(pokemonsTypes) {
    return pokemonsTypes.map((typeslot) => `<li class="type">${typeslot.type.name}</li>`)
}

//Criar um modelo nosso de pokemon API para facilitar a inserção de dados

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.types[0]}" >
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertTypeToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default
            }" alt="${pokemon.name}">
        </div>
    </li>
    `
}

//Pegar ID de onde será inserido os dados do pokemon com html
const pokemonlist = document.getElementById('pokemonList');


//Consumo de API com FETCH com promisse
PokeApi.getPokemons().then((pokemons = []) => {
    const newHTML = pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join('')
    pokemonlist.innerHTML = newHTML;
    
})