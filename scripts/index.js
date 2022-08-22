window.onload = function(){
	// Criando nosso objeto de questões

var id = 0;

const Quenstions = [{
	id:0,
	q: "Qual o nome do gato que nasceu?",
	a: [{text: "Luiza Jr", isCorrect: false},
		{text: "Maria", isCorrect: false},
		{text: "Jubileu", isCorrect: true},
		{text: "NDA", isCorrect: false}]

},

{

	id:1,
	q: "Luiza é uma boa mãe?",
	a: [{text: "Nao sei", isCorrect: false},
		{text: "Lógico", isCorrect: true},
		{text: "A vida dira", isCorrect: false},
		{text: "Ninguém sabe", isCorrect: false}]

},

{

	id:2,
	q: "Sobre a pergunta 2, tem certeza?",
	a: [{text: "Nao sei", isCorrect: false},
		{text: "Provavelmente, o site está bugado", isCorrect: false},
		{text: "Tenho certeza", isCorrect: false},
		{text: "Luiza é uma ótima pessoa", isCorrect: true}]

},
{
	id:3,
	q: "Luiza realmente ama você?",
	a: [{text: "Tenho total convicão", isCorrect: true},
		{text: "Não", isCorrect: false},
		{text: "Falsa ela", isCorrect: false},
		{text: "NDA", isCorrect: false}]
}



]//Fim do objeto

var start = true;


	function iterate(id){

		var verificar = document.querySelector('.verificar');

		var resposta = document.querySelector('.final');

		var visor = document.querySelector('.visor');

		visor.innerText = Quenstions[id].q;

		var op1 = document.querySelector('.op1');
		var op2 = document.querySelector('.op2');
		var op3 = document.querySelector('.op3');
		var op4 = document.querySelector('.op4');

		op1.innerText = Quenstions[id].a[0].text;
		op2.innerText = Quenstions[id].a[1].text;
		op3.innerText = Quenstions[id].a[2].text;
		op4.innerText = Quenstions[id].a[3].text;

		op1.value = Quenstions[id].a[0].isCorrect;
		op2.value = Quenstions[id].a[1].isCorrect;
		op3.value = Quenstions[id].a[2].isCorrect;
		op4.value = Quenstions[id].a[3].isCorrect;

		var select = "";

		op1.addEventListener('click', function(){
				op1.style.backgroundColor = "rgb(255 132 129)";

				op4.style.backgroundColor = "#ff00a5";
				op2.style.backgroundColor = "#ff00a5";
				op3.style.backgroundColor = "#ff00a5";


			 
		       
		        selected = op1.value;


	
		       
		});

		op2.addEventListener('click', function(){
				op1.style.backgroundColor = "#ff00a5";
				op4.style.backgroundColor = "#ff00a5";
				op3.style.backgroundColor = "#ff00a5";

		
		        op2.style.backgroundColor = "rgb(255 132 129)";
		       
		        selected = op2.value;


	
		       
		});

		op3.addEventListener('click', function(){
				op1.style.backgroundColor = "#ff00a5";
				op2.style.backgroundColor = "#ff00a5";
				op4.style.backgroundColor = "#ff00a5";

			  
		        op3.style.backgroundColor = "rgb(255 132 129)";
		       
		        selected = op3.value;


		
		       
		});

		op4.addEventListener('click', function(){
			  	
				op1.style.backgroundColor = "#ff00a5";
				op2.style.backgroundColor = "#ff00a5";
				op3.style.backgroundColor = "#ff00a5";

		        op4.style.backgroundColor = "rgb(255 132 129)";
		        selected = op4.value;

		       
		
		       
		});

		verificar.addEventListener('click', function(){

			if (selected == 'true') {
				resposta.innerText = "Luiza está orgulhosa";
			}else{
				resposta.innerText = "Luiza não merece conhecer alguém como você";
			}

		});

	}


	//Funcionamento do botao e da variavel start

	if (start) {
   		 iterate(id);
	}

	var continuar = document.querySelector('.continuar');

	continuar.onclick = function(){
	
		start = false;

		id++;

		iterate(id);

		document.querySelector('.op1').style.backgroundColor = "#ff00a5";
		document.querySelector('.op2').style.backgroundColor = "#ff00a5";
		document.querySelector('.op3').style.backgroundColor = "#ff00a5";
		document.querySelector('.op4').style.backgroundColor = "#ff00a5";

		document.querySelector('.final').innerText = "Sua resposta virá aqui";
	}
}