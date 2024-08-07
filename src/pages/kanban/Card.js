export default function Cards(){
    return(
        <CardsConteudo nomeOrgao ="Nome do Orgão" dataRo="Data abertura RO:" informacoes="Informações Relevantes:" valorTotal="Valor Total Estimado:" valorMensal="Valor Mensal:" dataPregao="Data do pregão" />
    )
}

function CardsConteudo(props){
    console.log(props)
    const nomeOrgao = "Nome do Orgão:"
    const dataRo = "Data abertura RO:"
    const informacoes = "Informações Relevantes:"
    const valorTotal = "Valor Total Estimado:"
    const valorMensal = "Nome Valor Mensal:"
    const dataPregao = "Data do pregão:"

    return(
        <li>
            <p>{props.nomeOrgao}</p>
            <p>{props.dataRo}</p>
            <p>{props.informacoes}</p>
            <p>{props.valorTotal}</p>
            <p>{props.valorMensal}</p>
            <p>{props.dataPregao}</p>
        </li>
    )
    
}