import styles from "./ladoDireitoTS.module.css";
import { CiFilter } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LadoDireitoTS() {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    return (
        <div className={styles.lateralDireita}>
            <h1>Bem-vindo, usuário {/*puxar nome do usuario no back end*/}</h1>
            <p>Confira o status das suas solicitações e responda as tarefas pendentes.</p>

            <div className={styles.containerTarefas}>
                <div className={styles.titulo}>
                    <h1>Nenhuma tarefa pendente</h1>
                    <GoQuestion 
                        className={styles.duvida}
                        onMouseEnter={() => setIsDropdownOpen1(true)}
                        onMouseLeave={() => setIsDropdownOpen1(false)} 
                    />
                        
                    <AnimatePresence>
                        {isDropdownOpen1 && (
                            <motion.div
                                animate={{ y: 0 }}
                                initial={{ y: -10 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className={styles.dropdownMenu}
                            >
                                <p>Sempre que alguém em Life Tecnologia e Consultoria enviar uma tarefa para você, ela estará listada aqui.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.tarefas}>
                    <div className={styles.nav}>
                        <div className={styles.titulonav}>
                            <p>Pendentes</p>
                            <p>Finalizadas</p>
                        </div>

                        <div className={styles.componentes}>
                            <div className={styles.botaoFitrar}>
                                <CiFilter className={styles.filtrar} />
                                <p>Filtrar</p>
                            </div>
                            <div className={styles.pesquisar}>
                                <input type='text'></input>
                                <BiSearchAlt2 className={styles.lupa} />
                            </div>
                        </div>
                    </div>

                    <p className={styles.vazio}>Você está em dia com as suas tarefas!Qualquer nova tarefa aparecerá aqui.</p>
                </div>

                <div className={styles.titulo}>
                    <h1>Solicitações recentes</h1>
                    <GoQuestion 
                        className={styles.duvida}
                        onMouseEnter={() => setIsDropdownOpen2(true)}
                        onMouseLeave={() => setIsDropdownOpen2(false)} 
                    />

                    <AnimatePresence>
                        {isDropdownOpen2 && (
                            <motion.div
                                animate={{ y: 0 }}
                                initial={{ y: -10 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className={styles.dropdownMenu}
                            >
                                <p>Sempre que alguém em Life Tecnologia e Consultoria enviar uma tarefa para você, ela estará listada aqui.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.tarefas}>
                    <div className={styles.nav}>
                        <div className={styles.titulonav}>
                            <p>Todas</p>
                        </div>

                        <div className={styles.pesquisanav}>
                            <div className={styles.botaoFitrar}>
                                <CiFilter className={styles.filtrar} />
                                <p>Filtrar</p>
                            </div>

                            <div className={styles.pesquisar}>
                                <input type='text'></input>
                                <BiSearchAlt2 className={styles.lupa} />
                            </div>
                        </div>
                    </div>

                    <p className={styles.vazio}>Você está em dia com as suas Solicitações!Qualquer nova tarefa aparecerá aqui.</p>
                </div>
            </div>
        </div>
    );
}
