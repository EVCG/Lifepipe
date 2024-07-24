import styles from './usuario.module.css';
import { useRouter } from 'next/router';

export default function Usuario() {
  const router = useRouter();

  return (
    <div className={styles.ContainerUsuario}>
      <p className={styles.TitleUser}>Seja bem-vindo, <span style={{color:"#000"}}>Lucas</span>.</p>
    </div>
  );
}
