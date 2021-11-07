function maiusculo(obj) {
	var texto = document.getElementById('texto').value;
	document.getElementById('texto').value = texto.toUpperCase();
	var checkbox = document.getElementById('minusculo');
	checkbox.checked = false;
}

function minusculo(obj) {
	var texto = document.getElementById('texto').value;
	document.getElementById('texto').value = texto.toLowerCase();
	var checkbox = document.getElementById('maiusculo');
	checkbox.checked = false;
}