
var div = document.getElementById("pag");
var divray = document.getElementById("pag");
var pokemon = document.createElement("h1");
var pokemondes = document.createElement("p");

div.append(pokemon)
pokemon.append("Mi pokemon favorito es:Rayquaza")

div.appendChild(pokemondes)
pokemondes.append("Rayquaza es mi pokemon favorito debido a su apariencia de dragon y por las apariciones que ha tenido en las peliculas animadas de pokemon")

var nodoPadre = document.getElementById("pag");
var imgRa = document.createElement("img");
imgRa.src = "R.png";
imgRa.width = 100;
imgRa.height = 100;
nodoPadre.insertBefore(imgRa,pokemon);