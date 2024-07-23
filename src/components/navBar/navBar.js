import styles from './navBar.module.css';
import { useRouter } from 'next/router';
import Image from "next/image";
import perfil from "@/src/image/perfil.png"
export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.ContainerNavBar}>
      <p>LifePipe</p>
      <button>inicio</button>
      <p>Tarefas e solicitações</p>
      <input type='text'/>
      <div> <Image src={perfil} width={50} height={50} alt='iamgem de perfil'/></div>
    </div>
  );
}
