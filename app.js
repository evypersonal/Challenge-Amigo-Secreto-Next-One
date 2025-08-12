// criando uma array para armazenar os nomes
let nomes = [];

// função para adicionar nomes à array
function adicionarAmigo(){
    let nomesInput = document.querySelector("#amigo");
    // Verificação se o input está vazio
    if(nomesInput.value === ""){
        alert("Por favor, insira um nome válido!");
        return;
    // Verificação se o nome já foi adicionado
    } else if(nomes.includes(nomesInput.value)){
        alert("Este nome já foi adicionado!");
        return;
    // Adicionando o nome à array
    } else {
        nomes.push(nomesInput.value);
        // Impressão dos nomes na tela
        document.querySelector("#listaAmigos").innerHTML = nomes.join("<br>");
    }
}

// função para sortear um nome da array
function sortearAmigo(){
    // Verificação se há pelo menos 2 nomes na array
    if(!Array.isArray(nomes) || nomes.length < 2){
        alert("Adicione pelo menos 2 nomes antes de sortear!");
        return;
    }else{
        document.querySelector("#listaAmigos").innerHTML = "";
        let nomeSorteado = Math.floor(Math.random() * nomes.length);
        // Mudando a cor da impressão do nome sorteado
        document.querySelector("#listaAmigos").style.color = "green";
        // Impressão do nome sorteado na tela
        document.querySelector("#listaAmigos").innerHTML = "O amigo sorteado é: " + nomes[nomeSorteado];
        // chamando a função para trocar o botão
        trocarBotao();
    }
}

// função para trocar botao
function trocarBotao() {
    document.querySelector("#button-draw").classList.add("display-none");
    document.querySelector("#button-limpar").classList.remove("display-none");
}

// evento para limpar a lista e destrocar os botões
document.querySelector("#button-limpar").addEventListener("click", function() {
    nomes = [];
    document.querySelector("#amigo").value = "";
    document.querySelector("#listaAmigos").style.color = "black";
    document.querySelector("#listaAmigos").innerHTML = "";
    document.querySelector("#button-draw").classList.remove("display-none");
    document.querySelector("#button-limpar").classList.add("display-none");
});