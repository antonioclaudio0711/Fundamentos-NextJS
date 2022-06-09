import Cabecalho from "../components/Cabeçalho";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Exemplo() {
    return ( //Para se instanciar elementos em jsx pode-se usar somente <> </>, sem nenhum componente HTML
        <Layout titulo="Exemplo de uso de propriedades">
            <Cabecalho titulo="Next.js e React"/>
            <Cabecalho titulo="Aprendendo Next.js na prática"/>
        </Layout>
    );
}