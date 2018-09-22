 var paciente = document.querySelectorAll('.paciente');

 var tabele = document.querySelector('#tabela-pacientes');

 tabele.addEventListener("dblclick", function(event){

   console.log(event.target.parentNode);
   event.target.parentNode.classList.add('fadeOut');
   setTimeout(function(){
       event.target.parentNode.remove(); 
   },1000);

 });

// paciente.forEach(function(paciente) {
//    paciente.addEventlistener('dblclick',function(){
//     this.remove();
//    });
// });