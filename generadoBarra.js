//variables de la barra

const progressBar = document.getElementById('progressBar');
const progressValue  = document.getElementById('progressValue');
const inputNumber = document.getElementById('inputNumber');

const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

let resultado = document.getElementById("salida");

btn.addEventListener('click', updateProgressValue);


progressBar.addEventListener('input', updateProgressValue);

//

progressBar.addEventListener('input', function(){
  inputNumber.value = progressBar.value;
});

inputNumber.addEventListener('input', function(){
  if(inputNumber.value >= parseInt(progressBar.min) && inputNumber.value <= parseInt(progressBar.max)){
  progressBar.value = inputNumber.value;
  }
});

//Esta funcion hace la logica de darte un string con letras simbolos y numeros random

function passGenerate(length){
    let result = "";
    for(let i = 0; i < length; i++) {
        result += alph.charAt(Math.floor(Math.random() * alph.length))
    }
    let resu = resultado.value = result;
    
};

//Esta funcion es la de la barra. Esta llama a la funcion passGenerate para hace toda la logica de esta

function updateProgressValue() {
  const value = progressBar.value;
  progressValue.textContent = value;
  passGenerate(value);
};

function copyPassword(){
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  document.execCommand('copy');

  message.innerHTML = "Copiado!"
}
