const form = document.getElementById('form-calculadora')
const aprovado = `<img src="./images/aprovado.png" alt="Emoji animado" />`
const reprovado = `<img src="./images/reprovado.png" alt="Emoji animado" />`
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    let linha = `<tr>`
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value > 7 ? aprovado : reprovado}`
    linha += `</tr>`

    linhas += linha

    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas
 
    notaAtividade.value = ' '
    nomeAtividade.value = ' '
})