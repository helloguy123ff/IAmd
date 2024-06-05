async function obterRespostaAutomatica(pergunta) {
    // Simulação de uma solicitação assíncrona para um serviço externo
    const respostaDoServicoExterno = await simularSolicitacaoAssincrona(pergunta);

    return respostaDoServicoExterno;
}

function simularSolicitacaoAssincrona(pergunta) {
    return new Promise(resolve => {
        // Simulando um atraso de 1 segundo para simular uma solicitação assíncrona
        setTimeout(() => {
            // Simulando uma resposta do serviço externo
            const resposta = "Isso é uma resposta do serviço externo para: " + pergunta;
            resolve(resposta);
        }, 1000);
    });
}

// Exemplo de uso
obterRespostaAutomatica("Qual é a sua cor favorita?").then(resposta => {
    console.log(resposta);
});
