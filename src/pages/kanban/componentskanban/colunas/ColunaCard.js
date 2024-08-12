import { useState } from 'react';
import styles from '../../kanban.module.css';
import Card from '../card/Card';
import PopUpCadastro from '../popUps/popUpCadastro/PopUpCadastro';

export default function ColunaCard() {
    return (
        <div>
            <div className={styles.colunacards}>
                {/* OBS: Elisson faz um Mep para poder mostrar as colunas para não ter que ficar add na mão um por uma */}
                <Coluna titulo='Análise de viabilidade' classe='coluna-viabilidade' showCards={true} />
                <Coluna titulo='Elaboração de Custos' classe='coluna-custos' showCards={false} />
                <Coluna titulo='Aguardando o Pregão' classe='coluna-pregão' showCards={false} />
                <Coluna titulo='Pregões Encerrados' classe='coluna-encerrados' showCards={false} />
                <Coluna titulo='Pregões ganhos' classe='coluna-ganhos' showCards={false} />
                <Coluna titulo='Jurídico' classe='coluna-viabilidade' showCards={false} />
            </div>
        </div>
    );
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
                {props.showCards && <Card />}
            </div>
            {showPopup && (
                <PopUpCadastro onClose={handlePopup} />
            )}
        </div>
    );
}
