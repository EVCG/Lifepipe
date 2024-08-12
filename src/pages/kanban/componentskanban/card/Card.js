import { useState } from "react";
import style from "./card.module.css"; 
import PopUpDados from "../popUps/popUpDados/PopUpDados";

export default function Cards() {
    const [showPopUpData, setShowPopUpData] = useState(false);
    const [dataCard, setDataCard] = useState([
        { id: 1, nomeOrgao: "Ministerio da defesea", dataRo: "07/08/2023", informacoes: "Teste", valorTotal: "4.000.000.00", valorMensal: "330.00.00", dataPregao: "03/05/2024", },
        { id: 2, nomeOrgao: "teste 2", dataRo: "07/03/2023", informacoes: "simm", valorTotal: "3.000.000.00", valorMensal: "230.00.00", dataPregao: "03/05/2024", },
        { id: 3, nomeOrgao: "teste 2", dataRo: "07/03/2023", informacoes: "simm", valorTotal: "3.000.000.00", valorMensal: "230.00.00", dataPregao: "03/05/2024", },
        { id: 4, nomeOrgao: "teste 2", dataRo: "07/03/2023", informacoes: "simm", valorTotal: "3.000.000.00", valorMensal: "230.00.00", dataPregao: "03/05/2024", },
    ]);
    const handlePopUpData = () => {
        setShowPopUpData(!showPopUpData);
    };

    return (
        <> {showPopUpData && (
            <PopUpDados onClose={handlePopUpData} />
        )}
            <div className={style.ContainerCard}>
                {dataCard.map((card) => (
                    <div key={card.id} className={style.Card} onClick={handlePopUpData}>
                        <div className={style.DivTitle}>
                        <p className={style.TitleCard}>Nome do Órgão:{card.nomeOrgao}</p>
                        </div>
                        <p className={style.SubTitleCard}>Data de Abertura do RO:{card.dataRo}</p>
                        <p className={style.SubTitleCard}>Informações Relevantes:{card.informacoes}</p>
                        <p className={style.SubTitleCard}>Valor Total Estimado:{card.valorTotal}</p>
                        <p className={style.SubTitleCard}>Valor Mensal:{card.valorMensal}</p>
                        <p className={style.SubTitleCard}>Data do Pregão:{card.dataPregao}</p>
                    </div>
                ))}
            </div >
        </>
    );
}
