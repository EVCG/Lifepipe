export default function ColunaCard() {
    return (
        <>
            <Coluna titulo='Analise de viabilidade' />
        </>
    )
}

function Coluna(props) {
    console.log(props)
    const titulo = "Titulo do card"
    return (
        <div>
            <h1>{props.titulo}</h1>
        </div>
    )
}