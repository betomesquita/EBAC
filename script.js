function validar() {
    var numero1 = window.document.getElementById('campoA').value;
    var numero2 = window.document.getElementById('campoB').value;
    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    
    if (numero2 > numero1) {
        window.alert('O formulário é válido');
    }else {
        window.alert('Tente novamente');
    }
}