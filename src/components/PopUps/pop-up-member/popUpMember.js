import styles from './popUpMember.module.css';
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function PopUpMember({ setPopMember }) {
    return (
        <div className={styles.ContainerMember}>
            <div className={styles.ContentMember}>
                <div className={styles.ExitMember} onClick={() => setPopMember(false)}>x</div>

                <div className={styles.ContainerSearchMember}>
                    <div>
                        <h1 className={styles.TitleMember}> 2 Membro</h1>
                        <div className={styles.inputNavBarContainer}>
                            <IoSearch className={styles.searchIconMember} />
                            <input type='text' className={styles.inputNavBarMember} placeholder="Pesquisar por nome" />
                        </div>
                    </div>
                </div>
                <div className={styles.ContentData}>
                    <div className={styles.Data}>
                        <div className={styles.Table}>
                        <p className={styles.TitleName}>Nome</p>
                         <p className={styles.TitleName}>Função</p>
                        </div>
                        <div className={styles.LineMember}></div>

                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

