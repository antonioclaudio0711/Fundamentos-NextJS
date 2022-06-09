import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0);

    //A função useState (React Hooks) possui como propriedades o seguinte par de elementos --> useState(var, function())
    // let numero = state[0];
    // let alterarNumero = state[1];

    function incrementar() {
        setNumero(numero + 1);
    }

    return(
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}