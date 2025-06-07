/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
     .then(response=>response.json())
     .then(data=>console.log(data.id ))// it will give pikachu id number
     .catch(error=>console.error(error));*?

// if no record is found

/*fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
     .then(response=>{
        if(!response.ok){
            throw new Error("could not fetch resource")
        }

        return response.json();

     })
     .then(data=>console.log(data.id ))// it will give pikachu id number
     .catch(error=>console.error(error));*/


//with async and await funvction





async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

