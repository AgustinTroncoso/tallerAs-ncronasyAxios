document.addEventListener('DomContentLoaded',()=>{
    const axios = require('axios')
   
    const buscar =async (pokemonId)=>{
       
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idpokemon}`);
            const pokemonData = response.data;
            verdata(pokemonData)
           
        }catch(error){
            alert('Id del pokemon no valida')
            document.getElementById('burcarporid').reset();
        }
    
    }
})



function verdata (pokemonData){
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
        <p><strong>ID:</strong> ${pokemonData.id}</p>
        <p><strong>Name:</strong> ${pokemonData.name}</p>
        <p><strong>Type(s):</strong> ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Height:</strong> ${pokemonData.height}</p>
        <p><strong>Weight:</strong> ${pokemonData.weight}</p>
    `;

}