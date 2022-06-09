import Link from "next/link";
import Layout from "../components/Layout";

export default function Jsx() {
    //Código escrito em JavaScript
    const a = 4;
    const b = 3;
    console.log(a * b);

    const objeto = {nome: "Antônio Claudio", idade: 19};

    const frase = <h5>Curso de Next.js</h5>;

    function frase02() {
        return <h6>{"Hello World!".toUpperCase()}</h6>
    }

    return (
        <Layout titulo="Exemplo de JSX">
            <h1>JSX é um conceito central!</h1>
            <h2>{a * b}</h2>
            <h3>{Math.random()}</h3>
            <h4>{"Muito legal".toUpperCase()}</h4>
            {frase}
            {frase02()}
            <p>
                {JSON.stringify({nome: "Antônio Claudio", idade: 19})};
            </p>
        </Layout>
    )
};