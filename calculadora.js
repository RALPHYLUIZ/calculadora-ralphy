let temperatura ;
let escala = '';
let resultado;

function calculadora(){

    escala = document.querySelector('#slcescala').value;
    // temperatura = document.querySelector('#txttemperatura').value;

    if (escala == 'Celsius') {
        Celsius();
    }

    if (escala == 'Fahrenheit') {
        Fahrenheit();
    }
    
}

    function Fahrenheit(){
        temperatura = parseFloat(document.querySelector('#txttemperatura').value);        
        resultado = temperatura * 1.8 + 32
        document.querySelector('#resultado').innerHTML = resultado;
    }
    function Celsius(){
        temperatura = parseInt(document.querySelector('#txttemperatura').value);
        resultado = (temperatura - 32) / 1.8        
        document.querySelector('#resultado').innerHTML = resultado;
    }



//FUNÇÃO DE LIMPAR FURMULÁRIO
function limpar(){

    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    
}