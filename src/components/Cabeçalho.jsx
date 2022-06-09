export default function Cabecalho(propriedade) {
    //As propriedades não podem apresentar valores modificados, sendo somente elementos de leitura
    return (
        <header>
            <h1>{propriedade.titulo}</h1>
        </header>
    );
}