const form = document.getElementById('form-atividade')
const aprovado = '<img src="./images/aprovado.png" alt="emoji animado"/>'
const reprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>'
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputValorNota = document.getElementById('valor-nota')

    let linha = `<tr>`
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputValorNota.value}</td>`
    linha += `<td>${inputValorNota.value >= 7 ? aprovado : reprovado}</td>`
    linha += `</tr>`

    linhas += linha

    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNomeAtividade.value = ''
    inputValorNota.value = ''
})