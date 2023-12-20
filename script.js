function clicar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var saida = document.getElementById('saida');

    var numeroInicio = parseInt(inicio.value);
    var numeroFim = parseInt(fim.value);
    var numeroPasso = parseInt(passo.value);

    if (numeroInicio && numeroFim && numeroPasso) {
        saida.innerHTML = ''; 

        if (numeroPasso > 0) {
            var numerosSomados = '';

            for (var i = numeroInicio; i <= numeroFim; i += numeroPasso) {
                numerosSomados += i + ', ';
            }

            numerosSomados = numerosSomados.slice(0, -2);

            saida.innerHTML = `Os números somados são: ${numerosSomados}`;
        } else {
            saida.innerHTML = 'O passo precisa ser um número positivo.';
        }
    } else {
        saida.innerHTML = 'Por favor, preencha todos os campos com números.';
    }
}
var saida = document.getElementById('saida');
saida.style.marginLeft = '10px'; 
document.getElementById('botao').onclick = clicar;
