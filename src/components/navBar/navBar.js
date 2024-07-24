import styles from './navBar.module.css';
import { useRouter } from 'next/router';
import Image from "next/image";
import perfil from "@/src/image/perfil.png";
import { IoSearch } from "react-icons/io5";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.ContainerNavBar}>
      <p className={styles.LogoNavBar}>LifePipe</p>
      <button className={styles.ButtonNavBar}>inicio</button>
      <p className={styles.tasksNavBar}>Tarefas e solicitações</p>
      <div className={styles.searchContainer}>
        <IoSearch className={styles.searchIcon} />
        <input type='text' className={styles.inputNavBar} placeholder="Pesquisar..." />
      </div>
      <div className={styles.Line}> <Image src={perfil} width={55} height={55} alt='iamgem de perfil' /></div>
    </div>
  );
}