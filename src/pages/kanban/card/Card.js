import { useState } from "react";
import style from "./card.module.css"; // Corrigido o caminho do arquivo CSS

export default function Cards() {

    const [dataCard, setDataCard] = useState([
        {id: 1 ,nomeOrgao: "ministerio da defesea", dataRo: "07/08/2023", informacoes: "Teste", valorTotal: "4.000.000.00", valorMensal: "330.00.00", dataPregao: "03/05/2024",},
        {id: 2, nomeOrgao: "teste 2", dataRo: "07/03/2023", informacoes: "simm", valorTotal: "3.000.000.00", valorMensal: "230.00.00", dataPregao: "03/05/2024",},
    ]);

    return (
        <div className={style.ContainerCard}>
            {dataCard.map((card) => (
                <div key={card.id} className={style.Card}>
                    <p>Nome do Órgão:{card.nomeOrgao}</p>
                    <p>Data de Abertura do RO:{card.dataRo}</p>
                    <p>Informações Relevantes:{card.informacoes}</p>
                    <p>Valor Total Estimado:{card.valorTotal}</p>
                    <p>Valor Mensal:{card.valorMensal}</p>
                    <p>Data do Pregão:{card.dataPregao}</p>
                </div>
            ))}
        </div >
    );
}
