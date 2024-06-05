async function obterRespostaAutomatica(pergunta) {
    // URL da API externa de previsão do tempo
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=' + encodeURIComponent(pergunta);

    try {
        // Fazendo uma solicitação HTTP GET para a API externa
        const resposta = await fetch(apiUrl);
        
        // Verificando se a solicitação foi bem-sucedida
        if (resposta.ok) {
            // Convertendo a resposta para o formato JSON
            const dados = await resposta.json();
            
            // Extraindo informações relevantes da resposta
            const cidade = dados.location.name;
            const temperatura = dados.current.temp_c;
            const condicao = dados.current.condition.text;
            
            // Construindo a resposta do chatbot com base nas informações da previsão do tempo
            const respostaChatbot = `A temperatura em ${cidade} é de ${temperatura}°C e está ${condicao}.`;
            
            return respostaChatbot;
        } else {
            throw new Error('Erro ao obter resposta da API: ' + resposta.status);
        }
    } catch (erro) {
        console.error('Erro ao obter resposta da API:', erro);
        // Em caso de erro, retornar uma mensagem genérica
        return "Desculpe, ocorreu um erro ao obter informações do clima.";
    }
}

// Exemplo de uso
obterRespostaAutomatica('São Paulo').then(resposta => {
    console.log(resposta);
});
