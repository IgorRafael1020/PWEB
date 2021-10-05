var idade, sexo, opiniao;
var qtdPessoas = 3;
var aux = 0;
var medIdade = 0;
var maisVelho = 0;
var maisNovo = Infinity;
var qtdPessimo = 0;
var porcentagem = 0;
var homem = 0;
var mulher = 0;

do{

	idade = parseInt(prompt("Pessoa " + (aux+1) + "\nIdade: "));
	sexo = prompt("Pessoa " + (aux+1) + "\nSexo (m/f): ");
	opiniao = parseInt(prompt("Pessoa " + (aux+1) + "\nOpinião:  \nÓtimo = 4 \nBom = 3 \nRegular = 2 \nPéssimo = 1"));
	
	medIdade+=idade;
	
	if(idade > maisVelho){
		maisVelho = idade;
	}
	
	if(idade < maisNovo){
		maisNovo = idade;
	}
	
	if(opiniao == 1){
		qtdPessimo++;
	}
	
	if(opiniao == 4 || opiniao == 3){
		porcentagem++;
	}
	
	if(sexo == 'm'){
		homem++;
	}
	
	if(sexo == 'f'){
		mulher++;
	}
	
	aux++;
	
}while(aux<qtdPessoas);

alert("Média das idades = " + (medIdade/= qtdPessoas) + 
"\nIdade da Pessoa mais velha = " + maisVelho + 
"\nIdade da Pessoa mais nova = " + maisNovo + 
"\nQuantidade de pessoas que responderam Péssimo = " + qtdPessimo + 
"\nPorcentagem de pessoas que responderam Ótimo e Bom = " + ((100*porcentagem)/qtdPessoas).toFixed(2) + "%" + 
"\nQuantidade de mulheres que responderam a pesquisa = " + mulher + 
"\nQuantidade de homens que responderam a pesquisa = " + homem);





