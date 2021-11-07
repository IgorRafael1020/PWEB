function validar() {
	var aux = 1;
	if(formulario.name.value.length < 10){
		alert("Nome não pode ter menos de 10 caracteres");
		aux = 0;
	}
	if(formulario.email.value.indexOf('@') < 0 || formulario.email.value.indexOf('.') < 0){
		alert("Email deve conter os caracteres '@' e '.'");
		aux = 0;
	}
	if(formulario.msg.value.length < 20){
		alert("Comentário deve ter pelo menos 20 caracteres");
		aux = 0;
	}
	if(formulario.sim.checked == false && formulario.nao.checked == false){
		alert("Pesquisa Obrigatória");
		aux = 0;
	}
	else{
		if(formulario.sim.checked == true){
			alert("Volte sempre à está página!");
		}
		else{
			alert("Que bom que você voltou a visitar esta página!");
		}
	}
	if(aux){
		return true;
	}else{
		return false;
	}
}