	// Instanciando os pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        console.log(i)

    // varialveis referente ao indice do paciente
        var paciente = pacientes[i];


        // variaveis elemento td
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");
        var tdImc = paciente.querySelector(".info-imc");

        // variaveis dados da tabela 
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;
        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhvalido = true;
        var alturaEhvalido = true;

        // VALIDAÇAO ALTURA E PESO
        if (peso >= 200 || peso <= 0) {
            console.log('peso invalido')
            pesoEhvalido = false;
            tdImc.textContent = "peso invalido";
            paciente.classList.add("paciente-invalido")
        }
        if (altura >= 3.00 || altura <= 0) {
            console.log('altura invalida')
            alturaEhvalido = false;
            tdImc.textContent = "altura invalido";
            paciente.style.color = 'green';
        }

        // calculo imc
        if (pesoEhvalido && alturaEhvalido) {
           tdImc.textContent = calculaImc(peso, altura);
        }
    }
  
     function calculaImc(peso ,altura){
         var imc = 0;
         imc = peso / (altura*altura);
         return imc.toFixed(2);
     }
     
     