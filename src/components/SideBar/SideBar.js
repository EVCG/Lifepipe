import styles from './sideBar.module.css';
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.ContainerSideBar}>
      <div>
        <p className={styles.TitleButtons}>Quadros</p>
      </div>
      <div>
        <p className={styles.TitleButtons}>Templates</p>
      </div>
      <div className={styles.LineSideBar}/>
      <div>
        <p className={styles.TitleButtons}>Membros</p>
      </div>
      <div>
        <p className={styles.TitleButtons}>Favoritos</p>
      </div>
      <div>
        <p className={styles.TitleButtons}>Notificações</p>
      </div>
      <div>
        <p className={styles.TitleButtons}>Chat</p>
      </div>
      <div>
        <p className={styles.TitleButtons}>Configurações</p>
      </div>

    </div>
  );
}
