fetch("https://swapi.dev/api/planets")
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((planet) => {
      let planetBox = document.createElement("div");
      document.querySelector("body").appendChild(planetBox);
      planetBox.innerHTML = `
        <h1>Planeta: ${planet.name}</h1>
        <p>Clima: ${planet.climate}</p>
        <p>Población: ${planet.population}</p>
        <p>Gravedad: ${planet.gravity}</p>
        `;
      let charList = document.createElement("ul");
      planetBox.appendChild(charList);

      planet.residents.forEach((char) => {
        fetch(char)
          .then((response) => response.json())
          .then((character) => {
            let charEle = document.createElement("li");
            charEle.innerText = `${character?.name}`;
            charList.appendChild(charEle);
          })
          .catch((err) => console.log("Soy un fallo", err));
      });
    });
  })
  .catch((err) => console.log("Soy un fallo que no debería salir", err));
