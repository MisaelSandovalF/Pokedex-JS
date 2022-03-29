
   
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
            pokePS(" ");
            pokeATK(" ");
            pokeDEF(" ");
            pokeSPATAK(" ");
            pokeSPDEF(" ");
            pokeSPEED(" ");
            pokeNameLabel(" ");
            pokeTIPOS(" ");
            pokeNameLabel("DON'T FOUND");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data); 
            let pokeImg = data.sprites.other.home.front_default;
            let PS = data.stats[0].base_stat;
            let ATK = data.stats[1].base_stat;
            let DEF = data.stats[2].base_stat;
            let SPATAK = data.stats[3].base_stat;
            let SPDEF = data.stats[4].base_stat;
            let SPEED = data.stats[5].base_stat;
            let NAMELABEL = data.name;
     
            if (data.types.length == 2) {
                let pokeTIPO1 = data.types[0].type.name;
                let pokeTIPO2 = data.types[1].type.name;
                let tipos = pokeTIPO1 + "/" +  pokeTIPO2;
                document.getElementById("tipo");
                pokeTIPOS(tipos);
            }
            
            else {
                let tipos = data.types[0].type.name;
                document.getElementById("tipo");
                pokeTIPOS(tipos);
            }
            pokeImage(pokeImg);
            pokePS(PS);
            pokeATK(ATK);
            pokeDEF(DEF);
            pokeSPATAK(SPATAK);
            pokeSPDEF(SPDEF);
            pokeSPEED(SPEED);
            pokeNameLabel(NAMELABEL);
            
           
        }
        
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokePS = (url) => {
    const pokePS = document.getElementById("ps");
    pokePS.value = url;
}
const pokeATK = (url) => {
    const pokeATK = document.getElementById("atk");
    pokeATK.value = url;
}
const pokeDEF = (url) => {
    const pokeDEF = document.getElementById("def");
    pokeDEF.value = url;
}
const pokeSPATAK = (url) => {
    const pokeSPATAK = document.getElementById("spatak");
    pokeSPATAK.value = url;
}
const pokeSPDEF = (url) => {
    const pokeSPDEF = document.getElementById("spdef");
    pokeSPDEF.value = url;
}
const pokeSPEED = (url) => {
    const pokeSPEED = document.getElementById("speed");
    pokeSPEED.value = url;
}
const pokeTIPOS = (url) => {
    const pokeTIPOS = document.getElementById("tipo");
    pokeTIPOS.value = url;
}
const pokeNameLabel = (url) => {
    const pokeNameLabel = document.getElementById("nombre");
    pokeNameLabel.value = url;
   
}

