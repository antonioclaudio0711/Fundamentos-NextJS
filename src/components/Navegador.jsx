import Link from "next/link"
import styles from "../styles/Navegador.module.css"

export default function Navegador(propriedades) {
    return (
        <Link href={propriedades.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: propriedades.cor ?? "dodgerblue",
            }}>
            {propriedades.título}
            </div>
        </Link>
    )
}