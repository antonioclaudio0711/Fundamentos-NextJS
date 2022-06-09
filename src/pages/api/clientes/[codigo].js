export default function handler(requisicao, resposta) {
    const codigo = requisicao.query.codigo; 

    resposta.status(200).json({
        id: codigo,
        nome: `Antônio Claudio ${codigo}`,
        email: "acf07112002@gmail.com"
    })
}