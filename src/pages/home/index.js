import styles from './home.module.css';
import { useRouter } from 'next/router';
import NavBar from "@/src/components/navBar/navBar";
import Footer from '@/src/components/footer/footer';
import Usuario from '@/src/components/usuario/usuario';
import SideBar from '@/src/components/SideBar/SideBar';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <NavBar />
          <div className={styles.ContainerHome}>
        <SideBar/>
        <div className={styles.DataHome}>
          <Usuario/>
          <>Cards</>
          </div>
      </div>
      <Footer/>
    </>
  );
}
