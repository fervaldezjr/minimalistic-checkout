let countries;

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    for(let i=0; i<countries.length; i++) {
        options += `<option value="${countries[i].cca3}">${countries[i].name}</option>`;
    }
    document.getElementById("countries").innerHTML = options;
}