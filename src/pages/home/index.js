import styles from './home.module.css';
import { useRouter } from 'next/router';
import NavBar from "@/src/components/navBar/navBar";
import SideBar from '@/src/components/SideBar/SideBar';
import Footer from '@/src/components/footer/footer';
export default function Home() {
  const router = useRouter();

  return (
    <>
      <NavBar />
          <div className={styles.ContainerHome}>
        <SideBar/>
        <div>Dados</div>
      </div>
      <Footer/>
    </>
  );
}
