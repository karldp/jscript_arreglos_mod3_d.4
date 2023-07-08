const propertiesJSON = [
    {
      name: "Country House",
      description: "The ideal place to rest from the city",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      meters: 170
    },
    {
      name: "Beach House",
      description: "Wake up by listening to the ocean",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      meters: 130
    },
    {
      name: "House near the city center",
      description: "Have everything you need close to you",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      meters: 80
    },
    {
      name: "Trailer",
      description: "Travel everywhere without leaving your home",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      meters: 6
    },
    {
      name: "Apartment",
      description: "Everything looks better from above",
      src:
        "https://i.pinimg.com/originals/de/3a/a6/de3aa6c93b38f7f27813ee6b0df2583c.jpg",
      rooms: 3,
      meters: 200
    },
    {
      name: "Mansion",
      description: "The place you'll never be able to afford",
      src:
        "https://robbreport.com/wp-content/uploads/2020/05/rubiks06.jpg",
      rooms: 5,
      meters: 500
    }
  ];
  
  // to grab all inputs in a variable
  
  const inputs = Array.from(document.querySelectorAll(".container input"));
  
  const properties = document.querySelector(".properties"); // to create the template later
  const filter = document.querySelector(".filter");
  const amountElement = document.querySelector("#amount"); // sum of properties found
  const searchButton = document.querySelector("#search");
  const erase = document.querySelector("#trashCan"); // select the trashcan icon
  
  function showHouseCard(propertiesJSON) {
    amountElement.innerHTML = propertiesJSON.length;
    properties.innerHTML = ''
  
    for (const house of propertiesJSON) {
        const newHouse = document.createElement("div") // create new element in DOM
        newHouse.classList.add("house") // create class to call it from CSS
        newHouse.innerHTML = ` 
        <div class="property">
        <div class="img"
          style="background-image: url(${house.src})">
        </div>
        <section>
          <h5>${house.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Rooms: ${house.rooms}</p>
            <p>Meters: ${house.meters}</p>
          </div>
          <p class="my-3">${house.description}</p>
          <button class="btn btn-info ">See more</button>
        </section>
      </div>`;
  
      properties.appendChild(newHouse); // it adds a new element at the end of the list
    }
  }
  
  
  showHouseCard(propertiesJSON); // call function showHouseCard
  
  
  
  const filterHouses = () => {
    const [{value: rooms}, {value: minMeters}, {value: maxMeters}] = inputs;
    if (!rooms && !minMeters && !maxMeters) {
        alert("You must fill in all the requested information");
        return false;
    }
  
    const housesFilter = propertiesJSON.filter(
      (house) => house.rooms >= rooms && house.meters >= minMeters && house.meters <= maxMeters   /// This look  for houses with the minimum room quantity
      )

      /* (house) => house.rooms == rooms && house.meters >= minMeters && house.meters <= maxMeters */// This looks for houses with a specific room quantity
    
      showHouseCard(housesFilter)
  
  };
  
  
  searchButton.addEventListener("click", filterHouses); // filter houses when clicking button
  
  const deleteInput = () => {
    inputs.forEach((input) => (input.value = ""));
    showHouseCard(propertiesJSON);
  };
  
  erase.addEventListener("click", deleteInput) // delete input information and going back to previous houses