import styles from './home.module.css';
import { useRouter } from 'next/router';
import NavBar from "@/src/components/navBar/navBar";
import Footer from '@/src/components/footer/footer';
import Usuario from '@/src/components/usuario/usuario';
import SideBar from '@/src/components/SideBar/SideBar';
import { MdSupportAgent } from "react-icons/md";
import PopUpSupport from './components/pop-up-support';
import PopUpNewCard from './components/pop-up-new-card';
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [PopUp, setPopUp] = useState(false);
  const [PopUpCard, setPopUpCard] = useState(false);
  
  return (
    <>
      <NavBar />
      <div className={styles.ContainerHome}>
        {PopUpCard ? <PopUpNewCard  setPopUpCard={setPopUpCard}/>:<></>} 
         {PopUp ? <PopUpSupport  setPopUp={setPopUp} />:<></>} 
        <SideBar />
        <div className={styles.DataHome}>
          <Usuario />
          <div>
            <p className={styles.TitleCanban}>Cards</p>
            <div className={styles.LineHome} />
            <div className={styles.ButtonHome} onClick={()=>setPopUpCard(true)}>
              <div className={styles.PlusHome}>+</div>
              <p className={styles.nameCardHome}>Novo Card</p>
            </div>

          </div>

          <div>
            <p className={styles.TitleCanban}>Suporte</p>
            <div className={styles.LineHome} />
            <div className={styles.ButtonHome} onClick={()=>setPopUp(true)}>
              <div className={styles.PlusHome}><MdSupportAgent size={20} /></div>
              <p className={styles.nameCardHome}>Equipe de suporte</p>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
