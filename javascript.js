/*  Variables que utilizaremos para obtener el peso del usuario */ 

let planetaTierra = 9.8;
let marte = 3.7;
let jupiter = 24.8;
let resultado;

/*  Llamada a cada elemento que ocuparemos  */ 

let myForm = document.getElementById('myForm');
let pesoUsuario = document.getElementById('pesoUsuario');
let contenedorPlanetas = document.getElementById('contenedorPlanetas');
let seleccionarPlanetas = document.getElementById('seleccionarPlanetas');

/*  Llamar al evento del formulario */ 

myForm.addEventListener('submit', function(evt){

  evt.preventDefault(); 
  let valorOption = seleccionarPlanetas.selectedIndex;
  pesoUsuario.onfocus =  function() {cambiarValorH2()};  

  switch (valorOption) {
    case 0: 
      resultado = (pesoUsuario.value * planetaTierra).toFixed(2);
      contenedorPlanetas.firstElementChild.children[0].innerText = resultado + 'Kg';
      break;
    case 1:
      resultado = (pesoUsuario.value * marte).toFixed(2);
      contenedorPlanetas.children[1].children[0].innerText = resultado + 'Kg';
      break;
    case 2: 
      resultado = (pesoUsuario.value * jupiter).toFixed(2);
      contenedorPlanetas.lastElementChild.children[0].innerText = resultado + 'Kg';
      break;
  }

  myForm.reset();

  function cambiarValorH2(){
    contenedorPlanetas.firstElementChild.children[0].innerText = 'Planeta Tierra';
    contenedorPlanetas.children[1].children[0].innerText = 'Marte';
    contenedorPlanetas.lastElementChild.children[0].innerText = 'Júpiter';
  }
});


