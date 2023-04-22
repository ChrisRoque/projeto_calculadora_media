const form = document.getElementById("form-atividade");
const emojiAprovado = `<img src="./images/aprovado.png" alt="emoji-feliz" />`;
const emojiReprovado = `<img src="./images/reprovado.png" alt"emoji-triste" />`;
const atividade = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const apanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima:"));
let listas = "";

    form.addEventListener("submit", function(e){
        e.preventDefault()

    preencheLista();
    validaLista();
    calculaMedia();
    atualizaMedia();   
});

function preencheLista(){
    const inputAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividade.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value}, já foi inserida`);
    } else{
        atividade.push(inputAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value)); 

    let lista = `<tr>`;
    lista += `<td>${inputAtividade.value}</td>`;
    lista += `<td>${inputNotaAtividade.value}</td>`;
    lista += `<td>${inputNotaAtividade.value >= notaMinima ? emojiAprovado : emojiReprovado}</td>`;
    lista += `</tr>`;

    listas += lista;
    }

    

    inputAtividade.value = "";
    inputNotaAtividade.value = "";
};

function validaLista(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = listas;
};

function calculaMedia(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    };

    return somaNotas / notas.length;
    
};

function atualizaMedia(){
    const mediaFinal = calculaMedia();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : apanReprovado;
};  