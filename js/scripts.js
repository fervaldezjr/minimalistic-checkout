// API Rest Countries

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

// Validación de números de tarjeta

const cardInfo = document.querySelector('#cardInformation');

cardInfo.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	cardInfo.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	cardInfo.textContent = valorInput;

	if(valorInput == ''){
		cardInfo.textContent = '#### #### #### ####';

	}
});