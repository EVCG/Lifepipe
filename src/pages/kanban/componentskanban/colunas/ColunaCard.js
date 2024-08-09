import { useState } from 'react';
import styles from '../../kanban.module.css'
import Card from "../card/Card";
import PopUpCadastro from '../popUps/popUpCadastro/PopUpCadastro';

export default function ColunaCard() {

    return (
        <div>
            <div className={styles.colunacards}>
                <Coluna titulo='Análise de viabilidade' classe='coluna-viabilidade' />
                <Coluna titulo='Elaboração de Custos' classe='coluna-custos' />
                <Coluna titulo='Aguardando o Pregão' classe='coluna-pregão' />
                <Coluna titulo='Pregões Encerrados' classe='coluna-encerrados' />
                <Coluna titulo='Pregões ganhos' classe='coluna-ganhos' />
                <Coluna titulo='Jurídico' classe='coluna-viabilidade' />
            </div>
        </div>
    )
}

function Coluna(props) {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={styles.conteudo}>
            <div className={`${styles.coluna} ${styles[props.classe]}`}>
                <h1>{props.titulo} <p onClick={handlePopup}>+</p></h1>
            </div>
            <div className={styles.espacoCards}>
                <Card />
            </div>
            {showPopup && (
                <PopUpCadastro onClose={handlePopup} />
            )}
        </div>
    )
}


