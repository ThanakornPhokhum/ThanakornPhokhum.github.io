var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function addDoneAfterClick(){
	var e = event.target;
	e.id = Math.random();
	var eventID = document.getElementById(e.id);
	eventID.classList.toggle('done');
}

function removeThis(){
	var e = event.target;
	var thisbtn = document.getElementById(e.id);
	thisbtn.parentElement.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	var btnD = document.createElement("button");
	var text = document.createTextNode("Delete");
	btnD.appendChild(text);
	var removebtn = "btn" + Math.floor(Math.random());
	btnD.setAttribute('id', removebtn);
	btnD.setAttribute('onclick', 'removeThis()');
	li.appendChild(btnD);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (i = 0; i < li.length; i++){
	li[i].setAttribute('onclick', 'addDoneAfterClick()');
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);