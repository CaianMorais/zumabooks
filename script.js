async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPJSON = await consultaCEP.json();
        if (consultaCEPJSON.erro) {
            throw Error('CEP inexistente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCEPJSON.localidade;
        logradouro.value = consultaCEPJSON.logradouro;
        estado.value = consultaCEPJSON.uf;
        bairro.value = consultaCEPJSON.bairro;
        console.log(consultaCEPJSON);
        return consultaCEPJSON;
    } catch (erro){
        mensagemErro.innerHTML = `<p> CEP inexistente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
