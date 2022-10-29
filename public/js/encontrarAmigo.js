window.onload = function()
{
	drawList();
};

var regalo = document.getElementsByClassName('option')


let arrayRegalo = []

for (var i = regalo.length - 1; i >= 0; i--) {
	let x = regalo[i].innerText
	arrayRegalo.push(x)
}



var recibir = arrayRegalo.concat();
var personaEnvuelta = document.getElementById('personaEnvuelta');
var persona = document.getElementById('persona');
var elegido = document.getElementById('elegido');
var resultado = document.getElementById('resultado');
var cerrado = document.getElementById('cerrado');
console.log(resultado);




function drawList()
{	
	persona.innerHTML = '<option value="">¿Cual es tu nombre?  </option>';
	for (var i = arrayRegalo.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = arrayRegalo[i]
		persona.appendChild(option);
	}
}

function selectPerson(person) 
{
	var name = arrayRegalo[person];
	var nameIndex = recibir.indexOf(name);
	
	if(nameIndex >= 0) 
	{
		recibir.splice(nameIndex, 1);

	}
	var recipient = Math.floor((Math.random() * recibir.length));
	var recipientName = recibir[recipient];
	
	recibir.splice(recipient, 1);
	arrayRegalo.splice(person, 1);
	

	if(nameIndex >= 0)
	{
		recibir.push(name);
	}
	resultado.innerHTML = "<h2>" + name + ", Tu amigo secreto es... " + recipientName + "!</h2>";
	cerrado.innerHTML = "Okay. Destruir este mensaje.";

	if(arrayRegalo.length > -1)
	{
		drawList();
	}
}

elegido.onclick = function()
{
	if(persona.value)
	{
		selectPerson(persona.value);
	}
};

cerrado.onclick = function()
{
	resultado.innerHTML = "";
	cerrado.innerHTML = "";
  if(arrayRegalo.length == 0){
 personaEnvuelta.parentNode.removeChild(personaEnvuelta);
		elegido.parentNode.removeChild(elegido);
		resultado.innerHTML = "<h2>Amigo secreto completado!</h2>";
		cerrado.innerHTML = "";
	}
};
