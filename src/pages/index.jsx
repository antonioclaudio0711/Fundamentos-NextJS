import Link from "next/link";
import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style= {{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            flexWrap:"wrap",
        }}>
            <Navegador título="Estiloso" destino="/estiloso" />
            <Navegador título="Exemplo de uso de propriedades" destino="/exemplo" cor="darkviolet"/>
            <Navegador título="Estudo de JSX" destino="/jsx" cor="crimson"/>
            <Navegador título="Exemplo de navegação" destino="/navegacao" cor="#ae6337"/>
            <Navegador título="Exemplo de navegação dinâmica" destino="/cliente/GO-01/123" cor="blue"/>
            <Navegador título="Componente com estado" destino="/estado" cor="#8c2242"/>
            <Navegador título="Integração com API" destino="/integracao_1" cor="orange"/>
            <Navegador título="Conteúdo estático" destino="/estatico" cor="purple"/>
        </div>
    );
}