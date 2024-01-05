const form = document.getElementById('form-formulario')
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando">`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji celebrando">`
let linhas = ''
const atividades = [];
const notas = [];

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
    
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = `<tr>`
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}`
    linha += `</tr>`

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    

    console.log(media)
   
}

function calculaMediaFinal () {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}