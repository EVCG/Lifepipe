import styles from './PopUpDados.module.css';

export default function PopUpDados({ onClose }) {

    return (
        <>
            <div className={styles.ContainerPoUpDados}>
            <span className={styles.close} onClick={onClose}>x</span>
                <div className={styles.ContentPoUpDados}>

                <div className={styles.popupContent}>
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
            </div>
        </>
    );
};