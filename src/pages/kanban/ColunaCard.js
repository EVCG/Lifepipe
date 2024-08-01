import styles from './kanban.module.css'

export default function ColunaCard() {
    return (
        <div className={styles.colunacards}>
            <Coluna titulo='Análise de viabilidade' classe='coluna-viabilidade' />
            <Coluna titulo='Elaboração de Custos' classe='coluna-custos' />
            <Coluna titulo='Aguardando o Pregão' classe='coluna-pregão' />
            <Coluna titulo='Pregões Encerrados' classe='coluna-encerrados' />
            <Coluna titulo='Pregões ganhos' classe='coluna-ganhos' />

        </div>
    )
}

function Coluna(props) {
    console.log(props)

    return (
        <div className={styles.conteudo}>
            <div className={`${styles.coluna} ${styles[props.classe]}`}>
                <h1>{props.titulo}</h1>
            </div>
            <p className={styles.espacoCards}></p>
        </div>
    )
}
