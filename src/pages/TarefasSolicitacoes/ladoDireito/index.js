import styles from "./ladoDireitoTS.module.css";
import { CiFilter } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";

export default function ladoDireitoTS(){

return( 

    <div className={styles.lateralDireita}>
        <h1>Bem-vindo, usuário {/*puxar nome do usuario no back end*/}</h1>
        <p>Confira o status das suas solicitações e responda as tarefas pendentes.</p>
    
        <div className={styles.containerTarefas}>
            <h1>Nenhuma tarefa pendente</h1>
            {/* Colocar botão de interrogação para tirar duvidas sobre o que aparecerá nessa área */}

            <div className={styles.tarefas}>
                <div className={styles.nav}>
                    <div className={styles.titulonav}>
                        <p>Pendentes</p>
                        <p>Finalizadas</p>
                    </div>

                    <div className={styles.componentes}>
                        
                        <div className={styles.botaoFitrar}>
                            <CiFilter className={styles.filtrar}/>
                            <p>Filtrar</p>
                        </div>
                        <div className={styles.pesquisar}>
                            <input type='text'></input>
                            <BiSearchAlt2  className={styles.lupa}/>
                        </div>
                    </div>
               
                </div>

                <p className={styles.vazio}>Você está em dia com as suas tarefas!Qualquer nova tarefa aparecerá aqui.</p>
            </div>

            <h1>Solicitações recentes</h1>

            <div className={styles.tarefas}>
                <div className={styles.nav}>
                    <div className={styles.titulonav}>
                        <p>Todas</p>
                    </div>

                    <div className={styles.pesquisanav}>
                        
                        <div className={styles.botaoFitrar}>
                            <CiFilter className={styles.filtrar}/>
                            <p>Filtrar</p>
                        </div>

                        <div className={styles.pesquisar}>
                            <input type='text'></input>
                            <BiSearchAlt2  className={styles.lupa}/>
                        </div>

                    </div>
               
                </div>

                <p className={styles.vazio}>Você está em dia com as suas Solicitações!Qualquer nova tarefa aparecerá aqui.</p>
            </div>

        </div>
    </div>
);
}