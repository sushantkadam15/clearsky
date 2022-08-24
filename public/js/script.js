// Loading city name from json file
const cities = [];
fetch("data/city-data.json")
  .then((response) => response.json())
  .then((resData) => {
    for (let i of resData) {
      cities.push(`${i.Name}, ${i.Country} `);
    }
  })
  .catch((e) => console.log("ERROR", e));

//********** Autocomplete function for city search **********//

const searchBox = document.querySelector("#search");
function autocomplete(userInput, cities) {
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  userInput.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value; // String value for the autocomplete stored here
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < cities.length; i++) {
      if (cities[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("div");
        b.innerHTML =
          "<strong>" + cities[i].substr(0, val.length) + "</strong>";
        b.innerHTML += cities[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + cities[i] + "'>";
        b.addEventListener("click", function (e) {
          userInput.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  userInput.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
    
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != userInput) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(searchBox, cities);
