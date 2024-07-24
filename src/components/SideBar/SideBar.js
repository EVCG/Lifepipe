import styles from './sideBar.module.css';
import { useRouter } from 'next/router';
import { FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { PiSquareHalfFill } from "react-icons/pi";


export default function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.ContainerSideBar}>
      <div className={styles.contentIconSideBar}>
      <PiSquareHalfFill />
        <p className={styles.TitleButtons}>Quadros</p>
      </div>
      <div className={styles.contentIconSideBar}>
      <PiSquareHalfFill />
        <p className={styles.TitleButtons}>Templates</p>
      </div>
      <div className={styles.LineSideBar}/>
      <div className={styles.contentIconSideBar}>
      <IoPersonSharp />
        <p className={styles.TitleButtons}>Membros</p>
      </div>
      <div className={styles.contentIconSideBar}>
      <FaHeart />
        <p className={styles.TitleButtons}>Favoritos</p>
      </div>
      <div className={styles.contentIconSideBar}>
      <IoMdNotifications />
        <p className={styles.TitleButtons}>Notificações</p>
      </div>
      <div className={styles.contentIconSideBar}>
      <IoIosChatbubbles />
        <p className={styles.TitleButtons}>Chat</p>
      </div>
      <div className={styles.contentIconSideBar}>
      <IoSettings />
        <p className={styles.TitleButtons}>Configurações</p>
      </div>

    </div>
  );
}
