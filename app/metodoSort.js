let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPreco.addEventListener('click', ordenarLivrosPreco)

function ordenarLivrosPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}