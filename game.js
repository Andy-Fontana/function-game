/*MAP FUNCTION*/

const rooms = document.getElementsByClassName('room');

function recorrerArray (propiedad){
}

const dialogos = {
	nombrePeronaje: 'Voz misteriosa',
	dialogo: 'Hello stranger, welcome to my mansion.'
}


const mostrarDialogo = document.getElementById('display-dialogue-icon'); 
const cajaDeDialogo = document.getElementById('cajaDeDialogue');
const notificationCircle = document.getElementById('notification-circle');
let dialogueBox = null;

function displayDialogue(){
	
	
	if (dialogueBox === 'undefined' || dialogueBox === null){
		
		notificationCircle.style.display = 'none';
		dialogueBox = document.createElement('div');
		currentDialogue = document.createElement('p');
		cajaDeDialogo.appendChild(dialogueBox);
		dialogueBox.appendChild(currentDialogue);
		dialogueBox.setAttribute("id","dialogue-box" );
		currentDialogue.setAttribute("id", "current-dialogue" )
		currentDialogue.textContent = dialogos.dialogo;
	}
}

//mostrarDialogo.addEventListener('click', () => {displayDialogue ()});


var h1 =  document.getElementById('simplePassword');
var h2 =  document.getElementById('simpleMessage');
var validation = document.getElementById('validation');

function eraseText(theText){
	theText.textContent = " ";
}

function checkPassword(inputValue){
	
	if (validation.value == h1.textContent) {
		h2.textContent = "You May Pass";
		setTimeout(eraseText, 1000, h2);
	} else {
		h2.textContent = "Try Again";
		setTimeout(eraseText, 1000, h2);
	}
}



