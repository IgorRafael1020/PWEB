//1
function Retangulo(x, y){
	var base = x;
	var altura = y;
	
	this.calArea = function(){
		return(base * altura);
	}
}

var objRetangulo = new Retangulo(5,10);
alert("Calcular área de Retângulo\nBase = 5 \nAltura = 10 \nÁrea = " + objRetangulo.calArea());


//2
function Conta(){
	var nomeCorrentista;
	var banco;
	var numeroDaConta;
	var saldo;
	
	this.getNomeCorrentista = function(){
		return nomeCorrentista;
	}
	
	this.setNomeCorrentista = function(value){
		nomeCorrentista = value
	}
	
	this.getBanco = function(){
		return banco;
	}
	
	this.setBanco = function(value){
		banco = value
	}
	
	this.getNumeroDaConta = function(){
		return numeroDaConta;
	}
	
	this.setNumeroDaConta = function(value){
		numeroDaConta = value
	}
	
	this.getSaldo = function(){
		return saldo;
	}
	
	this.setSaldo = function(value){
		saldo = value
	}
	
}

function Corrente(){
	var saldoEspecial;
	
	this.getSaldoEspecial = function(){
		return saldoEspecial;
	}
	
	this.setSaldoEspecial = function(value){
		saldoEspecial = value
	}
}

function Poupanca(){
	var juros;
	var dataVencimento
	
	this.getJuros = function(){
		return juros;
	}
	
	this.setJuros = function(value){
		juros = value
	}
	
	this.getDataVencimento = function(){
		return dataVencimento;
	}
	
	this.setDataVencimento = function(value){
		dataVencimento = value
	}
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var objCorrente = new Corrente();
var objPoupanca = new Poupanca();

objCorrente.setNomeCorrentista("Alan");
objCorrente.setBanco("Itaú");
objCorrente.setNumeroDaConta("70154-5");
objCorrente.setSaldo(2500);
objCorrente.setSaldoEspecial(2000);

alert("Conta Corrente \nNome do Correntista: " + objCorrente.getNomeCorrentista() + 
"\nBanco: " + objCorrente.getBanco() + 
"\nNúmero da Conta: " + objCorrente.getNumeroDaConta() + 
"\nSaldo: R$ " + objCorrente.getSaldo() + 
"\nSaldo Especial: R$ " + objCorrente.getSaldoEspecial());


objPoupanca.setNomeCorrentista("Lana");
objPoupanca.setBanco("Santander");
objPoupanca.setNumeroDaConta("27084483-2");
objPoupanca.setSaldo(1750.5);
objPoupanca.setJuros("0.5%");
objPoupanca.setDataVencimento("25/08/23");

alert("Conta Poupança \nNome do Correntista: " + objPoupanca.getNomeCorrentista() + 
"\nBanco: " + objPoupanca.getBanco() + 
"\nNúmero da Conta: " + objPoupanca.getNumeroDaConta() + 
"\nSaldo: R$ " + objPoupanca.getSaldo() + 
"\nJuros: "  + objPoupanca.getJuros() + 
"\nData de Vencimento: " + objPoupanca.getDataVencimento());