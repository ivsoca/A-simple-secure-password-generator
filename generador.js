const inputTenDigits = document.getElementById('cantidadDigitos10');
const inputTwelveDigits = document.getElementById('cantidadStrings12');

const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


btn.addEventListener('click', function(){
    obtenerValor();
});


function obtenerValor(){    
    if(inputTenDigits.checked){
        const valor10 = parseInt(inputTenDigits.value);
        passGenerate(valor10);
    } else if (inputTwelveDigits.checked){
        const valor12 = parseInt(inputTwelveDigits.value);
        passGenerate(valor12);
    }
}


function passGenerate(length){
    let resultado = document.getElementById("salida");
    let result = "";
    for(let i = 0; i < length; i++) {
        result += alph.charAt(Math.floor(Math.random() * alph.length))
    }
    resultado.innerHTML = result;
}

// const progressBar = document.getElementById('progressBar');
// const progressValue  = document.getElementById('progressValue');

// const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// btn.addEventListener('click', updateProgressValue)

// function passGenerate(length){
//     let resultado = document.getElementById("salida");
//     let result = "";
//     for(let i = 0; i < length; i++) {
//         result += alph.charAt(Math.floor(Math.random() * alph.length))
//     }
//     resultado.innerHTML = result;
// }



// progressBar.addEventListener('input', updateProgressValue);

// function updateProgressValue() {
//   const value = progressBar.value;
//   progressValue.textContent = value;
//   passGenerate(value);
// }









