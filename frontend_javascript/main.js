const formulario = document.getElementById('meuFormulario');
const mensagemDiv = document.getElementById('mensagem');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const campoA = parseInt(document.getElementById('campoA').value);
        const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        mensagemDiv.innerHTML = '<p>Formulário válido! Número B é maior que número A.</p>';
        formulario.reset(); // Opcional: limpar os campos após envio válido
    } else {
        mensagemDiv.innerHTML = '<p>Formulário inválido! Número B deve ser maior que número A.</p>';
    }
});
