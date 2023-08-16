const searchBox = document.querySelector("#search");
const autocompleteList = document.createElement("div");
autocompleteList.className = "autocomplete-items";
searchBox.parentNode.appendChild(autocompleteList);

function autocomplete(userInput, cities) {
  let currentFocus;

  // Event listener for input changes
  userInput.addEventListener("input", function () {
    const val = this.value.trim().toUpperCase();
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    const matchingCities = cities.filter((city) =>
      city.toUpperCase().startsWith(val)
    );
    const numResults = Math.min(matchingCities.length, 5);

    const { bottom, left, offsetWidth } = this.getBoundingClientRect();
    Object.assign(autocompleteList.style, {
      top: `${bottom}px`,
      left: `${left}px`,
      width: `${offsetWidth}px`,
      zIndex: "10",
    });
    autocompleteList.innerHTML = "";

    // Generate autocomplete items
    for (let i = 0; i < numResults; i++) {
      const autocompleteItem = document.createElement("div");
      autocompleteItem.innerHTML = `<strong>${matchingCities[i].substr(0, val.length)}</strong>`;
      autocompleteItem.innerHTML += matchingCities[i].substr(val.length);
      autocompleteItem.innerHTML += `<input type='hidden' value='${matchingCities[i]}'>`;
      autocompleteItem.addEventListener("click", function () {
        userInput.value = this.getElementsByTagName("input")[0].value;
        closeAllLists();

        // Automatically submit the form when an item is selected
        userInput.form.submit(); // This line submits the form
        
      });
      autocompleteList.appendChild(autocompleteItem);
    }

    autocompleteList.style.display = "block";
  });

  // Event listener for keyboard inputs
  userInput.addEventListener("keydown", function (e) {
    const autocompleteItems = autocompleteList.getElementsByTagName("div");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(autocompleteItems);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(autocompleteItems);
    } else if (e.keyCode === 13 && currentFocus > -1 && autocompleteItems) {
      autocompleteItems[currentFocus].click();
    }
  });

  // Add 'autocomplete-active' class to the selected item
  function addActive(autocompleteItems) {
    if (!autocompleteItems) {
      return false;
    }
    removeActive(autocompleteItems);
    currentFocus = (currentFocus + autocompleteItems.length) % autocompleteItems.length;
    autocompleteItems[currentFocus].classList.add("autocomplete-active");
  }

  // Remove 'autocomplete-active' class from all items
  function removeActive(autocompleteItems) {
    for (let i = 0; i < autocompleteItems.length; i++) {
      autocompleteItems[i].classList.remove("autocomplete-active");
    }
  }

  // Close autocomplete list
  function closeAllLists() {
    while (autocompleteList.firstChild) {
      autocompleteList.firstChild.remove();
    }
    autocompleteList.style.display = "none";
  }

  // Event listener to close autocomplete list on document click
  document.addEventListener("click", closeAllLists);
}

const cities = [];

// Fetch city names from JSON file
fetch("data/world-cities.json")
  .then((response) => response.json())
  .then((resData) => {
    cities.push(...resData.map(i => `${i.name}, ${i.country.substr(0, 2).toUpperCase()}`));
  })
  .catch((e) => console.log("ERROR", e));

// Initialize autocomplete
autocomplete(searchBox, cities);
