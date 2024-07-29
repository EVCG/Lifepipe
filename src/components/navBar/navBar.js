import { useEffect } from 'react';
import styles from './navBar.module.css';
import { useRouter } from 'next/router';
import Image from "next/image";
import perfil from "@/src/image/perfil.png";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

export default function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState();

  // Atualiza o estado ativo baseado na rota atual ao carregar o componente
  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  return (
    <div className={styles.ContainerNavBar}>
      <p className={styles.LogoNavBar} onClick={() => router.push("/home")}>LifePipe</p>
      <button className={`${active === '/home' ? styles.Click : styles.ButtonNavBar}`} 
              onClick={() => router.push("/home")}>Inicio</button>
      <p className={`${styles.tasksNavBar} ${active === '/TarefasSolicitacoes' ? styles.Click : ''}`} 
         onClick={() => router.push("/TarefasSolicitacoes")}>Tarefas e solicitações</p>
      <div className={styles.searchContainer}>
        <IoSearch className={styles.searchIcon} />
        <input type='text' className={styles.inputNavBar} placeholder="Pesquisar..." />
      </div>
      <div className={styles.Line}> <Image src={perfil} width={55} height={55} alt='imagem de perfil' /></div>
    </div>
  );
}
