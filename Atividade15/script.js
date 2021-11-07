function myFunction() {
	if(confirm("Deseja abrir a página do curso de " + mySelect.options[mySelect.selectedIndex].text + " em outra janela?")){
		if(mySelect.value == "ads"){
			window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp",
			"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=300");
		}
		if(mySelect.value == "fm"){
			window.open("http://www.fatecsorocaba.edu.br/curso_fm.asp",
			"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=300");
		}
		if(mySelect.value == "log"){
			window.open("http://www.fatecsorocaba.edu.br/curso_log.asp",
			"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=300");
		}
		if(mySelect.value == "pol"){
			window.open("http://www.fatecsorocaba.edu.br/curso_pol.asp",
			"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=300");
		}
	}
}