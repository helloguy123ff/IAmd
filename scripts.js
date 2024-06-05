async function obterRespostaAutomatica(pergunta) {
    // URL da API externa
    const apiUrl = 'https://exemplo.com/responder?pergunta=' + encodeURIComponent(pergunta);

    try {
        // Fazendo uma solicitação HTTP GET para a API externa
        const resposta = await fetch(apiUrl);
        
        // Verificando se a solicitação foi bem-sucedida
        if (resposta.ok) {
            // Convertendo a resposta para o formato JSON
            const dados = await resposta.json();
            
            // Retornando a resposta obtida da API
            return dados.resposta;
        } else {
            throw new Error('Erro ao obter resposta da API: ' + resposta.status);
        }
    } catch (erro) {
        console.error('Erro ao obter resposta da API:', erro);
        // Em caso de erro, retornar uma mensagem genérica
        return "Desculpe, ocorreu um erro ao processar sua pergunta.";
    }
}
