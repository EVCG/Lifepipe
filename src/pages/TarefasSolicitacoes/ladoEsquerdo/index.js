export default function ladoEsquerdoTS() {

    return(
        <div className={styles.lateralEsquerda}>
            {/* Precisa altera imagem do fundo*/}
            <div className={styles.descricao}>
                <h1>Life Tecnologia e Consultoria Ltda</h1>
                <p>Faça com que essa página se destaque personalizando sua descrição. Clique em Personalizar para começar</p>

                <div className={styles.botaoPersonalizar}>
                    {/* Colocar icone */}
                    <p>Personalizar</p>
                </div>
            </div>
        </div>
    );
}