function enviarMensagem() {
    var userInput = document.getElementById("userInput");
    var mensagem = userInput.value;
    if (mensagem.trim() === "") return;
    
    adicionarMensagem("Você", mensagem);
    userInput.value = "";
    
    // Simulando resposta do ChatBot após 1 segundo
    setTimeout(function() {
        var resposta = obterRespostaAutomatica(mensagem);
        adicionarMensagem("ChatBot", resposta);
    }, 1000);
}

function adicionarMensagem(usuario, mensagem) {
    var chatBox = document.getElementById("chatBox");
    var div = document.createElement("div");
    div.innerHTML = "<strong>" + usuario + ":</strong> " + mensagem;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function obterRespostaAutomatica(pergunta) {
    // Lista de pares de perguntas e respostas
    var pares = [
        { pergunta: "Olá", resposta: "Olá! Como posso ajudar?" },
        { pergunta: "Qual é o seu nome?", resposta: "Meu nome é ChatBot." },
        { pergunta: "Como você está?", resposta: "Estou bem, obrigado por perguntar!" },
        // Adicione mais pares de pergunta e resposta conforme necessário
        { pergunta: "Qual é a sua cor favorita?", resposta: "Eu não tenho 

