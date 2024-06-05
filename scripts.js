function enviarMensagem() {
    var userInput = document.getElementById("userInput");
    var mensagem = userInput.value;
    if (mensagem.trim() === "") return;
    
    adicionarMensagem("Você", mensagem);
    userInput.value = "";
    
    // Simulando resposta do ChatBot após 1 segundo
    setTimeout(function() {
        var resposta = obterRespostaAutomatica();
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

function obterRespostaAutomatica() {
    // Simplesmente retornando uma resposta fixa para este exemplo
    return "Olá! Como posso ajudar você?";
}
