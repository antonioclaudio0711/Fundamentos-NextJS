import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState({})

    async function obterCliente() {
        const resposta = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resposta.json()
        setCliente(dados)


        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        // .then(resposta => resposta.json())
        // .then(dados => setCliente(dados))
    }

    return(
        <Layout titulo="Integração com a API">
            <div>
                <div>
                    <input type="number" value={codigo} 
                        onChange={e => setCodigo(e.target.value)}/>
                    <button onClick={obterCliente}>Obter cliente</button>
                </div>
                <ul>
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>Email: {cliente.email}</li>
                </ul>
            </div>
        </Layout>
    )
}