fetch("https://swapi.dev/api/films")
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((film) => {
      let filmBox = document.createElement("div");
      document.querySelector("body").appendChild(filmBox);
      filmBox.innerHTML = `
        <h1>${film.title}</h1>
        <p>${film.opening_crawl}</p>
        `;
      let charList = document.createElement("ul");
      filmBox.appendChild(charList);

      film.characters.forEach((char) => {
        fetch(char)
          .then((response) => response.json())
          .then((character) => {
            let charEle = document.createElement("li");
            charEle.innerText = `${character?.name}`;
            charList.appendChild(charEle);
          })
          .catch((err) => console.log("Holi soy un fallo", err));
      });
    });
  })
  .catch((err) => console.log("Holi, soy un fallo que no debería salir", err));
