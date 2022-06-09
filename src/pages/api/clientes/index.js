export default function cliente(requisicao, resposta) {
    
    if (requisicao.method === "GET") {
        handleGet(requisicao, resposta);
    } else {
        resposta.status(405).send();
    }
}

function handleGet(requisicao, resposta) {
    resposta.status(200).json({
        id: 1,
        nome: "Antônio Claudio Ferreira Filho",
        idade: 19,
        email: "acf07112002@gmail.com",
    })
}