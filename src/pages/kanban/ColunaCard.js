import { useState } from 'react';
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
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={styles.conteudo}>
            <div className={`${styles.coluna} ${styles[props.classe]}`}>
                <h1>{props.titulo} <p onClick={handlePopup}>+</p></h1>
            </div>
            <div className={styles.espacoCards}></div>
            {showPopup && (
                <Popup onClose={handlePopup} />
            )}
        </div>
    )
}

function Popup({ onClose }) {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <div className={styles.input}>
                    <h1>Nome do Orgão:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Data abertura RO:</h1>
                    <input type='date' />
                </div>
                <div className={styles.input}>
                    <h1>Informações Relevantes:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Data do pregão:</h1>
                    <input type='date' />
                </div>
                <div className={styles.input}>
                    <h1>Analista Responsavel:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Dia de Cadastro da Licitação:</h1>
                    <input type='date' />
                </div>
                <div className={styles.input}>
                    <h1>Objeto do Edital:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Modalidade do Pregão:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Número do Pregão:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Número do UASG:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Tratamento:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Vigência:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.input}>
                    <h1>Exige vistoria?:</h1>
                    <label>
                        <input type='checkbox' /> Sim
                    </label>
                    <label>
                        <input type='checkbox' /> Não
                    </label>
                    <label>
                        <input type='checkbox' /> Facultativo
                    </label>
                </div>
                <div className={styles.input}>
                    <h1>Exige Valor Estimado no Edital?:</h1>
                    <label>
                        <input type='checkbox' /> Sim
                    </label>
                    <label>
                        <input type='checkbox' /> Não
                    </label>
            
                </div>
                <div className={styles.input}>
                    <h1>Anexo do Edital</h1>
                    <input type='file'></input>
                </div>
                <div className={styles.input}>
                    <h1 className={styles.observacao}>Observação:</h1>
                    <input type='text' placeholder='Digite aqui...' />
                </div>
                <div className={styles.criarCard}>
                    <button>Criar novo card</button>
                </div>
            </div>
        </div>
    );
}
