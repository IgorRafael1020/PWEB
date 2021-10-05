function maior(){
	var num1 = document.numeros.num1.value;
	var num2 = document.numeros.num2.value;
	var num3 = document.numeros.num3.value;
	
	if(num1>num2){
		if(num1>num3){
			alert("O maior número é " + num1);
		}else{
			alert("O maior número é " + num3);
		}
	}else{
		if(num2>num3){
			alert("O maior número é " + num2);
		}else{
			alert("O maior número é " + num3);
		}
	}
}

function ordem(){
	var num1 = document.numeros.num1.value;
	var num2 = document.numeros.num2.value;
	var num3 = document.numeros.num3.value;
	
	var lista = [num1, num2, num3];
	
	lista.sort();
	
	alert("Valores em Ordem Crescente\n" + lista.join([separador = ", "]));
}


