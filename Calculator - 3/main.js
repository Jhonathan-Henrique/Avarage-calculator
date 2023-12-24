const form = document.getElementById('form-calculadora')
const aprovado = `<img src="./images/aprovado.png" alt="Emoji animado" />`
const reprovado = `<img src="./images/reprovado.png" alt="Emoji animado" />`
const atividades = []
const notas = []


let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()

})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    atividades.push(nomeAtividade.value)
    notas.push(parseFloat(notaAtividade.value))

    let linha = `<tr>`
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value > 7 ? aprovado : reprovado}`
    linha += `</tr>`

    linhas += linha



    notaAtividade.value = ' '
    nomeAtividade.value = ' '
}

function atualizaTabela() {
    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas
}

function atualizaMediaFinal () {
    let somaDasNotas = 0

    console.log(atividades)
    console.log(notas)
}